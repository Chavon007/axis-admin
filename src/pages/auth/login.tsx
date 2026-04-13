import { Link } from "react-router-dom";
import useAuth from "../../hooks/authHooks";
import React, { useState } from "react";
import type { LoginDetails } from "../../types/auth";

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
    <div>
      <div>
        <article>
          <img src="" alt="" />
          <h3>Sign in</h3>
          <small>Hotel management portal</small>
          <form onSubmit={handleSubmit}>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter email address"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </label>

            <label>
              Password
              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="********"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </label>

            <div>
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>

              <Link to="">Forget password?</Link>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "logging in..." : "Login"}
            </button>
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
            <p>
              <span>Don't have an account?</span>
              <span>
                <Link to="">Register</Link>
              </span>
            </p>

            <Link to="">Super Admin access - Super admin panel</Link>
          </form>
        </article>

        {/* image */}
        <div>
          <img src="" alt="axis logo" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
