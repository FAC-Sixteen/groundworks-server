const Brief = require('../database/schemas/Brief');

exports.getAllBriefs = async (req, res) => {
  try {
    const briefs = await Brief.find();
    res.json(briefs);
  } catch (err) {
    res.json({ message: err });
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
