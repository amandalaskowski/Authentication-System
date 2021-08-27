import React, { Component } from "react";
import { Context } from "../store/appContext";

export function LoginUser() {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const { store, actions } = React.useContext(Context);

	return (
		<div className="container">
			<div className="form-floating mb-3">
				<label>Email address</label>
				<input
					value={email}
					onChange={event => setEmail(event.target.value)}
					type="email"
					className="form-control"
					placeholder="name@example.com"
				/>
			</div>
			<div className="form-floating">
				<label>Password</label>
				<input
					value={password}
					onChange={event => setPassword(event.target.value)}
					type="password"
					className="form-control"
					placeholder="Password"
				/>
			</div>
			<button className="btn btn-primary" onClick={() => actions.loginUser(email, password)}>
				Login
			</button>
		</div>
	);
}
