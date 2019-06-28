const Brief = require('../database/schemas/Brief');
const GWJob = require('../database/schemas/GWJob.js');
const GWStudent = require('../database/schemas/GWStudent.js');

exports.getAllBriefs = async (req, res) => {
  console.log('inside query')
  try {
    console.log("inside try: ", req)
    const briefs = await GWJob.find();
    res.json(briefs);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.postClientNewBrief = async (req, res) => {
  console.log("req", req.body);
  try {
    const newBriefData = new GWJob({
      companyName: req.body.companyName,
      contactPerson: req.body.contactPerson,
      projectName: req.body.projectName,
      projectBrief: req.body.projectBrief,
      projectDeadline: req.body.projectDeadline,
      estimatedWorkload: req.body.estimatedWorkload,
      projectPrice: req.body.projectPrice,
      additionalInfo: req.body.additionalInfo,
      studentSkills: req.body.studentSkills,
      jobClient: req.body.jobClient
    });
    const newBrief = await newBriefData.save();
    res.json(newBrief);
  } catch (error) {
    res.json({ message: error });
  }
};

exports.deleteAllBriefs = async (req, res) => {
  try {
    const briefs = Brief.deleteMany({__v: 0}, function(err) {});
    res.json(briefs);
  } catch (err){
    res.json({ message: err })
  }
}

exports.brief_update = async (req, res) => {
  try {
    const update = await Brief.findByIdAndUpdate(
      req.params.briefID,
      req.body.jobClient
    );
    res.json(update);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.brief_findByStudent = async (req, res) => {
  try {
    const profile = await GWJob.find({jobStudent: req.params.studentID});
    res.json(profile);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.brief_completedJobs = async (req, res) => {
  try {
    console.log("Request params: ", req.params);
    const profile = await GWStudent.findById(req.params.studentID);
    res.json(profile);
  } catch (err) {
    res.json({ message: err});
  }
};

exports.brief_findById = async (req, res) => {
  try {
    console.log(req.params)
    const profile = await GWJob.findById(req.params.briefID);
    res.json(profile);
  } catch (err) {
    res.json({ message: err });
  }
};
