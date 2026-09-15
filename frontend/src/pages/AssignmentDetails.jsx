import { Link, useParams } from "react-router-dom";

function AssignmentDetails() {
  const { id } = useParams();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f1e8",
        color: "#111d29",
        padding: "40px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <Link
          to="/assignments"
          style={{
            color: "#f0643b",
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: "700",
          }}
        >
          ← BACK TO ASSIGNMENTS
        </Link>

        <div
          style={{
            marginTop: "40px",
            background: "#fffdf8",
            border: "1px solid #d5cec2",
            padding: "45px",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#929895",
              fontSize: "10px",
              letterSpacing: "0.25em",
              fontWeight: "700",
            }}
          >
            ASSIGNMENT DETAILS
          </p>

          <h1
            style={{
              marginTop: "12px",
              marginBottom: "20px",
              fontSize: "42px",
            }}
          >
            Assignment
          </h1>

          <p
            style={{
              color: "#687274",
              fontSize: "15px",
              lineHeight: "1.7",
            }}
          >
            View assignment information, deadline,
            submission details, and progress here.
          </p>

          <div
            style={{
              marginTop: "30px",
              paddingTop: "20px",
              borderTop: "1px solid #ddd7cc",
            }}
          >
            <strong>Assignment ID:</strong>{" "}
            {id || "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentDetails;