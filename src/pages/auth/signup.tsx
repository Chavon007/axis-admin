import { useState } from "react";
import useAuth from "../../hooks/authHooks";
import type { SignupDetails } from "../../types/auth";
import { Link } from "react-router-dom";
import axislogo from "../../assets/AXIS.png";

function SignupPage() {
  const { loading, success, error, signup } = useAuth();

  const [formData, setFormData] = useState<SignupDetails>({
    firstName: "",
    lastName: "",
    email: "",
    policy: false,
    password: "",
    confirmedPassword: "",
    hotelName: "",
    role: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup(formData);
  };
  return (
    <div className="min-h-screen bg-gray-950 flex justify-center items-center px-4 py-4">
      <div className="w-full max-w-6xl flex justify-between overflow-hidden shadow-2xl  rounded-2xl bg-white">
        <div className="hidden w-[50%] md:flex items-center justify-center bg-gray-900 p-10">
          <img
            src={axislogo}
            alt="axis logo"
            className="max-w-sm object-contain"
          />
        </div>
        <article className="w-[50%]  p-5 flex flex-col">
          <h2 className="text-4xl font-bold font-montserra text-gray-900">
            Create Account
          </h2>
          <p className="text-gray-500 font-lato text-sm ">
            Register your hotel on Axis
          </p>

          <form onSubmit={handleSubmit} className=" mt-5 flex flex-col gap-2">
            {/* name */}
            <div className="grid grid-cols-2 gap-2">
              <label className="flex flex-col gap-2 text-sm font-lato font-medium text-gray-700 mb-1">
                First Name
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  placeholder="First name"
                  className="w-full px-4 py-3 border text-xs font-lato rounded-lg focus:outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-lato font-medium text-gray-700 mb-1">
                Last Name
                <input
                  type="text"
                  value={formData.lastName}
                  name="lastName"
                  placeholder="Last name"
                  className="w-full px-4 py-3 border text-xs font-lato rounded-lg focus:outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </label>
            </div>
            {/* hoetl name */}
            <div className="">
              <label className="flex flex-col gap-2 text-sm font-lato font-medium text-gray-700 mb-1">
                Hotel Name
                <input
                  type="text"
                  name="hotelName"
                  value={formData.hotelName}
                  placeholder="Hotel Name"
                  className="w-full px-4 py-3 border text-xs font-lato rounded-lg focus:outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, hotelName: e.target.value })
                  }
                />
              </label>
            </div>

            {/* email */}

            <div>
              <label className="flex flex-col gap-2 text-sm font-lato font-medium text-gray-700 mb-1">
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email address"
                  className="w-full px-4 py-3 border text-xs font-lato rounded-lg focus:outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </label>
            </div>
            {/* role */}
            <div>
              <label className="flex flex-col gap-2 text-sm font-lato font-medium text-gray-700 mb-1">
                Your Role
                <input
                  value={formData.role}
                  name="role"
                  type="text"
                  className="w-full px-4 py-3 border text-xs font-lato rounded-lg focus:outline-none"
                  placeholder="What's your role"
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                />
              </label>
            </div>
            {/* password */}
            <div>
              <label className="flex flex-col gap-2 text-sm font-lato font-medium text-gray-700 mb-1">
                Password
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Create password"
                  className="w-full px-4 py-3 border text-xs font-lato rounded-lg focus:outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </label>
            </div>

            <div>
              <label className="flex flex-col gap-2 text-sm font-lato font-medium text-gray-700 mb-1">
                Confirm Password
                <input
                  type="password"
                  className="w-full px-4 py-3 border text-xs font-lato rounded-lg focus:outline-none"
                  value={formData.confirmedPassword}
                  name=""
                  placeholder="Confirm password"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmedPassword: e.target.value,
                    })
                  }
                />
              </label>
            </div>

            <div>
              <label className="flex items-center gap-1 font-lato text-xs text-gray-500">
                <input
                  type="checkbox"
                  className="accent-black"
                  checked={formData.policy}
                  onChange={(e) =>
                    setFormData({ ...formData, policy: e.target.checked })
                  }
                />{" "}
                <p>I agree to Terms of Service and Privacy Policy</p>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full font-lato bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center text-sm gap-2"
            >
              {loading && (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full  animate-spin"></div>
              )}
              {loading ? "Creating" : "Create account"}
            </button>

            {error && (
              <p className="text-red-500 text-sm text-center font-lato">
                {error}
              </p>
            )}
            {success && (
              <p className="text-green-500 text-sm text-center font-lato">
                {success}
              </p>
            )}
          </form>
          <p className="text-sm text-center text-gray-600 font-montserra mt-2">
            Already have an account?{" "}
            <Link to="/" className="text-black font-lato text-xs font-semibold">
              Log in
            </Link>
          </p>
        </article>
      </div>
    </div>
  );
}

export default SignupPage;
