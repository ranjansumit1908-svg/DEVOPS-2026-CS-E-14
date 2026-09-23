import fs from "node:fs";

let passed = 0;
let failed = 0;

const results = [];

function test(name, condition) {
  if (condition) {
    console.log(`PASS: ${name}`);
    passed++;

    results.push({
      name,
      status: "PASS",
    });
  } else {
    console.log(`FAIL: ${name}`);
    failed++;

    results.push({
      name,
      status: "FAIL",
    });
  }
}

console.log("\n========================================");
console.log("       ASSIGNMENT PORTAL TESTS");
console.log("========================================\n");


/* =====================================================
   FILE EXISTENCE TESTS
   ===================================================== */

test(
  "Dashboard.jsx exists",
  fs.existsSync("src/pages/Dashboard.jsx")
);

test(
  "Assignments.jsx exists",
  fs.existsSync("src/pages/Assignments.jsx")
);

test(
  "AssignmentDetails.jsx exists",
  fs.existsSync("src/pages/AssignmentDetails.jsx")
);

test(
  "App.jsx exists",
  fs.existsSync("src/App.jsx")
);

test(
  "App.css exists",
  fs.existsSync("src/App.css")
);


/* =====================================================
   DASHBOARD TESTS
   ===================================================== */

let dashboardCode = "";

if (fs.existsSync("src/pages/Dashboard.jsx")) {

  dashboardCode = fs.readFileSync(
    "src/pages/Dashboard.jsx",
    "utf8"
  );

  test(
    "Dashboard component exists",
    dashboardCode.includes("function Dashboard")
  );

  test(
    "Dashboard component is exported",
    dashboardCode.includes("export default Dashboard")
  );

  test(
    "Welcome section exists",
    dashboardCode.includes("WELCOME BACK")
  );

  test(
    "Student Dashboard heading exists",
    dashboardCode.includes("Student Dashboard")
  );

  test(
    "Welcome description exists",
    dashboardCode.includes(
      "Manage your assignments, track deadlines"
    )
  );

  test(
    "Upload Assignment button exists",
    dashboardCode.includes("Upload Assignment")
  );

  test(
    "Total Assignments section exists",
    dashboardCode.includes("Total Assignments")
  );

  test(
    "Pending section exists",
    dashboardCode.includes("Pending")
  );

  test(
    "Submitted section exists",
    dashboardCode.includes("Submitted")
  );

  test(
    "Upcoming section exists",
    dashboardCode.includes("Upcoming")
  );

  test(
    "Recent Assignments section exists",
    dashboardCode.includes("Recent Assignments")
  );

  test(
    "View All link exists",
    dashboardCode.includes("View All")
  );

  test(
    "Assignment list exists",
    dashboardCode.includes("assignments.map") ||
    dashboardCode.includes("studentAssignments.map") ||
    dashboardCode.includes("teacherAssignments.map")
  );

  test(
    "Due Date information exists",
    dashboardCode.includes("DUE DATE")
  );

  test(
    "Assignment status exists",
    dashboardCode.includes("assignment.status")
  );

  test(
    "View button exists",
    dashboardCode.includes("View")
  );
}


/* =====================================================
   APP ROUTING TESTS
   ===================================================== */

let appCode = "";

if (fs.existsSync("src/App.jsx")) {

  appCode = fs.readFileSync(
    "src/App.jsx",
    "utf8"
  );

  test(
    "Dashboard is imported in App.jsx",
    appCode.includes(
      'import Dashboard from "./pages/Dashboard.jsx"'
    )
  );

  test(
    "Dashboard route exists",
    appCode.includes('path="/dashboard"')
  );

  test(
    "Dashboard component is used in route",
    appCode.includes("<Dashboard />")
  );

  test(
    "Login route exists",
    appCode.includes('path="/login"')
  );

  test(
    "Register route exists",
    appCode.includes('path="/register"')
  );

  test(
    "Splash Screen route exists",
    appCode.includes('path="/"')
  );
}


/* =====================================================
   ASSIGNMENTS PAGE TESTS
   ===================================================== */

let assignmentsCode = "";

if (fs.existsSync("src/pages/Assignments.jsx")) {

  assignmentsCode = fs.readFileSync(
    "src/pages/Assignments.jsx",
    "utf8"
  );

  test(
    "Assignments component exists",
    assignmentsCode.includes("function Assignments")
  );

  test(
    "Assignments component is exported",
    assignmentsCode.includes(
      "export default Assignments"
    )
  );

  test(
    "Assignments uses React Router navigation",
    assignmentsCode.includes("useNavigate")
  );

  test(
    "Assignment data exists",
    assignmentsCode.includes("const assignments")
  );

  test(
    "Assignment title field exists",
    assignmentsCode.includes("title:")
  );

  test(
    "Assignment subject field exists",
    assignmentsCode.includes("subject:")
  );

  test(
    "Assignment teacher field exists",
    assignmentsCode.includes("teacher:")
  );

  test(
    "Assignment description field exists",
    assignmentsCode.includes("description:")
  );

  test(
    "Assignment due date field exists",
    assignmentsCode.includes("dueDate:")
  );

  test(
    "Assignment PDF field exists",
    assignmentsCode.includes("pdf:")
  );

  test(
    "Assignments heading exists",
    assignmentsCode.includes("Assignments")
  );

  test(
    "Academic workspace label exists",
    assignmentsCode.includes("ACADEMIC WORKSPACE")
  );

  test(
    "Assignment list exists",
    assignmentsCode.includes("assignments.map")
  );

  test(
    "Assignment status exists",
    assignmentsCode.includes("Not Submitted")
  );

  test(
    "Assigned by information exists",
    assignmentsCode.includes("ASSIGNED BY")
  );

  test(
    "Due date information exists",
    assignmentsCode.includes("DUE DATE")
  );

  test(
    "View Assignment button exists",
    assignmentsCode.includes("View Assignment")
  );

  test(
    "View PDF button exists",
    assignmentsCode.includes("View PDF")
  );

  test(
    "Assignment details navigation exists",
    assignmentsCode.includes("/assignments/")
  );

  test(
    "Dashboard navigation exists",
    assignmentsCode.includes(
      'navigate("/dashboard")'
    )
  );
}


/* =====================================================
   ASSIGNMENT DETAILS TESTS
   ===================================================== */

let assignmentDetailsCode = "";

if (fs.existsSync("src/pages/AssignmentDetails.jsx")) {

  assignmentDetailsCode = fs.readFileSync(
    "src/pages/AssignmentDetails.jsx",
    "utf8"
  );

  test(
    "AssignmentDetails component exists",
    assignmentDetailsCode.includes(
      "function AssignmentDetails"
    )
  );

  test(
    "AssignmentDetails component is exported",
    assignmentDetailsCode.includes(
      "export default AssignmentDetails"
    )
  );

  test(
    "AssignmentDetails uses assignment ID",
    assignmentDetailsCode.includes("useParams")
  );

 test(
  "AssignmentDetails uses navigation",
  assignmentDetailsCode.includes("useNavigate") ||
  assignmentDetailsCode.includes("<Link")
);

  test(
    "AssignmentDetails contains assignment information",
    assignmentDetailsCode.includes("assignment")
  );
}


/* =====================================================
   ASSIGNMENT ROUTING TESTS
   ===================================================== */

test(
  "Assignments is imported in App.jsx",
  appCode.includes(
    'import Assignments from "./pages/Assignments.jsx"'
  )
);

test(
  "Assignments route exists",
  appCode.includes('path="/assignments"')
);

test(
  "Assignments component is used in route",
  appCode.includes("<Assignments />")
);

test(
  "AssignmentDetails is imported in App.jsx",
  appCode.includes(
    'import AssignmentDetails from "./pages/AssignmentDetails.jsx"'
  )
);

test(
  "Assignment details route exists",
  appCode.includes('path="/assignments/:id"')
);

test(
  "AssignmentDetails component is used in route",
  appCode.includes("<AssignmentDetails />")
);


/* =====================================================
   DASHBOARD CSS TESTS
   ===================================================== */

let cssCode = "";

if (fs.existsSync("src/App.css")) {

  cssCode = fs.readFileSync(
    "src/App.css",
    "utf8"
  );

  test(
    "Dashboard CSS exists",
    cssCode.includes(".dashboard")
  );

  test(
    "Dashboard navbar CSS exists",
    cssCode.includes(".dashboard-navbar")
  );

  test(
    "Dashboard navigation CSS exists",
    cssCode.includes(".dashboard-nav-links")
  );

  test(
    "Welcome section CSS exists",
    cssCode.includes(".welcome-section")
  );

  test(
    "Upload button CSS exists",
    cssCode.includes(".upload-btn")
  );

  test(
    "Statistics grid CSS exists",
    cssCode.includes(".stats-grid")
  );

  test(
    "Statistics card CSS exists",
    cssCode.includes(".stat-card")
  );

  test(
    "Recent assignments CSS exists",
    cssCode.includes(".recent-section")
  );

  test(
    "Assignment card CSS exists",
    cssCode.includes(".assignment-card")
  );

  test(
    "Assignment status CSS exists",
    cssCode.includes(".assignment-status")
  );

  test(
    "View button CSS exists",
    cssCode.includes(".view-btn")
  );

  test(
    "Responsive CSS exists",
    cssCode.includes("@media")
  );

  test(
    "Dashboard background color exists",
    cssCode.includes("#f4f1e8")
  );

  test(
    "Dashboard navy color exists",
    cssCode.includes("#111d29")
  );

  test(
    "Dashboard accent color exists",
    cssCode.includes("#f0643b")
  );
}


/* =====================================================
   ASSIGNMENTS CSS TESTS
   ===================================================== */

test(
  "Assignments page CSS exists",
  cssCode.includes(".assignments-page")
);

test(
  "Assignments header CSS exists",
  cssCode.includes(".assignments-header")
);

test(
  "Assignments heading CSS exists",
  cssCode.includes(".assignments-heading")
);

test(
  "Assignments list CSS exists",
  cssCode.includes(".assignments-list")
);

test(
  "Assignment content CSS exists",
  cssCode.includes(".assignment-content")
);

test(
  "Assignment actions CSS exists",
  cssCode.includes(".assignment-actions")
);

test(
  "PDF button CSS exists",
  cssCode.includes(".pdf-btn")
);

test(
  "Back button CSS exists",
  cssCode.includes(".back-btn")
);


/* =====================================================
   LATEST UPDATE TESTS
   ===================================================== */

let registerCode = "";
let loginCode = "";


/* ---------- TEST 1 ---------- */

if (fs.existsSync("src/pages/Register.jsx")) {

  registerCode = fs.readFileSync(
    "src/pages/Register.jsx",
    "utf8"
  );

}

test(
  "Register page contains role selector",
  registerCode.includes("role-selector")
);


/* ---------- TEST 2 ---------- */

test(
  "Register supports Student and Teacher roles",
  registerCode.includes('value="student"') &&
  registerCode.includes('value="teacher"')
);


/* ---------- TEST 3 ---------- */

test(
  "Registration validates password confirmation",
  registerCode.includes("Passwords do not match")
);


/* ---------- TEST 4 ---------- */

test(
  "Registration stores users in localStorage",
  registerCode.includes("localStorage") &&
  registerCode.includes("users")
);


/* ---------- TEST 5 ---------- */

if (fs.existsSync("src/pages/Login.jsx")) {

  loginCode = fs.readFileSync(
    "src/pages/Login.jsx",
    "utf8"
  );

}

test(
  "Login page contains role selector",
  loginCode.includes("role-selector")
);


/* ---------- TEST 6 ---------- */

test(
  "Login supports Student and Teacher roles",
  loginCode.includes('value="student"') &&
  loginCode.includes('value="teacher"')
);


/* ---------- TEST 7 ---------- */

test(
  "Login validates selected user role",
  loginCode.includes("formData.role")
);


/* ---------- TEST 8 ---------- */

test(
  "Login stores current user session",
  loginCode.includes("localStorage") &&
  loginCode.includes("currentUser")
);


/* ---------- TEST 9 ---------- */

test(
  "Dashboard supports Student and Teacher roles",
  dashboardCode.includes('role === "student"') &&
  dashboardCode.includes('role === "teacher"')
);


/* =====================================================
   GENERATE TEST REPORT
   ===================================================== */

const total = passed + failed;

const status = failed === 0
  ? "SUCCESS"
  : "FAILED";


let report = "";

report += "========================================\n";
report += "       ASSIGNMENT PORTAL TEST REPORT\n";
report += "========================================\n\n";

report += `Total Tests : ${total}\n`;
report += `Passed      : ${passed}\n`;
report += `Failed      : ${failed}\n`;
report += `Status      : ${status}\n\n`;

report += "--------------- TEST RESULTS ---------------\n\n";

results.forEach((result, index) => {
  report += `${index + 1}. ${result.status} - ${result.name}\n`;
});

report += "\n========================================\n";

fs.writeFileSync(
  "feedback.txt",
  report
);


/* =====================================================
   CONSOLE SUMMARY
   ===================================================== */

console.log("\n========================================");
console.log("              TEST SUMMARY");
console.log("========================================");

console.log(`Total Tests : ${total}`);
console.log(`Passed      : ${passed}`);
console.log(`Failed      : ${failed}`);
console.log(`Status      : ${status}`);

console.log("\nFeedback report generated:");
console.log("feedback.txt");


/* =====================================================
   JENKINS BUILD RESULT
   ===================================================== */

if (failed > 0) {
  process.exit(1);
}

process.exit(0);