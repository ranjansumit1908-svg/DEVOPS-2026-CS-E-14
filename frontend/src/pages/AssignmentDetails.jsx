import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api, { clearSession, getErrorMessage } from "../api.js";

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

// Teacher: grade one student's submission
function GradeForm({ assignmentId, submission, onSaved }) {
  const [marks, setMarks] = useState(submission.marks ?? "");
  const [feedback, setFeedback] = useState(submission.feedback || "");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      await api.put(
        `/assignments/${assignmentId}/submissions/${submission._id}/grade`,
        { marks, feedback }
      );
      await onSaved();
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <form className="grade-form" onSubmit={handleSubmit}>
      <div className="field">
        <label>MARKS (0-100)</label>
        <input
          type="number"
          min="0"
          max="100"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          required
        />
      </div>

      <div className="field grade-feedback">
        <label>FEEDBACK</label>
        <input
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Optional feedback for the student"
        />
      </div>

      <button type="submit" className="view-btn" disabled={saving}>
        {saving ? "Saving..." : submission.marks === null ? "Save Grade" : "Update Grade"}
      </button>

      {error && <div className="form-error">{error}</div>}
    </form>
  );
}

function AssignmentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const role = localStorage.getItem("userRole");

  const [assignment, setAssignment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [answer, setAnswer] = useState("");
  const [link, setLink] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [version, setVersion] = useState(0);
  const reload = () => setVersion((v) => v + 1);

  useEffect(() => {
    api
      .get(`/assignments/${id}`)
      .then(({ data }) => {
        setAssignment(data);
        setError("");
        // Pre-fill the form with an earlier submission
        setAnswer(data.submission?.answer || "");
        setLink(data.submission?.link || "");
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
  }, [id, version, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    try {
      await api.post(`/assignments/${id}/submit`, { answer, link });
      reload();
    } catch (err) {
      setSubmitError(getErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  const submission = assignment?.submission;
  const graded = submission && submission.marks !== null;

  return (
    <div className="details-page">
      <div className="details-wrap">

        <Link to="/assignments" className="details-back">
          ← BACK TO ASSIGNMENTS
        </Link>

        {loading && <p className="state-message">Loading assignment...</p>}

        {!loading && error && <div className="form-error">{error}</div>}

        {assignment && (
          <>
            <div className="details-card">

              <p className="details-label">ASSIGNMENT DETAILS</p>

              <h1>{assignment.title}</h1>

              <span className="subject">{assignment.subject}</span>

              <p className="details-text">
                {assignment.description || "No description provided."}
              </p>

              <div className="details-meta">
                <div>
                  <span className="meta-label">ASSIGNED BY</span>
                  <strong>{assignment.teacher?.name}</strong>
                </div>

                <div>
                  <span className="meta-label">DUE DATE</span>
                  <strong>{formatDate(assignment.dueDate)}</strong>
                </div>

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
              </div>

            </div>

            {/* ============ STUDENT VIEW ============ */}
            {role === "student" && (
              <div className="details-card">

                <p className="details-label">YOUR SUBMISSION</p>

                {graded && (
                  <div className="grade-result">
                    <strong>{submission.marks} / 100</strong>
                    <p>{submission.feedback || "No feedback provided."}</p>
                  </div>
                )}

                {submission && !graded && (
                  <div className="form-success">
                    Submitted on {formatDate(submission.updatedAt)}. Waiting for review.
                    You can still edit it below.
                  </div>
                )}

                {!graded && (
                  <form onSubmit={handleSubmit}>

                    <div className="field">
                      <label htmlFor="answer">ANSWER</label>
                      <textarea
                        id="answer"
                        rows="6"
                        value={answer}
                        onChange={(e) => {
                          setAnswer(e.target.value);
                          setSubmitError("");
                        }}
                        placeholder="Write your answer here"
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="link">LINK TO YOUR WORK (OPTIONAL)</label>
                      <input
                        id="link"
                        type="url"
                        value={link}
                        onChange={(e) => {
                          setLink(e.target.value);
                          setSubmitError("");
                        }}
                        placeholder="https://drive.google.com/..."
                      />
                    </div>

                    {submitError && <div className="form-error">{submitError}</div>}

                    <button
                      type="submit"
                      className="upload-btn"
                      disabled={submitting}
                    >
                      {submitting
                        ? "Submitting..."
                        : submission
                          ? "Update Submission"
                          : "Submit Assignment"}
                    </button>

                  </form>
                )}

                {graded && (
                  <div className="submission-body">
                    <span className="meta-label">YOUR ANSWER</span>
                    <p>{submission.answer || "—"}</p>
                    {submission.link && (
                      <a href={submission.link} target="_blank" rel="noreferrer">
                        {submission.link}
                      </a>
                    )}
                  </div>
                )}

              </div>
            )}

            {/* ============ TEACHER VIEW ============ */}
            {role === "teacher" && (
              <div className="details-card">

                <p className="details-label">
                  SUBMISSIONS ({assignment.submissions?.length || 0})
                </p>

                {assignment.submissions?.length === 0 && (
                  <p className="state-message">
                    No student has submitted this assignment yet.
                  </p>
                )}

                {assignment.submissions?.map((item) => (
                  <div className="submission-item" key={item._id}>

                    <div className="submission-head">
                      <strong>{item.student?.name}</strong>
                      <span>@{item.student?.username}</span>
                      <span className={`status ${item.marks === null ? "pending" : "submitted"}`}>
                        {item.marks === null ? "Needs review" : `${item.marks} / 100`}
                      </span>
                    </div>

                    <div className="submission-body">
                      <p>{item.answer || "No written answer."}</p>
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noreferrer">
                          {item.link}
                        </a>
                      )}
                    </div>

                    <GradeForm
                      assignmentId={assignment._id}
                      submission={item}
                      onSaved={reload}
                    />

                  </div>
                ))}

              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}

export default AssignmentDetails;
