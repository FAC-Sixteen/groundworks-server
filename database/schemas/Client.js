const mongoose = require("mongoose"); // calling mongoose

const Schema = mongoose.Schema; //accessing Schema from Mongoose Object.

const Client = new Schema(
  {
    firstName: { type: String, required: true, lowercase: true, maxlength: 50 },
    lastName: { type: String, required: true, lowercase: true, maxlength: 50 },
    email: { type: String, required: true, maxlength: 50 },
    password: { type: String, required: true, maxlength: 50 },
    phoneNumber: { type: String, required: true, maxlength: 20 },

    jobTitle: { type: String, required: true, maxlength: 50 },
    companyName: { type: String, required: true, maxlength: 50 },
    companyUrl: { type: String, required: true, maxlength: 100 }
  },
  {
    timestamps: true,
    validateBeforeSave: false
  }
);

module.exports = mongoose.model("Client", Client);
