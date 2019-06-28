const mongoose = require("mongoose"); // calling mongoose

const Schema = mongoose.Schema; //accessing Schema from Mongoose Object.

const GWBrief = new Schema({
  companyName: { type: String, required: true, maxlength: 50 },
  contactPerson: { type: String, required: true, maxlength: 100 },
  projectName: { type: String, required: true, maxlength: 100 },
  projectBrief: { type: String, required: true, maxlength: 5000 },
  projectDeadline: { type: String, required: true },
  estimatedWorkload: { type: Number, required: true },
  projectPrice: { type: Number, required: true },
  additionalInfo: { type: String, required: true, maxlength: 1500 },
  studentSkills: { type: [String], lowercase: true, required: true },

  jobClient: { type: String },
  jobType: { type: String, default: "new" },  //new, jobAccepted, current, completed
  jobStudent: { type: String, default: "Searching for the right candidate" } //Student id added on Client approval of student

}, {
  timestamps: true,
  validateBeforeSave: true
  }
);

module.exports = mongoose.model("GWBrief", GWBrief);
