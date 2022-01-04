const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostModal = new Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		desc: {
			type: String,
			required: true,
		},

		photo: {
			type: String,
		},
		username: {
			type: String,
			required: true,
		},
		categories: { type: Array },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Post", PostModal);
