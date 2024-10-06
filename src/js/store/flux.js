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
					const responses = await Promise.all(
						Array.from({ length: 20 }, (_, i) =>
							fetch(`https://www.swapi.tech/api/people/${i + 1}`)
						)
					);
			
					const results = await Promise.all(
						responses.map(response => {
							if (response.status === 200) {
								return response.json().then(data => ({
									...data.result.properties,
									uid: data.result.uid
								}));
							} else {
								return null; // Manejar errores como quieras
							}
						})
					);
			
					// Filtrar los resultados nulos
					const people = results.filter(person => person !== null);
					setStore({ people });
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
