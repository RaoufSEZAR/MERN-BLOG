const express = require("express");
const categoryController = require("../controllers/categoryController");

const router = express.Router();

router
	.post("/", categoryController.createCategory)
	.get("/", categoryController.getAllCategories);

module.exports = router;
