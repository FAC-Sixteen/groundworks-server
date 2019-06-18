const Student = require("../database/schemas/Student");

//get all student documents from database
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.json({ message: err });
  }
};

//delete all student documents from database
//IMPORTANT: this will delete the entire database.  Remove before deployment.
exports.deleteAllStudents = async (req, res) => {
  try {
    const students = await Student.deleteMany({__v: 0},
      function (err) {});
    res.json(students);
  } catch (err) {
    res.json({ message: err });
  }
}

//add new student document to database
exports.postStudentSignUp = async (req, res) => {
  try {
    // studentData is assigning object contain info to various variables i.e. firstName etc.
    const studentData = new Student({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password,
      university: req.body.university,
      yearOfStudy: req.body.yearOfStudy,
      courseStudied: req.body.courseStudied,
      aboutYou: req.body.aboutYou,
      skills: req.body.skills,
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
    const profile = await Student.findById(req.params.studentID);
    res.json(profile);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.student_update = async (req, res) => {
  try {
    const update = await Student.findByIdAndUpdate(req.params.studentID, req.body.firstName);//update
    res.json(update);
  } catch (err) {
    res.json({ message: err});
  }
}
