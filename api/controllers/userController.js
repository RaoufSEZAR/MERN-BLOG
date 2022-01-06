const bcrypt = require("bcrypt");

const User = require("../models/UserModal");
const Post = require("../models/PostModal");

//GET Post by id
exports.getUserById = async (req, res) => {
	const id = req.params.id;
	try {
		const user = await User.findById(id);
		!user && res.status(200).json(`User with id: ${id} not found`);
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
};

exports.updateUser = async (req, res, next) => {
	if (req.body.userId === req.params.id) {
		if (req.body.password) {
			const salt = await bcrypt.genSalt(10);
			req.body.password = await bcrypt.hash(req.body.password, salt);
		}
		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);
			res.status(200).json(updatedUser);
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(401).json("You can update only your account!");
	}
};

exports.deleteAccount = async (req, res) => {
	const { id } = req.params;
	if (req.body.userId === id) {
		try {
			const user = await User.findById(id);
			try {
				await Post.deleteMany({ username: user.username });
				await User.findByIdAndDelete(id);
				res.status(200).json("User has been deleted...");
			} catch (err) {
				res.status(500).json(err);
			}
		} catch (err) {
			res.status(404).json("User not found!");
		}
	} else {
		res.status(401).json("You can delete only your account!");
	}
};
