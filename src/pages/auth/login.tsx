import { Link } from "react-router-dom";
import useAuth from "../../hooks/authHooks";
import React, { useState } from "react";
import type { LoginDetails } from "../../types/auth";
import axislogo from "../../assets/AXIS.png";

function LoginPage() {
  const { login, loading, error, success } = useAuth();

  const [formData, setFormData] = useState<LoginDetails>({
    email: "",
    password: "",
  });

  const [remember, setRemember] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(formData);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* LEFT - FORM */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-4xl font-bold text-gray-900 font-montserra">
              Welcome Back
            </h3>
            <p className="text-gray-500 font-lato text-sm">
              Hotel management portal
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* EMAIL */}
            <div>
              <label className="block text-sm font-lato font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter email address"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 border text-xs font-lato rounded-lg focus:outline-none"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block font-lato text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="********"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-lg focus:outline-none"
              />
            </div>

            {/* REMEMBER + FORGOT */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="accent-black"
                />
                Remember me
              </label>

              <Link to="" className="text-black font-medium hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full font-lato bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center text-sm gap-2"
            >
              {loading && (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              )}
              {loading ? "Logging in..." : "Login"}
            </button>

            {/* ERROR / SUCCESS */}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            {success && (
              <p className="text-green-600 text-sm text-center">{success}</p>
            )}

            {/* REGISTER */}
            <p className="text-sm text-center text-gray-600">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-black font-semibold">
                Register
              </Link>
            </p>

            {/* ADMIN LINK */}
            <div className="text-center">
              <Link to="" className="text-xs text-gray-400 hover:text-black">
                Super Admin access
              </Link>
            </div>
          </form>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="hidden md:flex items-center justify-center bg-gray-900 p-10">
          <img
            src={axislogo}
            alt="Axis logo"
            className="max-w-xs object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
