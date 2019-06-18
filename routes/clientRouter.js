const express = require("express");

const router = express.Router();

const clientController = require("../controllers/clientControllers"); // call client controller file.

router.get("/all", clientController.getAllClients);
router.get("/get-client/:clientID", clientController.client_findById);
router.post("/sign-up", clientController.postClientSignUp);

router.get("/all-briefs", clientController.getAllBriefs);
router.post("/new-brief", clientController.postClientNewBrief);

//register with client
router.post("/join", clientController.postRegisterClient);
router.get("/all-client-registers", clientController.getAllClientRegisters);

module.exports = router;
