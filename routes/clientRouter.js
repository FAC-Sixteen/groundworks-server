const express = require("express");

const router = express.Router();

const clientController = require("../controllers/clientControllers"); // call client controller file.

router.post("/sign-up", clientController.postClientSignUp);

module.exports = router;
