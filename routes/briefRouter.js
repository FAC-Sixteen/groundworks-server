const express = require("express");

const router = express.Router({caseSensitive: true, strict: "enabled"});

const briefController = require("../controllers/briefControllers.js");

router.get("/all-briefs", briefController.getAllBriefs);
router.post("/new-brief", briefController.postClientNewBrief);
router.delete("/delete-all", briefController.deleteAllBriefs)
router.put("/brief-update/:briefID", briefController.brief_update);
router.get("/brief-get/:studentID", briefController.brief_findByStudent);
router.get("/brief-complete/:studentID", briefController.brief_completedJobs);
router.get("/get-brief/:briefID", briefController.brief_findById);

router.get("/student-match", briefController.student_match);  //query DB for skills match on login, render JobOffer on student dashboard (handle if none)

module.exports = router;
