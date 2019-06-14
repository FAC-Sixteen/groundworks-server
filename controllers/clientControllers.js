const Client = require("../database/schemas/Client");

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
