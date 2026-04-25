import { useState } from "react";
import {
  supabaseSignup,
  supabaseLogin,
  supabaseSignout,
  getCurrentSession,
  getProfile,
} from "../services/authService";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import type { SignupDetails, LoginDetails } from "../types/auth";
import { setUser, clearUser } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

function useAuth() {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSucces] = useState("");
  const navigate = useNavigate();

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
      setLoading(false);
      return;
    }
    if (formDate.password !== formDate.confirmedPassword) {
      setError("Password and confirmpassword does not match");
      setLoading(false);
      return;
    }
    if (!passwordRegex.test(formDate.password)) {
      setError(
        "Password must include a uppercase, number, sysmbols and it must be 8 characterv long",
      );
      setLoading(false);
      return;
    }
    if (!emailPattern.test(formDate.email)) {
      setError("Use a proper email address");
      setLoading(false);
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
      const profile = await getProfile(data.user.id);
      dispatch(
        setUser({
          user: {
            ...profile,
            firstName: profile.firstname,
            lastName: profile.lastname,
            hotelName: profile.Hotels.name,
            hotelIamge: profile.Hotels.image,
          } as any,
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
      navigate("/login");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const verifyAccount = async () => {
    setVerifyLoading(false);
    setError("");
    try {
      const session = await getCurrentSession();

      if (!session) {
        setError("No active session found. Please verify your email first.");
        return;
      }
      dispatch(
        setUser({
          user: session.user as any,
          token: session.access_token,
        }),
      );

      setSucces("Account verified successfully");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setVerifyLoading(false);
    }
  };

  return {
    success,
    error,
    signup,
    loading,
    login,
    logout,
    verifyLoading,
    verifyAccount,
  };
}
export default useAuth;
