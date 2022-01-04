import React from "react";
import "./header.css";

export default function Header() {
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSm">Live With Nature</span>
				<span className="headerTitleLg">Blog</span>
			</div>
			<img
				className="headerImg"
				src="https://images.ctfassets.net/hrltx12pl8hq/6TOyJZTDnuutGpSMYcFlfZ/4dfab047c1d94bbefb0f9325c54e08a2/01-nature_668593321.jpg?fit=fill&w=480&h=270"
				alt=""
			/>
		</div>
	);
}
