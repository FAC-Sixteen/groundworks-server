const Student = require("../database/schemas/Student");

exports.postStudentSignUp = async (req, res) => {
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
    LinkedinURL: req.body.LinkedinURL
  });
  try {
    const newStudent = await studentData.save(); // wait for studentData before saving and storing in newStudent
    response.json(newStudent);
  } catch (error) {
    response.json({ message: error });
  }
};
