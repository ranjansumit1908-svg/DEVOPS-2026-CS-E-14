import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function SplashScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(72);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="splash-page">

      {/* ================= HEADER ================= */}

      <header className="splash-header">

        <div className="brand">

          <div className="brand-mark">
            <span>A</span>
          </div>

          <div className="brand-text">
            <p className="brand-title">
              ASSIGNMENT
            </p>

            <p className="brand-subtitle">
              PORTAL
            </p>
          </div>

        </div>


        <div className="header-right">

          <span>
            ACADEMIC WORKSPACE
          </span>

          <i></i>

          <strong>
            2026
          </strong>

        </div>

      </header>


      {/* ================= MAIN CONTENT ================= */}

      <main className="splash-main">

        {/* ================= LEFT ================= */}

        <section className="splash-content">

          {/* Eyebrow */}

          <div className="eyebrow">

            <span>
              YOUR WORKSPACE
            </span>

            <div></div>

            <small>
              01 / 01
            </small>

          </div>


          {/* Main Heading */}

          <h1 className="hero-title">

            <span className="hero-word work">
              WORK
            </span>

            <span className="hero-word smarter">
              SMARTER<span className="orange-dot">.</span>
            </span>

          </h1>


          {/* Decorative Line */}

          <div className="title-line">

            <span></span>

            <i></i>

          </div>


          {/* Slogan */}

          <div className="slogan">

            <h2>
              Every assignment.
              <br />

              Every deadline.
              <br />

              <em>
                One place.
              </em>
            </h2>


            <p>
              Organize your academic work, stay ahead
              of deadlines, and submit with confidence
              through one focused workspace.
            </p>

          </div>


          {/* Get Started */}

          <div className="cta-wrapper">

            <Link
              to="/login"
              className="start-button"
            >

              <span>
                GET STARTED
              </span>

              <span className="arrow">
                →
              </span>

            </Link>


            <span className="cta-caption">
              SIMPLE / FOCUSED / ORGANIZED
            </span>

          </div>

        </section>


        {/* ================= RIGHT ================= */}

        <section className="assignment-visual">

          {/* Large Number */}

          <div className="background-number">
            01
          </div>


          {/* Vertical Text */}

          <div className="vertical-label">
            ASSIGN · TRACK · SUBMIT
          </div>


          {/* Paper Stack */}

          <div className="paper-stack">

            <div className="paper-back paper-one"></div>

            <div className="paper-back paper-two"></div>


            {/* Main Assignment Paper */}

            <div className="assignment-paper">

              <div className="orange-strip"></div>


              <div className="paper-content">

                {/* Heading */}

                <div className="paper-heading">

                  <div>

                    <p className="tiny-label">
                      ASSIGNMENT / 01
                    </p>

                    <h3>
                      Web Development
                    </h3>

                  </div>


                  <div className="paper-logo">
                    A
                  </div>

                </div>


                <div className="paper-divider"></div>


                {/* Meta */}

                <div className="paper-meta">

                  <div>

                    <span>
                      DEADLINE
                    </span>

                    <strong>
                      28 AUG
                    </strong>

                  </div>


                  <div>

                    <span>
                      PROGRESS
                    </span>

                    <strong>
                      {progress}%
                    </strong>

                  </div>

                </div>


                {/* Progress */}

                <div className="progress-track">

                  <div
                    className="progress-bar"
                    style={{
                      width: `${progress}%`,
                    }}
                  ></div>

                </div>


                {/* Checklist */}

                <div className="checklist">

                  <p className="tiny-label">
                    CHECKLIST
                  </p>


                  <Task
                    number="01"
                    text="Research"
                    completed
                  />


                  <Task
                    number="02"
                    text="Design"
                    completed
                  />


                  <Task
                    number="03"
                    text="Development"
                  />


                  <Task
                    number="04"
                    text="Final Submission"
                  />

                </div>

              </div>


              {/* Paper Bottom */}

              <div className="paper-footer">

                <span>
                  STUDENT WORKSPACE
                </span>

                <strong>
                  2026
                </strong>

              </div>

            </div>


            {/* Deadline Card */}

            <div className="deadline-tag">

              <span>
                NEXT DEADLINE
              </span>

              <div>

                <strong>
                  28
                </strong>

                <small>
                  AUGUST
                </small>

              </div>

            </div>


            {/* Floating Accent */}

            <div className="floating-orange"></div>

          </div>

        </section>

      </main>


      {/* ================= RUNNING FOOTER ================= */}

      <footer className="marquee-footer">

        <div className="marquee-track">

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


/* =========================================================
   TASK COMPONENT
========================================================= */

function Task({
  number,
  text,
  completed = false,
}) {
  return (
    <div className="task">

      <span className="task-number">
        {number}
      </span>


      <div
        className={`task-checkbox ${
          completed ? "completed" : ""
        }`}
      >
        {completed && "✓"}
      </div>


      <span
        className={
          completed
            ? "task-done"
            : "task-pending"
        }
      >
        {text}
      </span>

    </div>
  );
}


export default SplashScreen;