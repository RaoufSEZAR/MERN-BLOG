const bcrypt = require("bcrypt");

const User = require("../models/UserModal");

exports.regiseterUser = async (req, res, next) => {
	const { username, password, email } = req.body;
	try {
		const newUser = new User({
			username,
			password,
			email,
		});
		const user = await newUser.save();
		res.status(201).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
};

exports.loginUser = async (req, res, next) => {
	const { password, email } = req.body;
	try {
		const user = await User.findOne({ email: email });
		!user && res.status(404).json("user not found");

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		!validPassword && res.status(400).json("wrong password");
		const { password, ...others } = user._doc;
		res.status(200).json(others);
	} catch (error) {
		res.status(500).json(error);
	}
};
