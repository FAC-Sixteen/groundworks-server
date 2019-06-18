const express = require("express");

const router = express.Router();

const clientController = require("../controllers/clientControllers"); // call client controller file.

router.get("/all", clientController.getAllClients);
router.post("/sign-up", clientController.postClientSignUp);
router.get("/get-client/:clientID", clientController.getClientById);

module.exports = router;
