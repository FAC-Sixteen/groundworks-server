const mongoose = require("mongoose"); // Calling Mongoose.
const Schema = mongoose.Schema; //accessing Schema from Mongoose Object.

// This is specifying the student table and content.
//Some methods below are only specific to type String etc.
const Student = new Schema({
  firstName: { type: String, required: true, lowercase: true, maxlength: 50 },
  lastName: { type: String, required: true, lowercase: true, maxlength: 50 },
  email: { type: String, required: true, maxlength: 50 },
  password: { type: String, required: true, maxlength: 50 },
  phoneNumber: { type: String, required: true, maxlength: 20 },
  university: { type: String, maxlength: 50, lowercase: true },
  yearOfStudy: { type: Number },
  courseStudied: { type: String, lowercase: true, maxlength: 50 },
  industries: { type: [String], required: true, lowercase: true },
  skills: { type: [String], lowercase: true, required: true },
  aboutYou: { type: String, required: true, maxlength: 1000 },
  LinkedinURL: { type: String, required: true, maxlength: 100 },
  timestamps: true
});

module.exports = mongoose.model("Student", Student); // making schema of student using student.
