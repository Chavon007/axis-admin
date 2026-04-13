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
    <div>
      <div>
        <div>
          <img src={axislogo} alt="axis logo" />
        </div>
        <article>
          <h2>Create Account</h2>
          <p>Register your hotel on Axis</p>

          <form onSubmit={handleSubmit}>
            {/* name */}
            <div>
              <label>
                First Name
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  placeholder="First name"
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </label>

              <label>
                Last Name
                <input
                  type="text"
                  value={formData.lastName}
                  name="lastName"
                  placeholder="Last name"
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </label>
            </div>
            {/* hoetl name */}
            <div>
              <label>
                Hotel Name
                <input
                  type="text"
                  name="hotelName"
                  value={formData.hotelName}
                  placeholder="Hotel Name"
                  onChange={(e) =>
                    setFormData({ ...formData, hotelName: e.target.value })
                  }
                />
              </label>
            </div>

            {/* email */}

            <div>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email address"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </label>
            </div>
            {/* role */}
            <div>
              <label>
                Your Role
                <input
                  value={formData.role}
                  name="role"
                  type="text"
                  placeholder="What's your role"
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                />
              </label>
            </div>
            {/* password */}
            <div>
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Create password"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </label>
            </div>

            <div>
              <label>
                Confirm Password
                <input
                  type="password"
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
              <label>
                <input
                  type="checkbox"
                  checked={formData.policy}
                  onChange={(e) =>
                    setFormData({ ...formData, policy: e.target.checked })
                  }
                />{" "}
                <p>I agree to Terms of Service and Privacy Policy</p>
              </label>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Creating" : "Create account"}
            </button>

            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
          </form>
          <p>
            Already have an account? <Link to="/">Log in</Link>
          </p>
        </article>
      </div>
    </div>
  );
}

export default SignupPage;
