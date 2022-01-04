const User = require("../models/UserModal");
const Post = require("../models/PostModal");

exports.createPost = async (req, res, next) => {
	try {
		const newPost = new Post(req.body);
		const post = await newPost.save();
		res.status(201).json(post);
	} catch (error) {
		res.status(500).json(error);
	}
};

//GET ALL POSTS
exports.getAllPosts = async (req, res) => {
	const username = req.query.user;
	const catName = req.query.cat;
	try {
		let posts;
		if (username) {
			posts = await Post.find({ username });
		} else if (catName) {
			posts = await Post.find({
				categories: {
					$in: [catName],
				},
			});
		} else {
			posts = await Post.find();
		}
		res.status(200).json(posts);
	} catch (err) {
		res.status(500).json(err);
	}
};
//GET Post by id
exports.getPostById = async (req, res) => {
	const id = req.params.id;
	try {
		const post = await Post.findById(id);
		!post && res.status(200).json(`Post with id: ${id} not found`);
		res.status(200).json(post);
	} catch (err) {
		res.status(500).json(err);
	}
};

exports.updatePost = async (req, res, next) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post.username === req.body.username) {
			try {
				const updatedPost = await Post.findByIdAndUpdate(
					req.params.id,
					{
						$set: req.body,
					},
					{ new: true }
				);
				res.status(200).json(updatedPost);
			} catch (err) {
				res.status(500).json(err);
			}
		} else {
			res.status(401).json("You can update only your post!");
		}
	} catch (err) {
		res.status(500).json(err);
	}
};

exports.deletePost = async (req, res) => {
	const { id } = req.params;
	if (req.body.userId === id) {
		try {
			const post = await Post.findById(id);
			try {
				await Post.findByIdAndDelete(id);
				res.status(200).json("Post has been deleted...");
			} catch (err) {
				res.status(500).json(err);
			}
		} catch (err) {
			res.status(404).json("Post not found!");
		}
	} else {
		res.status(401).json("You can delete only your account!");
	}
};
