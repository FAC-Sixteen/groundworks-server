const mongoose = require("mongoose"); // calling mongoose

const Schema = mongoose.Schema; //accessing Schema from Mongoose Object.

const Register = new Schema(
  {
    name: { type: String, required: true, lowercase: true, maxlength: 50 },
    email: { type: String, required: true, maxlength: 50, unique: true },
    password: { type: String, required: true, maxlength: 50 },
    usertype: { type: String, maxlength: 50 }
  },
  {
    timestamps: true,
    validateBeforeSave: false
  }
);

module.exports = mongoose.model("Register", Register);
