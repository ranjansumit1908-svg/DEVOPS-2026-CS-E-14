import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /*
      Backend authentication will be connected here later.

      For now, this simply demonstrates the login flow.
    */

    console.log("Login Data:", formData);

    // Temporary navigation
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">

      {/* ================= HEADER ================= */}

      <header className="auth-header">

        <Link to="/" className="auth-brand">

          <div className="auth-brand-mark">
            <span>A</span>
          </div>

          <div>
            <p>ASSIGNMENT</p>
            <span>PORTAL</span>
          </div>

        </Link>


        <div className="auth-header-right">

          <span>ACADEMIC WORKSPACE</span>

          <i></i>

          <strong>2026</strong>

        </div>

      </header>


      {/* ================= MAIN ================= */}

      <main className="auth-main">

        {/* ================= LEFT ================= */}

        <section className="auth-intro">

          <div className="auth-eyebrow">

            <span>WELCOME BACK</span>

            <div></div>

            <small>02 / 02</small>

          </div>


          <h1>
            Your work.
            <br />

            <span>Still here.</span>
          </h1>


          <p className="auth-description">
            Sign in to continue managing your assignments,
            tracking deadlines, and keeping your academic
            work organized.
          </p>


          <div className="auth-quote">

            <span></span>

            <p>
              Everything in one place.
            </p>

          </div>

        </section>


        {/* ================= LOGIN CARD ================= */}

        <section className="login-panel">

          <div className="login-panel-top">

            <div>

              <span className="panel-label">
                ACCOUNT ACCESS
              </span>

              <h2>
                Sign in
              </h2>

            </div>


            <div className="panel-number">
              01
            </div>

          </div>


          <div className="panel-divider"></div>


          {/* FORM */}

          <form onSubmit={handleSubmit}>

            {/* USERNAME */}

            <div className="input-group">

              <label htmlFor="username">
                USERNAME
              </label>

              <input
                id="username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                autoComplete="username"
                required
              />

            </div>


            {/* PASSWORD */}

            <div className="input-group">

              <label htmlFor="password">
                PASSWORD
              </label>

              <div className="password-wrapper">

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>

              </div>

            </div>


            {/* FORGOT */}

            <div className="form-options">

              <span>
                Keep your credentials secure.
              </span>

              <button
                type="button"
                className="forgot-button"
              >
                Forgot password?
              </button>

            </div>


            {/* SUBMIT */}

            <button
              type="submit"
              className="auth-submit"
            >

              <span>
                SIGN IN
              </span>

              <span className="submit-arrow">
                →
              </span>

            </button>

          </form>


          {/* REGISTER */}

          <div className="register-prompt">

            <span>
              Don't have an account?
            </span>

            <Link to="/register">
              Create account
            </Link>

          </div>


          {/* SECURITY */}

          <div className="security-note">

            <span className="security-icon">
              ✓
            </span>

            <span>
              Secure student workspace
            </span>

          </div>

        </section>

      </main>


      {/* ================= RUNNING FOOTER ================= */}

      <footer className="auth-marquee-footer">

        <div className="auth-marquee-track">

          <span>
            ASSIGNMENT PORTAL
          </span>

          <b>•</b>

          <span>
            ORGANIZE YOUR WORK
          </span>

          <b>•</b>

          <span>
            TRACK DEADLINES
          </span>

          <b>•</b>

          <span>
            SUBMIT WITH CONFIDENCE
          </span>

          <b>•</b>


          <span>
            ASSIGNMENT PORTAL
          </span>

          <b>•</b>

          <span>
            ORGANIZE YOUR WORK
          </span>

          <b>•</b>

          <span>
            TRACK DEADLINES
          </span>

          <b>•</b>

          <span>
            SUBMIT WITH CONFIDENCE
          </span>

          <b>•</b>

        </div>

      </footer>

    </div>
  );
}

export default Login;