const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const UserModal = new Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		profilePic: {
			type: String,
			default: "",
		},
	},
	{ timestamps: true }
);

// hashing password before save to db
UserModal.pre("save", function (next) {
	const user = this;
	bcrypt.hash(user.password, 10, (error, hash) => {
		if (error) {
			return console.log(error);
		}
		user.password = hash;
		next();
	});
});

module.exports = mongoose.model("User", UserModal);
