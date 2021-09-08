import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="homecontainer container-fluid w-100 h-100 d-flex align-items-center justify-content-center">
			<h1 className="display-2">Keeping You Connected</h1>
			<footer className="footer mt-auto py-2 bg-light fixed-bottom">
				<div className="container d-flex justify-content-center fixed-bottom mb-5">
					<a type="button" href="/login" className="btn btn-light">
						Learn More about Mynd Connect Here
					</a>
				</div>
			</footer>
		</div>
	);
};
