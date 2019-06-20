const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema(
  {
    //general User details
    userName: { type: String, required: true, maxlength: 100 },
    email: { type: String, required: true, maxlength: 100, unique: true },
    password: { type: String, required: true, maxlength: 50 },
    phoneNumber: { type: String, maxlength: 25 },
    userType: { type: String, required: true, maxlength: 25 },

    //Student-specific details:
    university: { type: String, maxlength: 50 },
    yearOfStudy: { type: Number },
    courseStudied: { type: String, maxlength: 50 },
    skills: { type: String },
    aboutYou: { type: String, maxlength: 1000 },
    LinkedinURL: { type: String, maxlength: 100 },
    rejectedJobOffers: { type: String, maxlength: 100 },
    totalEarnings: { type: Number },

    //Client-specific details:
    jobTitle: { type: String, maxlength: 50 },
    companyName: { type: String, maxlength: 50 },
    companyUrl: { type: String, maxlength: 100 },
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

module.exports = mongoose.model("User", User);
