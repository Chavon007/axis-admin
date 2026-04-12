import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <div>
        <article>
          <img src="" alt="" />
          <h3>Sign in</h3>
          <small>Hotel management portal</small>
          <form>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={}
                placeholder="Enter email address"
              />
            </label>

            <label>
              Password
              <input
                type="password"
                name="password"
                value={}
                placeholder="********"
              />
            </label>

            <div>
              <label>
                {" "}
                <input type="checkbox" />
                Remember me
              </label>

              <Link to="">Forget password?</Link>
            </div>

            <button> Sign In</button>

            <p>
              <span>Don't have an account?</span>
              <span>
                <Link to="">Register</Link>
              </span>
            </p>

            <Link to="">Super Admin access - Super admin panel</Link>
          </form>
        </article>
      </div>
    </div>
  );
}

export default LoginPage;
