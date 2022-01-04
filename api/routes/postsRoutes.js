const express = require("express");
const postController = require("../controllers/postController");

const router = express.Router();

router
	.post("/", postController.createPost)
	.get("/", postController.getAllPosts)
	.get("/:id", postController.getPostById)
	.put("/:id", postController.updatePost)
	.delete("/:id", postController.deletePost);

module.exports = router;
