const Client = require("../database/schemas/Client");

exports.postClientSignUp = async (req, res) => {
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
  try {
    const newClient = await studentData.save(); // wait for clientData before saving and storing in newClient
    console.log("reqCLient", req.body);
    console.log("resClient", res.body);
    res.join(newClient);
  } catch (error) {
    console.log("reqclienttttt", req.body);
    console.log("resclientttt", res.body);
    res.json({ message: error });
  }
};
