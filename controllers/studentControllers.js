const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const GWJob = require('../database/schemas/GWJob');
const User = require("../database/schemas/User");
const GWStudent = require('../database/schemas/GWStudent');
const registerValidation = require('../authentication/validation');
const encryption = require('../authentication/encryption');
const authentication = require('../authentication/validation');


//get all student documents from database
exports.getAllStudents = async (req, res) => {
  try {
    const students = await GWStudent.find();
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
    const emailExists = await GWStudent.findOne({ email: req.body.email});
    if(emailExists) return res.status(400).send({msg: 'Email already exists'});

    const hashedPass = await encryption.hashPassword(req.body.password)
    console.log("Hashed pass: ", hashedPass);
    // studentData is assigning object contain info to various variables i.e. firstName etc.
    const studentData = new GWStudent({
      userName: req.body.userName,
      email: req.body.email,
      password: hashedPass,
      phoneNumber: req.body.phoneNumber,
      userType: req.body.userType,
      university: req.body.university,
      yearOfStudy: req.body.yearOfStudy,
      courseStudied: req.body.courseStudied,
      skills: req.body.skills,
      aboutYou: req.body.aboutYou,
      LinkedinURL: req.body.LinkedinURL,
      photoURL: req.body.photoURL
    });
    const newStudent = await studentData.save(); // wait for studentData before saving and storing in newStudent
    res.json(newStudent);
  } catch (error) {
    res.json({ message: error });
  }
};

exports.student_findById = async (req, res) => {
  try {
    const profile = await GWStudent.findById(req.params.studentID);   //return student profile data from database

    const newJob = await GWJob.find({"studentSkills": { $in: profile.skills }});  //return new Job offer, matching to student skills from profile
    const currentJob = await GWJob.find({"_id": { $in: profile.currentJobs }});   //return current Job(s), matching to array of current jobs in profile
    const completedBriefs = await GWJob.find({"_id": { $in: profile.completedJobs }});  //return completed Job(s), matching to array of completed jobs in profile
    
    const result = {profile, newJob, currentJob, completedBriefs};  //combine all above queries into one object, res.json() can only be sent once

    res.json(result);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.student_update = async (req, res) => {
  try {
    const update = await User.findByIdAndUpdate(
      req.params.studentID,
      req.body.userName
    ); 

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
    // return
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

exports.userValidator = async (req, res) => {
  try {
    const userInfo = {
      email: req.body.email,
      password: req.body.password
    }
    authentication.validator(userInfo, res);
  } catch (err) {
    res.json({ message: err })
  }
}
