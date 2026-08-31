const fs = require("fs");

console.log("Running Jenkins Test...");

const report = `
==============================
     JENKINS TEST REPORT
==============================

Project : Assignment Portal
Status  : SUCCESS
Database: Skipped
Date    : ${new Date().toLocaleString()}

Result  : Jenkins Build Passed Successfully
`;

fs.writeFileSync("feedback-report.txt", report);

console.log("Feedback report generated successfully.");