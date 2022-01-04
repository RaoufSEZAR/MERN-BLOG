const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router
	.post("/register", authController.regiseterUser)
	.post("/login", authController.loginUser);

module.exports = router;
