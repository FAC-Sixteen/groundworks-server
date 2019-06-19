const User = require("../database/schemas/User");

//get all student documents from database
exports.getAllStudents = async (req, res) => {
  try {
    const students = await User.find();
    res.json(students);
  } catch (err) {
    res.json({ message: err });
  }
};

//delete all student documents from database
//IMPORTANT: this will delete the entire database.  Remove before deployment.
exports.deleteAllStudents = async (req, res) => {
  try {
    const students = await User.deleteMany({ __v: 0 }, function(err) {});
    res.json(students);
  } catch (err) {
    res.json({ message: err });
  }
};

//add new student document to database
exports.postStudentSignUp = async (req, res) => {
  try {
    // studentData is assigning object contain info to various variables i.e. firstName etc.
    const studentData = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      userType: req.body.userType,
      university: req.body.university,
      yearOfStudy: req.body.yearOfStudy,
      courseStudied: req.body.courseStudied,
      skills: req.body.skills,
      aboutYou: req.body.aboutYou,
      LinkedinURL: req.body.LinkedinURL
    });
    const newStudent = await studentData.save(); // wait for studentData before saving and storing in newStudent
    res.json(newStudent);
  } catch (error) {
    res.json({ message: error });
  }
};

exports.student_findById = async (req, res) => {
  try {
    console.log(req.params);
    const profile = await User.findById(req.params.studentID);
    res.json(profile);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.student_update = async (req, res) => {
  try {
    const update = await User.findByIdAndUpdate(
      req.params.studentID,
      req.body.userName
    ); //update
    res.json(update);
  } catch (err) {
    res.json({ message: err });
  }
};

//Ryan....
exports.postRegisterStudent = async (req, res) => {
  console.log("req", req.body);
  try {
    const newStudentData = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      userType: req.body.userType
    });
    const newRegisterStudent = await newStudentData.save();
    res.json(newRegisterStudent);
  } catch (error) {
    res.json({ message: error });
  }
};

exports.getAllStudentRegisters = async (req, res) => {
  try {
    const studentsRegisters = await User.find();
    res.json(studentsRegisters);
  } catch (err) {
    res.json({ message: err });
  }
};
