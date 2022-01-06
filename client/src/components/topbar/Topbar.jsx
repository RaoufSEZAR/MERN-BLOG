import { Link } from "react-router-dom";
import "./topbar.css";
import { useContext } from "react";
import { Context } from "./../../context/Context";

export default function Topbar() {
	const { user, dispatch } = useContext(Context);
	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
	};
	return (
		<div className="top">
			<div className="topLeft">
				<i className="topIcon fab fa-facebook-square"></i>
				<i className="topIcon fab fa-instagram-square"></i>
				<i className="topIcon fab fa-pinterest-square"></i>
				<i className="topIcon fab fa-twitter-square"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">
						<Link className="link" to="/">
							HOME
						</Link>
					</li>
					<li className="topListItem">ABOUT</li>
					<li className="topListItem">CONTACT</li>
					<li className="topListItem">
						<Link className="link" to="/write">
							WRITE
						</Link>
					</li>
					{user && (
						<li className="topListItem" onClick={handleLogout}>
							LOGOUT
						</li>
					)}
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<Link className="link" to="/settings">
						{user.profilePic ? (
							<img className="topImg" src={user.profilePic} alt="" />
						) : (
							<img
								src="data:image/png;base64,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"
								alt=""
								className="topImg"
							/>
						)}
					</Link>
				) : (
					<ul className="topList">
						<li className="topListItem">
							<Link className="link" to="/login">
								LOGIN
							</Link>
						</li>
						<li className="topListItem">
							<Link className="link" to="/register">
								REGISTER
							</Link>
						</li>
					</ul>
				)}
				<i className="topSearchIcon fas fa-search"></i>
			</div>
		</div>
	);
}
