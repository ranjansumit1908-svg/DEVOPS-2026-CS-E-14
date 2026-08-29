import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError("Passwords do not match.");
      return;
    }

    /*
      Backend registration will be connected here later.
    */

    console.log("Registration Data:", formData);

    // Temporary navigation
    navigate("/login");
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

          <span>
            ACADEMIC WORKSPACE
          </span>

          <i></i>

          <strong>
            2026
          </strong>

        </div>

      </header>


      {/* ================= MAIN ================= */}

      <main className="auth-main register-main">

        {/* ================= LEFT ================= */}

        <section className="auth-intro">

          <div className="auth-eyebrow">

            <span>
              CREATE YOUR SPACE
            </span>

            <div></div>

            <small>
              02 / 02
            </small>

          </div>


          <h1>

            Start
            <br />

            <span>
              organized.
            </span>

          </h1>


          <p className="auth-description">

            Create your account and bring all your
            assignments, deadlines, and academic work
            into one focused workspace.

          </p>


          <div className="auth-quote">

            <span></span>

            <p>
              Plan better. Submit smarter.
            </p>

          </div>

        </section>


        {/* ================= REGISTER PANEL ================= */}

        <section className="login-panel register-panel">

          <div className="login-panel-top">

            <div>

              <span className="panel-label">
                NEW ACCOUNT
              </span>

              <h2>
                Create account
              </h2>

            </div>


            <div className="panel-number">
              02
            </div>

          </div>


          <div className="panel-divider"></div>


          {/* ================= FORM ================= */}

          <form onSubmit={handleSubmit}>

            {/* NAME */}

            <div className="input-group">

              <label htmlFor="name">
                FULL NAME
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />

            </div>


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
                placeholder="Choose a username"
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
                  placeholder="Create a password"
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword
                    ? "HIDE"
                    : "SHOW"}
                </button>

              </div>

            </div>


            {/* CONFIRM PASSWORD */}

            <div className="input-group">

              <label htmlFor="confirmPassword">
                CONFIRM PASSWORD
              </label>

              <div className="password-wrapper">

                <input
                  id="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword
                    ? "HIDE"
                    : "SHOW"}
                </button>

              </div>

            </div>


            {/* ERROR */}

            {error && (
              <div className="form-error">
                {error}
              </div>
            )}


            {/* SUBMIT */}

            <button
              type="submit"
              className="auth-submit"
            >

              <span>
                CREATE ACCOUNT
              </span>

              <span className="submit-arrow">
                →
              </span>

            </button>

          </form>


          {/* LOGIN LINK */}

          <div className="register-prompt">

            <span>
              Already have an account?
            </span>

            <Link to="/login">
              Sign in
            </Link>

          </div>


          {/* SECURITY */}

          <div className="security-note">

            <span className="security-icon">
              ✓
            </span>

            <span>
              Your academic workspace starts here
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

export default Register;