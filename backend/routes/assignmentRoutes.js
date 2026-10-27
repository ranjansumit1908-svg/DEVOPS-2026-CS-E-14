const express = require("express");
const controller = require("../controllers/assignmentController");
const { protect, allowRoles } = require("../middleware/authMiddleware");

const router = express.Router();

router.use(protect);

router.get("/", controller.listAssignments);
router.post("/", allowRoles("teacher"), controller.createAssignment);
router.get("/:id", controller.getAssignment);
router.delete("/:id", allowRoles("teacher"), controller.deleteAssignment);

router.post("/:id/submit", allowRoles("student"), controller.submitAssignment);
router.put(
    "/:id/submissions/:submissionId/grade",
    allowRoles("teacher"),
    controller.gradeSubmission
);

module.exports = router;
