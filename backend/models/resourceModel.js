const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // e.g., "HTML Notes", "JavaScript Practice Set"
      trim: true,
    },
    type: {
      type: String,
      enum: ["note", "link", "video", "practice"], // resource type
      required: true,
    },
    url: {
      type: String,
      required: function () {
        return this.type !== "note";
      }, // link required only for non-note types
    },
    description: {
      type: String,
      trim: true,
    },
    topic: {
      type: String,
      required: true, // e.g., "Web Development", "DSA", "Database"
      trim: true,
    },
    year: {
      type: Number,
      enum: [1, 2, 3],
      required: true, // BCA year (1st, 2nd, 3rd)
    },
    file: {
      type: String, // optional: if PDF uploaded, store file path
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resource", resourceSchema);
