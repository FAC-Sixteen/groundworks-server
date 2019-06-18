const Client = require("../database/schemas/Client");
const Brief = require("../database/schemas/Brief");

//get all client documents from database
exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.json({ message: err });
  }
};

//add new client document to database
exports.postClientSignUp = async (req, res) => {
  try {
    // clientData is assigning object contain info to various variables i.e. firstName etc.
    const clientData = new Client({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      jobTitle: req.body.jobTitle,
      companyName: req.body.companyName,
      companyUrl: req.body.companyUrl
    });
    const newClient = await clientData.save(); // wait for clientData before saving and storing in newClient
    res.json(newClient);
  } catch (error) {
    res.json({ message: error });
  }
};

exports.postClientNewBrief = async (req, res) => {
  console.log("req", req.body);
  try {
    const newBriefData = new Brief({
      companyName: req.body.companyName,
      contactPerson: req.body.contactPerson,
      projectName: req.body.projectName,
      projectBrief: req.body.projectBrief,
      projectDeadline: req.body.projectDeadline,
      estimatedWorkload: req.body.estimatedWorkload,
      projectPrice: req.body.projectPrice,
      studentSkills: req.body.studentSkills,
      additionalInfo: req.body.additionalInfo
    });
    const newBrief = await newBriefData.save();
    res.json(newBrief);
  } catch (error) {
    res.json({ message: error });
  }
};

exports.getAllBriefs = async (req, res) => {
  try {
    const briefs = await Brief.find();
    res.json(briefs);
  } catch (err) {
    res.json({ message: err });
  }
};
