const Brief = require('../database/schemas/Brief');
const GWJob = require('../database/schemas/GWJob');
const GWStudent = require('../database/schemas/GWStudent');

exports.getAllBriefs = async (req, res) => {
  try {
    const briefs = await GWJob.find();
    res.json(briefs);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.postClientNewBrief = async (req, res) => {
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
    const profile = await GWStudent.findById(req.params.studentID);
    res.json(profile);
  } catch (err) {
    res.json({ message: err});
  }
};

exports.brief_findById = async (req, res) => {
  try {
    const profile = await GWJob.findById(req.params.briefID);
    res.json(profile);
  } catch (err) {
    res.json({ message: err });
  }
};

//send array of jobs (say, completed or current) and return all
exports.brief_findArrayById = async (req, res) => {
  try {
    // const completed = await GWStudent.find({"_id": ObjectId("5d12838ce7b2983aacbceac4")}, {"completedJobs": 1, "_id": 0});
    const briefs = await GWJob.find({"_id": {$in: ["5d1297512c68bc49060bce7b", "5d1297092c68bc49060bce7a"] } });

    res.json(briefs);
  } catch (err) {
    res.json({ message: err });
  }
}

//send student skill(s) as array of strings in req.body to return all matches
exports.student_match = async (req, res) => {
  try {
    const studentMatches = await GWJob.find({"studentSkills": {$in: req.body} });
    res.json(studentMatches);
  } catch (err) {
    res.json({ message: err });
  }
}
