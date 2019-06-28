const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GWClient = new Schema(
  {
    //general user details
    userName: { type: String, required: true, maxlength: 100 },
    email: { type: String, required: true, maxlength: 100, unique: true },
    password: { type: String, required: true, maxlength: 100 },
    phoneNumber: { type: String, maxlength: 25 },
    userType: { type: String, required: true, maxlength: 25 },

    //Client-specific details:
    jobTitle: { type: String, maxlength: 50 },
    companyName: { type: String, maxlength: 50 },
    companyUrl: { type: String, maxlength: 100 },
    photoURL: { type: String, maxlength: 250 },
    newStudentMatches: { type: [String] },
    totalHours: { type: Number },

    //jobs array for both Students and Clients:
    currentJobs: { type: [String] },
    completedJobs: { type: [String] }
  },
  {
    timestamps: true,
    validateBeforeSave: true
  }
);

module.exports = mongoose.model("GWClient", GWClient);
