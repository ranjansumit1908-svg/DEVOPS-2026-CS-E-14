import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api, { clearSession, getErrorMessage } from "../api.js";

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const emptyForm = {
  title: "",
  subject: "",
  description: "",
  dueDate: "",
  pdf: "",
};

function Assignments() {
  const navigate = useNavigate();
  const role = localStorage.getItem("userRole");

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState(emptyForm);
  const [formError, setFormError] = useState("");
  const [saving, setSaving] = useState(false);

  const [version, setVersion] = useState(0);
  const reload = () => setVersion((v) => v + 1);

  useEffect(() => {
    api
      .get("/assignments")
      .then(({ data }) => {
        setItems(data);
        setError("");
      })
      .catch((err) => {
        if (err.response?.status === 401) {
          clearSession();
          navigate("/login");
          return;
        }
        setError(getErrorMessage(err));
      })
      .finally(() => setLoading(false));
  }, [version, navigate]);

  const assignments = items.map((item) => ({
    id: item._id,
    title: item.title,
    subject: item.subject,
    teacher: item.teacher?.name,
    description: item.description,
    dueDate: formatDate(item.dueDate),
    pdf: item.pdf,
    submissions: item.submissionCount,
    submission: item.submission,
  }));

  const statusOf = (assignment) => {
    if (!assignment.submission) return { label: "Not Submitted", css: "pending" };
    if (assignment.submission.marks !== null) return { label: "Graded", css: "submitted" };
    return { label: "Submitted", css: "submitted" };
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormError("");
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setSaving(true);
    setFormError("");

    try {
      await api.post("/assignments", formData);
      setFormData(emptyForm);
      reload();
    } catch (err) {
      setFormError(getErrorMessage(err));
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this assignment and all its submissions?")) {
      return;
    }

    try {
      await api.delete(`/assignments/${id}`);
      reload();
    } catch (err) {
      setError(getErrorMessage(err));
    }
  };

  return (
    <div className="assignments-page">

      {/* Header */}
      <div className="assignments-header">

        <div className="assignments-heading">
          <span className="page-label">ACADEMIC WORKSPACE</span>

          <h1>Assignments</h1>

          <p>
            {role === "teacher"
              ? "Create assignments and review what your students submit."
              : "View your assigned work, deadlines and submission status."}
          </p>
        </div>

        <button
          className="back-btn"
          onClick={() => navigate("/dashboard")}
        >
          ← Dashboard
        </button>

      </div>

      {/* Create form (teachers only) */}
      {role === "teacher" && (
        <form className="create-form" onSubmit={handleCreate}>

          <h2>Create Assignment</h2>

          <div className="create-grid">

            <div className="field">
              <label htmlFor="title">TITLE</label>
              <input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Data Structures Assignment"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="subject">SUBJECT</label>
              <input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Data Structures"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="dueDate">DUE DATE</label>
              <input
                id="dueDate"
                name="dueDate"
                type="date"
                value={formData.dueDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="pdf">PDF LINK (OPTIONAL)</label>
              <input
                id="pdf"
                name="pdf"
                type="url"
                value={formData.pdf}
                onChange={handleChange}
                placeholder="https://..."
              />
            </div>

            <div className="field field-wide">
              <label htmlFor="description">DESCRIPTION</label>
              <textarea
                id="description"
                name="description"
                rows="3"
                value={formData.description}
                onChange={handleChange}
                placeholder="Instructions for the students"
              />
            </div>

          </div>

          {formError && <div className="form-error">{formError}</div>}

          <button
            type="submit"
            className="upload-btn"
            disabled={saving}
          >
            {saving ? "Publishing..." : "Publish Assignment"}
          </button>

        </form>
      )}

      {/* States */}
      {loading && <p className="state-message">Loading assignments...</p>}

      {!loading && error && <div className="form-error">{error}</div>}

      {!loading && !error && assignments.length === 0 && (
        <p className="state-message">
          {role === "teacher"
            ? "You have not created any assignments yet."
            : "No assignments have been posted yet."}
        </p>
      )}

      {/* Assignment List */}
      <div className="assignments-list">

        {assignments.map((assignment) => {
          const status = statusOf(assignment);

          return (
            <div className="assignment-card" key={assignment.id}>

              <div className="assignment-accent"></div>

              <div className="assignment-content">

                {/* Top */}
                <div className="assignment-top">

                  <div className="assignment-title-section">
                    <span className="assignment-number">
                      ASSIGNMENT {String(assignments.indexOf(assignment) + 1).padStart(2, "0")}
                    </span>

                    <h2>{assignment.title}</h2>

                    <span className="subject">
                      {assignment.subject}
                    </span>
                  </div>

                  <span className={`status ${role === "teacher" ? "submitted" : status.css}`}>
                    {role === "teacher"
                      ? `${assignment.submissions} Submitted`
                      : status.label}
                  </span>

                </div>

                {/* Description */}
                <p className="description">
                  {assignment.description || "No description provided."}
                </p>

                {/* Details */}
                <div className="assignment-meta">

                  <div className="meta-item">
                    <span className="meta-label">ASSIGNED BY</span>
                    <span className="meta-value">
                      {assignment.teacher}
                    </span>
                  </div>

                  <div className="meta-divider"></div>

                  <div className="meta-item">
                    <span className="meta-label">DUE DATE</span>
                    <span className="meta-value">
                      {assignment.dueDate}
                    </span>
                  </div>

                </div>

                {/* Actions */}
                <div className="assignment-actions">

                  <button
                    className="view-btn"
                    onClick={() =>
                      navigate(`/assignments/${assignment.id}`)
                    }
                  >
                    {role === "teacher" ? "Review Submissions" : "View Assignment"}
                    <span>→</span>
                  </button>

                  {assignment.pdf && (
                    <a
                      href={assignment.pdf}
                      className="pdf-btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="pdf-icon">PDF</span>
                      View PDF
                    </a>
                  )}

                  {role === "teacher" && (
                    <button
                      className="danger-btn"
                      onClick={() => handleDelete(assignment.id)}
                    >
                      Delete
                    </button>
                  )}

                </div>

              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default Assignments;
