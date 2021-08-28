import React from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export function SecurePage(props) {
	const { store, actions } = React.useContext(Context);
	const history = useHistory();

	React.useEffect(
		() => {
			if (!store.authToken) {
				history.push("/login");
			}
		},
		[store.authToken]
	);

	return <>{props.children}</>;
}
