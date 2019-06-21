const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require("../database/schemas/User");
const registerValidation = require('../authentication/validation');


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

exports.postRegisterStudent = async (req, res) => {
  console.log("req", req.body);
  try{
    const validation = await registerValidation(req.body)
    res.send(validation.error);

  } catch (err) {
    res.status(400).send(err);
    return

    // res.status(400).send(validation.error.details[0].message).send(err);
  }


  const emailExists = await User.findOne({ email: req.body.email});

  if(emailExists) return res.status(400).send('Email already exists');

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({ userName: req.body.userName, email:req.body.email, password: hashedPassword });

  try {
    const savedUser = await user.save();
    res.send({ user:user._id})
  } catch(err) {
    res.status(400).send(err);
    return
  }


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
    return
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
