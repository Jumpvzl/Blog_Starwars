const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [],
			people: [],
			vehicles: [],
			planets: [],
			error: null,
		},
		actions: {
			getPeople: async () => {
				const store = getStore();
				const setError = (errorMessage) => setStore({ error: errorMessage });

				try {
					const response = await fetch("https://www.swapi.tech/api/people/");
					if (response.status === 200) {
						const data = await response.json();
						setStore({ people: data.results }); 
					} else if (response.status === 404) {
						console.error("Personajes no encontrados (404).");
						setError("Personajes no encontrados (404).");
					} else {
						console.error("Error en la respuesta del servidor:", response.status);
						setError("Error en la respuesta del servidor.");
					}
				} catch (error) {
					console.error("Error fetching data:", error);
					setError("Error al conectar con la API.");
				}
			},

			getVehicles: async () => {
				// Implement the logic to fetch vehicles data here
				const hola = "example"; // Replace with actual logic
			},

			getPlanets: async () => {
				// Implement the logic to fetch planets data here
			}
		}
	};
};

export default getState;
