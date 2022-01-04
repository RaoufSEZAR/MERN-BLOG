import React from "react";
import "./settings.css";
import Sidebar from "./../../components/sidebar/Sidebar";

export default function Settings() {
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsTitleUpdate">Update Your Account</span>
					<span className="settingsTitleDelete">Delete Account</span>
				</div>
				<form className="settingsForm">
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img
							src="https://paperdoo.de/assets/img/paperdoo-nature/paperdoo-nature-2.jpg"
							alt=""
						/>
						<label htmlFor="fileInput">
							<i className="settingsPPIcon far fa-user-circle"></i>
						</label>
						<input
							type="file"
							id="fileInput"
							style={{ display: "none" }}
							className="settingsPPInput"
						/>
					</div>
					<label>Username</label>
					<input type="text" placeholder="raouf" name="name" />
					<label>Email</label>
					<input type="email" placeholder="raouf@gmail.com" name="email" />
					<label>Password</label>
					<input type="password" placeholder="Password" name="password" />
					<button className="settingsSubmitButton" type="submit">
						Update
					</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
}
