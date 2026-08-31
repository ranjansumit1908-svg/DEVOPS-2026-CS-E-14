const fs = require("fs");
require("dotenv").config();

const connectDB = require("./config/db");

async function runTest() {
    let report = "===== Assignment Portal Test Report =====\n\n";

    try {
        await connectDB();

        report += "Database Connection : PASSED\n";
        report += "Status              : SUCCESS\n";
        report += "Date                : " + new Date() + "\n";

        console.log("✅ Database Connected Successfully!");

        fs.writeFileSync("feedback-report.txt", report);
        console.log("Feedback report generated.");

        process.exit(0);

    } catch (err) {

        report += "Database Connection : FAILED\n";
        report += "Status              : FAILED\n";
        report += "Error               : " + err.message + "\n";
        report += "Date                : " + new Date() + "\n";

        fs.writeFileSync("feedback-report.txt", report);

        console.log("❌ Database Connection Failed!");
        console.log(err.message);

        process.exit(1);
    }
}

runTest();