const express = require("express");

const router = express.Router();

const studentController = require("../controllers/studentControllers"); // call studentController file.

router.post("/sign-up", studentController.postStudentSignUp); //call the postStudentSignUp function in the controller file.

module.exports = router;
