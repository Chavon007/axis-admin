import { useState } from "react";
import {
  supabaseSignup,
  supabaseLogin,
  supabaseSignout,
} from "../services/authService";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import type { SignupDetails, LoginDetails } from "../types/auth";
import { setUser, clearUser } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

function useAuth() {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSucces] = useState("");
  const navigate = useNavigate();

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
  const emailPattern = /^[^s@]+@[^s@]+\.[^s@]+$/;

  //   sign up

  const signup = async (formDate: SignupDetails) => {
    setLoading(true);
    setError("");
    setSucces("");

    if (
      !formDate.firstName ||
      !formDate.email ||
      !formDate.hotelName ||
      !formDate.confirmedPassword ||
      !formDate.password ||
      !formDate.password ||
      !formDate.policy ||
      !formDate.role
    ) {
      setError("Please fill all required fields");
      return;
    }
    if (formDate.password !== formDate.confirmedPassword) {
      setError("Password and confirmpassword does not match");
      return;
    }
    if (!passwordRegex.test(formDate.password)) {
      setError(
        "Password must include a uppercase, number, sysmbols and it must be 8 characterv long",
      );
      return;
    }
    if (!emailPattern.test(formDate.email)) {
      setError("Use a proper email address");
      return;
    }
    try {
      await supabaseSignup(formDate);
      setSucces("Account created succesfully");
      setTimeout(() => {
        navigate("/verify-account");
      }, 2000);
    } catch (err: any) {
      setError(err.message || "Faileed to create account");
    } finally {
      setLoading(false);
    }
  };

  //   login

  const login = async (formData: LoginDetails) => {
    setLoading(true);
    setError("");
    setSucces("");
    if (!formData.email || !formData.password) {
      setError("please fill all requitred fields");
      return;
    }
    try {
      const data = await supabaseLogin(formData);
      dispatch(
        setUser({
          user: data.user as any,
          token: data.session?.access_token ?? "",
        }),
      );

      setSucces("Login successfull");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await supabaseSignout();
      dispatch(clearUser());
      setSucces("Signed out");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return { success, error, signup, loading, login, logout };
}
export default useAuth;
