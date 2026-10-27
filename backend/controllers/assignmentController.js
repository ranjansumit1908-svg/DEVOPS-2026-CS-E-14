const mongoose = require("mongoose");
const Assignment = require("../models/Assignment");
const Submission = require("../models/Submission");

const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

// Teachers only see their own assignments; students see all of them.
exports.listAssignments = async (req, res) => {
    try {
        const isTeacher = req.user.role === "teacher";
        const filter = isTeacher ? { teacher: req.user.id } : {};

        const assignments = await Assignment.find(filter)
            .populate("teacher", "name username")
            .sort({ dueDate: 1 })
            .lean();

        const ids = assignments.map((a) => a._id);

        if (isTeacher) {
            const submissions = await Submission.find({ assignment: { $in: ids } })
                .select("assignment marks")
                .lean();

            assignments.forEach((a) => {
                const mine = submissions.filter(
                    (s) => String(s.assignment) === String(a._id)
                );
                a.submissionCount = mine.length;
                a.pendingReviews = mine.filter((s) => s.marks === null).length;
            });
        } else {
            const submissions = await Submission.find({
                assignment: { $in: ids },
                student: req.user.id
            }).lean();

            assignments.forEach((a) => {
                a.submission =
                    submissions.find((s) => String(s.assignment) === String(a._id)) || null;
            });
        }

        res.json(assignments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createAssignment = async (req, res) => {
    try {
        const { title, subject, description, dueDate, pdf } = req.body;

        if (!title || !subject || !dueDate) {
            return res.status(400).json({ message: "Title, subject and due date are required" });
        }

        if (Number.isNaN(new Date(dueDate).getTime())) {
            return res.status(400).json({ message: "Due date is not a valid date" });
        }

        const assignment = await Assignment.create({
            title,
            subject,
            description,
            dueDate,
            pdf,
            teacher: req.user.id
        });

        res.status(201).json(assignment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getAssignment = async (req, res) => {
    try {
        if (!isValidId(req.params.id)) {
            return res.status(404).json({ message: "Assignment not found" });
        }

        const assignment = await Assignment.findById(req.params.id)
            .populate("teacher", "name username")
            .lean();

        if (!assignment) {
            return res.status(404).json({ message: "Assignment not found" });
        }

        if (req.user.role === "teacher") {
            if (String(assignment.teacher._id) !== req.user.id) {
                return res.status(403).json({ message: "This is not your assignment" });
            }

            assignment.submissions = await Submission.find({ assignment: assignment._id })
                .populate("student", "name username")
                .sort({ createdAt: -1 })
                .lean();
        } else {
            assignment.submission = await Submission.findOne({
                assignment: assignment._id,
                student: req.user.id
            }).lean();
        }

        res.json(assignment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteAssignment = async (req, res) => {
    try {
        if (!isValidId(req.params.id)) {
            return res.status(404).json({ message: "Assignment not found" });
        }

        const assignment = await Assignment.findOne({
            _id: req.params.id,
            teacher: req.user.id
        });

        if (!assignment) {
            return res.status(404).json({ message: "Assignment not found" });
        }

        await Submission.deleteMany({ assignment: assignment._id });
        await assignment.deleteOne();

        res.json({ message: "Assignment deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Student submits (or re-submits until it has been graded)
exports.submitAssignment = async (req, res) => {
    try {
        const { answer, link } = req.body;

        if (!isValidId(req.params.id)) {
            return res.status(404).json({ message: "Assignment not found" });
        }

        if (!(answer && answer.trim()) && !(link && link.trim())) {
            return res.status(400).json({ message: "Provide an answer or a link to your work" });
        }

        const assignment = await Assignment.findById(req.params.id);

        if (!assignment) {
            return res.status(404).json({ message: "Assignment not found" });
        }

        const existing = await Submission.findOne({
            assignment: assignment._id,
            student: req.user.id
        });

        if (existing && existing.marks !== null) {
            return res.status(400).json({ message: "This submission has already been graded" });
        }

        const submission = await Submission.findOneAndUpdate(
            { assignment: assignment._id, student: req.user.id },
            { answer: answer || "", link: link || "" },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );

        res.status(existing ? 200 : 201).json(submission);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.gradeSubmission = async (req, res) => {
    try {
        const { id, submissionId } = req.params;
        const { marks, feedback } = req.body;

        if (!isValidId(id) || !isValidId(submissionId)) {
            return res.status(404).json({ message: "Submission not found" });
        }

        const value = Number(marks);

        if (marks === "" || marks === null || marks === undefined ||
            Number.isNaN(value) || value < 0 || value > 100) {
            return res.status(400).json({ message: "Marks must be a number between 0 and 100" });
        }

        const assignment = await Assignment.findOne({ _id: id, teacher: req.user.id });

        if (!assignment) {
            return res.status(404).json({ message: "Assignment not found" });
        }

        const submission = await Submission.findOneAndUpdate(
            { _id: submissionId, assignment: assignment._id },
            { marks: value, feedback: feedback || "" },
            { new: true }
        );

        if (!submission) {
            return res.status(404).json({ message: "Submission not found" });
        }

        res.json(submission);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
