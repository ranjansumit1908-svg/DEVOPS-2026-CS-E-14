import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api, { clearSession, getErrorMessage } from "../api.js";

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const WEEK = 7 * 24 * 60 * 60 * 1000;

function Dashboard() {
  const navigate = useNavigate();
  const role = localStorage.getItem("userRole");

  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [now] = useState(() => Date.now());

  useEffect(() => {
    if (!role) return;

    api
      .get("/assignments")
      .then(({ data }) => setAssignments(data))
      .catch((err) => {
        if (err.response?.status === 401) {
          clearSession();
          navigate("/login");
          return;
        }
        setError(getErrorMessage(err));
      })
      .finally(() => setLoading(false));
  }, [role, navigate]);

  const handleLogout = () => {
    clearSession();
    navigate("/login");
  };

  // If no user is logged in, show a basic message.
  if (!role) {
    return (
      <div className="dashboard">
        <main className="dashboard-container">
          <h1>Please login first.</h1>
          <p className="state-message">
            <Link to="/login">Go to login</Link>
          </p>
        </main>
      </div>
    );
  }

  // ================= STUDENT DATA =================
  const studentAssignments = assignments.slice(0, 5).map((item) => ({
    id: item._id,
    title: item.title,
    subject: item.subject,
    dueDate: formatDate(item.dueDate),
    status: item.submission
      ? item.submission.marks !== null
        ? "Graded"
        : "Submitted"
      : "Pending",
  }));

  const submittedCount = assignments.filter((a) => a.submission).length;
  const upcomingCount = assignments.filter((a) => {
    const due = new Date(a.dueDate).getTime();
    return !a.submission && due >= now && due - now <= WEEK;
  }).length;

  // ================= TEACHER DATA =================
  const teacherAssignments = assignments.slice(0, 5).map((item) => ({
    id: item._id,
    title: item.title,
    subject: item.subject,
    submissions: item.submissionCount,
    status: new Date(item.dueDate).getTime() >= now ? "Active" : "Closed",
  }));

  const totalSubmissions = assignments.reduce(
    (sum, a) => sum + (a.submissionCount || 0),
    0
  );
  const pendingReviews = assignments.reduce(
    (sum, a) => sum + (a.pendingReviews || 0),
    0
  );
  const activeCount = assignments.filter(
    (a) => new Date(a.dueDate).getTime() >= now
  ).length;

  const renderState = () => {
    if (loading) {
      return <p className="state-message">Loading assignments...</p>;
    }

    if (error) {
      return <div className="form-error">{error}</div>;
    }

    if (assignments.length === 0) {
      return (
        <p className="state-message">
          {role === "teacher"
            ? "You have not created any assignments yet."
            : "No assignments have been posted yet."}
        </p>
      );
    }

    return null;
  };

  const stateBlock = renderState();

  // =====================================================
  // STUDENT PORTAL
  // =====================================================
  if (role === "student") {
    return (
      <div className="dashboard">

        {/* ================= NAVBAR ================= */}
        <nav className="dashboard-navbar">

          <div className="dashboard-logo">
            Assignment Portal
          </div>

          <div className="dashboard-nav-links">
            <Link to="/dashboard">
              Dashboard
            </Link>

            <Link to="/assignments">
              Assignments
            </Link>

            <button
              type="button"
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
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

            <button
              className="upload-btn"
              onClick={() => navigate("/assignments")}
            >
              + Upload Assignment
            </button>

          </section>

          {/* ================= STATISTICS ================= */}
          <section className="stats-grid">

            <div className="stat-card">
              <h3>
                Total Assignments
              </h3>
              <p className="stat-number">
                {assignments.length}
              </p>
              <span>
                All assigned work
              </span>
            </div>

            <div className="stat-card">
              <h3>
                Pending
              </h3>
              <p className="stat-number">
                {assignments.length - submittedCount}
              </p>
              <span>
                Need your attention
              </span>
            </div>

            <div className="stat-card">
              <h3>
                Submitted
              </h3>
              <p className="stat-number">
                {submittedCount}
              </p>
              <span>
                Successfully submitted
              </span>
            </div>

            <div className="stat-card">
              <h3>
                Upcoming
              </h3>
              <p className="stat-number">
                {upcomingCount}
              </p>
              <span>
                Due within 7 days
              </span>
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

              <Link
                to="/assignments"
                className="view-all"
              >
                View All →
              </Link>
            </div>

            {stateBlock}

            <div className="assignment-list">

              {studentAssignments.map((assignment) => (
                <div
                  className="assignment-card"
                  key={assignment.id}
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

                  <button
                    className="view-btn"
                    onClick={() =>
                      navigate(`/assignments/${assignment.id}`)
                    }
                  >
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

  // =====================================================
  // TEACHER PORTAL
  // =====================================================
  if (role === "teacher") {
    return (
      <div className="dashboard teacher-dashboard">

        {/* ================= NAVBAR ================= */}
        <nav className="dashboard-navbar">

          <div className="dashboard-logo">
            Assignment Portal
          </div>

          <div className="dashboard-nav-links">
            <Link to="/dashboard">
              Dashboard
            </Link>

            <Link to="/assignments">
              Assignments
            </Link>

            <button
              type="button"
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
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
                Teacher Dashboard
              </h1>

              <p className="welcome-text">
                Create assignments, track submissions,
                and manage your students' academic work.
              </p>
            </div>

            <button
              className="upload-btn"
              onClick={() => navigate("/assignments")}
            >
              + Create Assignment
            </button>

          </section>

          {/* ================= STATISTICS ================= */}
          <section className="stats-grid">

            <div className="stat-card">
              <h3>
                Total Assignments
              </h3>
              <p className="stat-number">
                {assignments.length}
              </p>
              <span>
                Assignments created
              </span>
            </div>

            <div className="stat-card">
              <h3>
                Active Assignments
              </h3>
              <p className="stat-number">
                {activeCount}
              </p>
              <span>
                Currently available
              </span>
            </div>

            <div className="stat-card">
              <h3>
                Total Submissions
              </h3>
              <p className="stat-number">
                {totalSubmissions}
              </p>
              <span>
                Received from students
              </span>
            </div>

            <div className="stat-card">
              <h3>
                Pending Reviews
              </h3>
              <p className="stat-number">
                {pendingReviews}
              </p>
              <span>
                Need your attention
              </span>
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
                  Monitor your latest assignments and submissions.
                </p>
              </div>

              <Link
                to="/assignments"
                className="view-all"
              >
                View All →
              </Link>
            </div>

            {stateBlock}

            <div className="assignment-list">

              {teacherAssignments.map((assignment) => (
                <div
                  className="assignment-card"
                  key={assignment.id}
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
                      SUBMISSIONS
                    </span>
                    <strong>
                      {assignment.submissions}
                    </strong>
                  </div>

                  <div
                    className={`assignment-status ${
                      assignment.status.toLowerCase()
                    }`}
                  >
                    {assignment.status}
                  </div>

                  <button
                    className="view-btn"
                    onClick={() =>
                      navigate(`/assignments/${assignment.id}`)
                    }
                  >
                    Review
                  </button>

                </div>
              ))}

            </div>

          </section>

        </main>
      </div>
    );
  }

  // Invalid role
  return (
    <div className="dashboard">
      <main className="dashboard-container">
        <h1>Invalid user role.</h1>
      </main>
    </div>
  );
}

export default Dashboard;
