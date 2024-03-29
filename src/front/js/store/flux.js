const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			authToken: null,
			userInfo: null,
			authError: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {},

			logout: () => {
				setStore({ authToken: null });
			},

			loginUser: (email, password) => {
				fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					body: JSON.stringify({ email, password }),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						if (resp.status !== 200) {
							throw new Error(rest.data);
						}

						return resp.json();
					})
					.then(data => setStore({ authToken: data.token, authError: null }))
					.catch(error => setStore({ authToken: null, authError: error }));
			},

			registerUser: (email, password) => {
				fetch(process.env.BACKEND_URL + "/api/register", {
					method: "POST",
					body: JSON.stringify({ email, password }),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						if (resp.status !== 200) {
							throw new Error(rest.data);
						}

						return resp.json();
					})
					.then(data => setStore({ authToken: data.token, authError: null }))
					.catch(error => setStore({ authToken: null, authError: error }));
			}
		}
	};
};

export default getState;
