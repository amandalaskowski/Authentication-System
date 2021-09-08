import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light py-2">
			<h3 className="mb-0 ml-5">
				<i className="fas fa-brain" />
				Mynd Connect
			</h3>

			<a type="button" href="/login" className="btn btn-light flex-end mr-5">
				Login
			</a>
		</nav>
	);
};
