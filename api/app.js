const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
require("dotenv").config();

// routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/usersRoutes");
const postRoutes = require("./routes/postsRoutes");
const categoryRoutes = require("./routes/categoriesRoutes");

const app = express();

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => console.log(`database error`, err));

app.use(express.json());

// multer
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "images");
	},
	filename: (req, file, cb) => {
		cb(null, req.body.name);
	},
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
	try {
		return res.status(200).json("File uploded successfully");
	} catch (error) {
		console.error(error);
	}
});

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/categories", categoryRoutes);

const port = process.env.NODE_PORT;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
