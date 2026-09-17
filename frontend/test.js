const fs = require("fs");

let passed = 0;
let failed = 0;

const results = [];

function test(name, condition) {
  if (condition) {
    console.log(`PASS: ${name}`);
    passed++;

    results.push({
      name: name,
      status: "PASS",
    });
  } else {
    console.log(`FAIL: ${name}`);
    failed++;

    results.push({
      name: name,
      status: "FAIL",
    });
  }
}

console.log("\n================================");
console.log("   ASSIGNMENT PORTAL TESTS");
console.log("================================\n");


/* =====================================================
   FILE EXISTENCE TESTS
   ===================================================== */

test(
  "Dashboard.jsx exists",
  fs.existsSync("src/pages/Dashboard.jsx")
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
   DASHBOARD.JSX TESTS
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
    "Welcome section exists",
    dashboardCode.includes("WELCOME BACK")
  );

  test(
    "Student Dashboard heading exists",
    dashboardCode.includes("Student Dashboard")
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
    "Upload Assignment button exists",
    dashboardCode.includes("Upload Assignment")
  );

  test(
    "Assignment list exists",
    dashboardCode.includes("assignments.map")
  );
}


/* =====================================================
   APP.JSX ROUTE TEST
   ===================================================== */

let appCode = "";

if (fs.existsSync("src/App.jsx")) {

  appCode = fs.readFileSync(
    "src/App.jsx",
    "utf8"
  );

  test(
    "Dashboard is imported in App.jsx",
    appCode.includes('import Dashboard from "./pages/Dashboard.jsx"')
  );

  test(
    "Dashboard route exists",
    appCode.includes('path="/dashboard"')
  );

  test(
    "Dashboard component is used in route",
    appCode.includes("<Dashboard />")
  );
}


/* =====================================================
   APP.CSS TESTS
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
    "Navbar CSS exists",
    cssCode.includes(".dashboard-navbar")
  );

  test(
    "Statistics grid CSS exists",
    cssCode.includes(".stats-grid")
  );

  test(
    "Stat card CSS exists",
    cssCode.includes(".stat-card")
  );

  test(
    "Recent assignments CSS exists",
    cssCode.includes(".recent-section")
  );

  test(
    "Responsive Dashboard CSS exists",
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
   GENERATE FEEDBACK REPORT
   ===================================================== */

const total = passed + failed;

const status = failed === 0
  ? "SUCCESS"
  : "FAILED";


let report = "";

report += "========================================\n";
report += "       ASSIGNMENT PORTAL REPORT\n";
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

console.log("\n================================");
console.log("         TEST SUMMARY");
console.log("================================");

console.log(`Total Tests : ${total}`);
console.log(`Passed      : ${passed}`);
console.log(`Failed      : ${failed}`);
console.log(`Status      : ${status}`);

console.log("\nFeedback report generated:");
console.log("feedback.txt\n");


/* =====================================================
   JENKINS RESULT
   ===================================================== */

if (failed > 0) {
  process.exit(1);
}

process.exit(0);