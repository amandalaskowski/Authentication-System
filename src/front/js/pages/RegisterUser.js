import React, { Component } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export function RegisterUser() {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const { store, actions } = React.useContext(Context);
	const history = useHistory();

	React.useEffect(
		() => {
			if (store.authToken) {
				history.push("/login");
			}
		},
		[store.authToken]
	);

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
			<button className="btn btn-primary" onClick={() => actions.registerUser(email, password)}>
				Register
			</button>
		</div>
	);
}
