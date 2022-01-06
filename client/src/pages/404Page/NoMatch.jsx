import React from "react";
import "./noMatch.css";

const NoMatch = () => {
	return (
		<div className="noMatch">
			<h1>404 Error Page</h1>
			<p class="zoom-area">
				<b>OOPS</b> THIS PAGE IS NOT FOUND .
			</p>
			<section class="error-container">
				<span>4</span>
				<span>
					<span class="screen-reader-text">0</span>
				</span>
				<span>4</span>
			</section>
			<div class="link-container">
				<a target="_blank" href="/" class="more-link">
					Visit the Home Page
				</a>
			</div>
		</div>
	);
};

export default NoMatch;
