import React, { useContext, useRef } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Context } from "./../../context/Context";
import axios from "axios";

export default function Login() {
	const emailRef = useRef();
	const passRef = useRef();
	const { dispatch, isFetching } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" });
		try {
			const res = await axios.post("/auth/login", {
				email: emailRef.current.value,
				password: passRef.current.value,
			});
			dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
		} catch (error) {
			dispatch({ type: "LOGIN_FAILURE" });
		}
	};

	return (
		<div className="login">
			<span className="loginTitle">Login</span>
			<form className="loginForm" onSubmit={handleSubmit}>
				<label>Email</label>
				<input
					type="email"
					className="loginInput"
					placeholder="Enter your email"
					ref={emailRef}
				/>
				<label>Password</label>
				<input
					type="password"
					className="loginInput"
					placeholder="Enter your password"
					ref={passRef}
				/>
				<button className="loginButton" type="submit" disabled={isFetching}>
					<Link className="link" to="/login">
						Login
					</Link>
				</button>
			</form>

			<button className="loginRegisterButton">
				<Link className="link" to="/register">
					Register
				</Link>
			</button>
		</div>
	);
}
