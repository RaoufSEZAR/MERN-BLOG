const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategoryModal = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
});

module.exports = mongoose.model("Category", CategoryModal);
