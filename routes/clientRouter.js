const express = require("express");

const router = express.Router();

const clientController = require("../controllers/clientControllers"); // call client controller file.

router.get("/all", clientController.getAllClients);
router.post("/sign-up", clientController.postClientSignUp);

router.get("/all-briefs", clientController.getAllBriefs);
router.post("/new-brief", clientController.postClientNewBrief);

module.exports = router;
