import React from "react";

function Dashboard() {
  const assignments = [
    {
      title: "Data Structures Assignment",
      subject: "DSA",
      dueDate: "15 Sep 2026",
      status: "Pending",
    },
    {
      title: "Operating Systems Assignment",
      subject: "Operating Systems",
      dueDate: "18 Sep 2026",
      status: "Submitted",
    },
    {
      title: "Database Management Assignment",
      subject: "DBMS",
      dueDate: "20 Sep 2026",
      status: "Pending",
    },
  ];

  return (
    <div className="dashboard">

      {/* ================= NAVBAR ================= */}

      <nav className="dashboard-navbar">

        <div className="dashboard-logo">
          Assignment Portal
        </div>

        <div className="dashboard-nav-links">
          <a href="/dashboard">Dashboard</a>
          <a href="/assignments">Assignments</a>
          <a href="/notifications">Notifications</a>
          <a href="/profile">Profile</a>
        </div>

      </nav>


      {/* ================= MAIN ================= */}

      <main className="dashboard-container">

        {/* ================= WELCOME ================= */}

        <section className="welcome-section">

          <div>
            <p className="welcome-small">
              WELCOME BACK 👋
            </p>

            <h1>
              Student Dashboard
            </h1>

            <p className="welcome-text">
              Manage your assignments, track deadlines,
              and keep your academic work organized.
            </p>
          </div>

          <button className="upload-btn">
            + Upload Assignment
          </button>

        </section>


        {/* ================= STATISTICS ================= */}

        <section className="stats-grid">

          <div className="stat-card">
            <h3>Total Assignments</h3>
            <p className="stat-number">12</p>
            <span>All assigned work</span>
          </div>


          <div className="stat-card">
            <h3>Pending</h3>
            <p className="stat-number">5</p>
            <span>Need your attention</span>
          </div>


          <div className="stat-card">
            <h3>Submitted</h3>
            <p className="stat-number">7</p>
            <span>Successfully submitted</span>
          </div>


          <div className="stat-card">
            <h3>Upcoming</h3>
            <p className="stat-number">3</p>
            <span>Deadlines approaching</span>
          </div>

        </section>


        {/* ================= RECENT ASSIGNMENTS ================= */}

        <section className="recent-section">

          <div className="section-heading">

            <div>
              <h2>
                Recent Assignments
              </h2>

              <p>
                Keep track of your latest assignments.
              </p>
            </div>

            <a
              href="/assignments"
              className="view-all"
            >
              View All →
            </a>

          </div>


          {/* Assignment List */}

          <div className="assignment-list">

            {assignments.map((assignment, index) => (

              <div
                className="assignment-card"
                key={index}
              >

                <div className="assignment-info">

                  <h3>
                    {assignment.title}
                  </h3>

                  <p>
                    {assignment.subject}
                  </p>

                </div>


                <div className="assignment-due">

                  <span>
                    DUE DATE
                  </span>

                  <strong>
                    {assignment.dueDate}
                  </strong>

                </div>


                <div
                  className={`assignment-status ${
                    assignment.status.toLowerCase()
                  }`}
                >
                  {assignment.status}
                </div>


                <button className="view-btn">
                  View
                </button>

              </div>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;