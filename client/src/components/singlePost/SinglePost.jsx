import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import "./singlePost.css";
import { Context } from "./../../context/Context";

export default function SinglePost() {
	const { user } = useContext(Context);
	const PF = "http://localhost:5000/images/";
	const [post, setPost] = useState({});
	const location = useLocation();
	const path = location.pathname.split("/")[2];

	useEffect(() => {
		const fetchPost = async () => {
			const res = await axios.get(`/posts/${path}`);
			setPost(res.data);
		};
		fetchPost();
	}, [path]);

	const handleDelete = async () => {
		try {
			await axios.delete(`/posts/${post._id}`, {
				data: { username: user.username },
			});
			window.location.replace("/");
		} catch (error) {}
	};
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				{post.photo && (
					<img className="singlePostImg" src={PF + post.photo} alt="" />
				)}

				<h1 className="singlePostTitle">
					{post.title}
					{post.username === user?.username && (
						<div className="singlePostEdit">
							<i className="singlePostIcon far fa-edit"></i>
							<i
								className="singlePostIcon far fa-trash-alt"
								onClick={handleDelete}
							></i>
						</div>
					)}
				</h1>
				<div className="singlePostInfo">
					<span>
						Author:
						<b className="singlePostAuthor">
							<Link className="link" to={`/posts?user=${post.username}`}>
								{post.username}
							</Link>
						</b>
					</span>
					<span>{new Date(post.createdAt).toDateString()}</span>
				</div>
				<p className="singlePostDesc">{post.desc}</p>
			</div>
		</div>
	);
}
