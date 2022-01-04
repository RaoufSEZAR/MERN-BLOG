const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router
	.get("/:id", userController.getUserById)
	.put("/:id", userController.updateUser)
	.delete("/:id", userController.deleteAccount);

module.exports = router;
