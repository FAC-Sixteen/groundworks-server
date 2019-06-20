const express = require("express");

const router = express.Router();

const briefController = require("../controllers/briefControllers.js");

router.get("/all-briefs", briefController.getAllBriefs);
router.post("/new-brief", briefController.postClientNewBrief);
router.delete("/delete-all", briefController.deleteAllBriefs)
router.put("/brief-update/:briefID", briefController.brief_update);

module.exports = router;
