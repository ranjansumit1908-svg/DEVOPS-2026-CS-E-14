const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
    {
        assignment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Assignment",
            required: true
        },
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        answer: { type: String, default: "", trim: true },
        link: { type: String, default: "", trim: true },
        marks: { type: Number, min: 0, max: 100, default: null },
        feedback: { type: String, default: "", trim: true }
    },
    { timestamps: true }
);

// One submission per student per assignment
submissionSchema.index({ assignment: 1, student: 1 }, { unique: true });

module.exports = mongoose.model("Submission", submissionSchema);
