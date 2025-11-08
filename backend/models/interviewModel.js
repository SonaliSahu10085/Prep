const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Topic of the mock interview (e.g. "JavaScript", "React", "HR Interview")
    topic: {
      type: String,
      required: true,
      trim: true,
    },

    // Language in which the interview will be conducted (e.g. "English", "Hindi")
    language: {
      type: String,
      required: true,
      enum: ["English", "Hindi", "Other"],
    },

    // Duration option selected by student (5, 10, 15 minutes)
    duration: {
      type: Number,
      required: true,
      enum: [5, 10, 15],
    },

    // To track if AI-generated or manual
    interviewType: {
      type: String,
      enum: ["AI", "Manual"],
      default: "AI",
    },

    // AI or DB generated questions
    questions: [
      {
        questionText: { type: String, required: true },
        questionAudioUrl: { type: String }, // optional voice format
      },
    ],

    // Student answers (linked to questions)
    answers: [
      {
        questionId: { type: mongoose.Schema.Types.ObjectId },
        answerText: { type: String },
        answerAudioUrl: { type: String },
        submittedAt: { type: Date, default: Date.now },
      },
    ],

    // Transcript data (after processing)
    transcript: {
      type: String, // full conversation transcript in text form
    },

    // Feedback data (AI-generated or evaluator-generated)
    feedback: {
      accuracy: { type: Number, min: 0, max: 100 },
      fluency: { type: Number, min: 0, max: 100 },
      suggestions: { type: String },
      overallFeedback: { type: String },
    },

    // Final scorecard
    scorecard: {
      totalScore: { type: Number, min: 0, max: 100 },
      remarks: { type: String },
      gradedBy: { type: String, default: "AI" },
    },

    // Interview session details
    status: {
      type: String,
      enum: ["ongoing", "completed", "cancelled"],
      default: "ongoing",
    },

    startedAt: {
      type: Date,
      default: Date.now,
    },

    endedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Interview", interviewSchema);
