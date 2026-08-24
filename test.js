import fs from "fs";

const tests = [
  {
    name: "Splash Screen",
    file: "src/pages/SplashScreen.jsx",
  },
  {
    name: "Login Page",
    file: "src/pages/Login.jsx",
  },
  {
    name: "Register Page",
    file: "src/pages/Register.jsx",
  },
];

let passed = 0;
let failed = 0;

const results = [];

console.log("\n======================================");
console.log("   ASSIGNMENT PORTAL TEST REPORT");
console.log("======================================\n");

tests.forEach((test) => {
  if (fs.existsSync(test.file)) {
    console.log(`PASS: ${test.name}`);
    passed++;

    results.push({
      name: test.name,
      status: "PASS",
    });
  } else {
    console.log(`FAIL: ${test.name}`);
    failed++;

    results.push({
      name: test.name,
      status: "FAIL",
    });
  }
});

const total = tests.length;

const overallStatus = failed === 0 ? "PASSED" : "FAILED";

const resultRows = results
  .map(
    (result) => `
      <tr>
        <td>${result.name}</td>
        <td class="${result.status.toLowerCase()}">
          ${result.status === "PASS" ? "✓ PASS" : "✗ FAIL"}
        </td>
      </tr>
    `
  )
  .join("");

const feedback = `
<!DOCTYPE html>
<html>
<head>
  <title>Assignment Portal Test Feedback</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f1e8;
      color: #111d29;
      padding: 50px;
    }

    .container {
      max-width: 800px;
      margin: auto;
      background: white;
      padding: 40px;
      border: 1px solid #ddd;
    }

    h1 {
      margin-bottom: 10px;
    }

    .status {
      display: inline-block;
      padding: 10px 18px;
      margin: 15px 0 25px;
      font-weight: bold;
      background: ${
        overallStatus === "PASSED" ? "#dff3e4" : "#f8dddd"
      };
      color: ${
        overallStatus === "PASSED" ? "#176b35" : "#a12626"
      };
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th,
    td {
      padding: 14px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    th {
      background: #111d29;
      color: white;
    }

    .pass {
      color: #176b35;
      font-weight: bold;
    }

    .fail {
      color: #a12626;
      font-weight: bold;
    }

    .summary {
      margin-top: 25px;
      font-size: 16px;
    }
  </style>
</head>

<body>

  <div class="container">

    <h1>Assignment Portal</h1>

    <p>Jenkins Automated Test Feedback</p>

    <div class="status">
      Overall Status: ${overallStatus}
    </div>

    <table>

      <tr>
        <th>Component</th>
        <th>Result</th>
      </tr>

      ${resultRows}

    </table>

    <div class="summary">

      <p>
        <strong>Total Tests:</strong> ${total}
      </p>

      <p>
        <strong>Passed:</strong> ${passed}
      </p>

      <p>
        <strong>Failed:</strong> ${failed}
      </p>

    </div>

    <hr>

    <p>
      Generated automatically by Jenkins.
    </p>

  </div>

</body>
</html>
`;

fs.writeFileSync("feedback.html", feedback);

console.log("\n======================================");
console.log(`Total Tests : ${total}`);
console.log(`Passed      : ${passed}`);
console.log(`Failed      : ${failed}`);
console.log(`Status      : ${overallStatus}`);
console.log("======================================");

process.exit(failed === 0 ? 0 : 1);n