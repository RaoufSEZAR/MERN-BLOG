import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import "./singlePost.css";

export default function SinglePost() {
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
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				{post.photo && (
					<img className="singlePostImg" src={post.photo} alt="" />
				)}

				<h1 className="singlePostTitle">
					{post.title}
					<div className="singlePostEdit">
						<i className="singlePostIcon far fa-edit"></i>
						<i className="singlePostIcon far fa-trash-alt"></i>
					</div>
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
