const mongoose = require("mongoose"); // calling mongoose
const Schema = mongoose.Schema; //accessing Schema from Mongoose Object.

const Brief = new Schema({
  companyName: { type: String, required: true, maxlength: 50 },
  contactPerson: { type: String, required: true, lowercase:true, maxlength: 100 },
  projectName: { type: String, required: true, lowercase:true, maxlength: 100 },
  projectBrief: { type: String, required: true, maxlength: 5000 },
  projectDeadline: { type: Date, required: true },
  estimatedWorkload: { type: Number, required: true },
  projectPrice: { type: Number, required: true },
  studentSkills: { type: [String], lowercase: true, required: true },
  additionalInfo: { type: String, required: true, maxlength: 1500 },
}, {
  timestamps: true,
  validateBeforeSave: false
});

Brief.set('timestamps', true)
Brief.set('validateBeforeSave', false)

module.exports = mongoose.model("Brief", Brief);
