import React from "react";
import { useNavigate } from "react-router-dom";

const assignments = [
  {
    id: 1,
    title: "Data Structures Assignment",
    subject: "Data Structures",
    teacher: "Prof. Sharma",
    description:
      "Solve the given questions based on arrays, linked lists and stacks.",
    dueDate: "30 September 2026",
    pdf: "#",
  },
  {
    id: 2,
    title: "Operating Systems Assignment",
    subject: "Operating Systems",
    teacher: "Prof. Verma",
    description:
      "Prepare answers covering process management, scheduling and deadlocks.",
    dueDate: "5 October 2026",
    pdf: "#",
  },
];

function Assignments() {
  const navigate = useNavigate();

  return (
    <div className="assignments-page">

      {/* Header */}
      <div className="assignments-header">

        <div className="assignments-heading">
          <span className="page-label">ACADEMIC WORKSPACE</span>

          <h1>Assignments</h1>

          <p>
            View your assigned work, deadlines and submission status.
          </p>
        </div>

        <button
          className="back-btn"
          onClick={() => navigate("/dashboard")}
        >
          ← Dashboard
        </button>

      </div>

      {/* Assignment List */}
      <div className="assignments-list">

        {assignments.map((assignment) => (
          <div className="assignment-card" key={assignment.id}>

            <div className="assignment-accent"></div>

            <div className="assignment-content">

              {/* Top */}
              <div className="assignment-top">

                <div className="assignment-title-section">
                  <span className="assignment-number">
                    ASSIGNMENT {String(assignment.id).padStart(2, "0")}
                  </span>

                  <h2>{assignment.title}</h2>

                  <span className="subject">
                    {assignment.subject}
                  </span>
                </div>

                <span className="status pending">
                  Not Submitted
                </span>

              </div>

              {/* Description */}
              <p className="description">
                {assignment.description}
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
                  View Assignment
                  <span>→</span>
                </button>

                <a
                  href={assignment.pdf}
                  className="pdf-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="pdf-icon">PDF</span>
                  View PDF
                </a>

              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Assignments;