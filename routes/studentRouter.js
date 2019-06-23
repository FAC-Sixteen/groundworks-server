const express = require("express");

const router = express.Router();

const studentController = require("../controllers/studentControllers"); // call studentController file.

router.get("/all", studentController.getAllStudents); //working
router.get("/get-student/:studentID", studentController.student_findById); //working
router.delete("/delete-all", studentController.deleteAllStudents); //working. CAUTION:  deletes the entire database
router.post("/sign-up", studentController.postStudentSignUp); //working.  call the postStudentSignUp function in the controller file.
router.put("/student-update/:studentID", studentController.student_update);
router.post("/login", studentController.userValidator);  //validation, session

//register with student
router.post("/join", studentController.postRegisterStudent);
router.get("/all-student-registers", studentController.getAllStudentRegisters);
module.exports = router;
