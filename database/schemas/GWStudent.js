const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GWStudent = new Schema(
  {
    //general User details
    userName: { type: String, required: true, maxlength: 100 },
    email: { type: String, required: true, maxlength: 100, unique: true },
    password: { type: String, required: true, maxlength: 100 },
    phoneNumber: { type: String, maxlength: 25 },
    userType: { type: String, required: true, maxlength: 25 },

    //Student-specific details:
    university: { type: String, maxlength: 50 },
    yearOfStudy: { type: Number },
    courseStudied: { type: String, maxlength: 50 },
    skills: { type: [String] },
    aboutYou: { type: String, maxlength: 1000 },
    LinkedinURL: { type: String, maxlength: 100 },
    photoURL: { type: String, maxlength: 250 },
    rejectedJobOffers: { type: [String] },
    totalEarnings: { type: Number, default: 0 },

    //jobs array for both Students and Clients:
    currentJobs: { type: [String] },
    completedJobs: { type: [String] }
  },
  {
    timestamps: true,
    validateBeforeSave: true
  }
);

module.exports = mongoose.model("GWStudent", GWStudent);
