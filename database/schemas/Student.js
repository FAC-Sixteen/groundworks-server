const mongoose = require("mongoose"); // Calling Mongoose.
const Schema = mongoose.Schema; //accessing Schema from Mongoose Object.

// This is specifying the student table and content.
//Some methods below are only specific to type String etc.
const Student = new Schema({
  firstName: { type: String, required: true, lowercase: true, maxlength: 50 },
  lastName: { type: String, required: true, lowercase: true, maxlength: 50 },
  email: { type: String, required: true, maxlength: 50, unique: true },
  password: { type: String, required: true, maxlength: 50 },
  phoneNumber: { type: String, required: true, maxlength: 20 },
  university: { type: String, maxlength: 50, lowercase: true },
  yearOfStudy: { type: Number },
  courseStudied: { type: String, lowercase: true, maxlength: 50 },
  skills: { type: [String], lowercase: true, required: true },
  aboutYou: { type: String, required: true, maxlength: 1000 },
  LinkedinURL: { type: String, required: true, maxlength: 100 },
});
//set other Schema options here
Student.set('timestamps', true)   //gives created_at and updated_at
Student.set('validateBeforeSave', false) //pause requirements during early development

module.exports = mongoose.model("Student", Student); // create schema
