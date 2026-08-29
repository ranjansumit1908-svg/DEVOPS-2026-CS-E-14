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

    results.push(`PASS: ${test.name}`);
  } else {
    console.log(`FAIL: ${test.name}`);
    failed++;

    results.push(`FAIL: ${test.name}`);
  }
});

const total = tests.length;
const overallStatus = failed === 0 ? "PASSED" : "FAILED";

const feedback = `
======================================
   ASSIGNMENT PORTAL TEST REPORT
======================================

${results.join("\n")}

======================================
Total Tests : ${total}
Passed      : ${passed}
Failed      : ${failed}
Status      : ${overallStatus}
======================================
`;

fs.writeFileSync("feedback.txt", feedback);

console.log("\n======================================");
console.log(`Total Tests : ${total}`);
console.log(`Passed      : ${passed}`);
console.log(`Failed      : ${failed}`);
console.log(`Status      : ${overallStatus}`);
console.log("======================================");

console.log("\nFeedback file generated: feedback.txt");

process.exit(failed === 0 ? 0 : 1);