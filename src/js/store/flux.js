const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [],
			people: [],
			vehicles: [],
			planets: [],
			favorites: [],
			error: null,
		},
		actions: {
			addFavorite: (item) => {
				console.log("Adding favorite:", item);
				const store = getStore();
				setStore({"favorites": [...store.favorites,item]});
			},
			removeFavorite: (item) => {
				console.log("Removing favorite with uid:", uid);
				const store = getStore();
				setStore({"favorites": store.favorites.filter((favorites) => favorites.uid != item.uid && favorites.name != item.name )});
			},
			
			getPeople: async () => {
				const store = getStore();
				const setError = (errorMessage) => setStore({ error: errorMessage });
			
				try {
					const responses = await Promise.all(
						Array.from({ length: 5 }, (_, i) =>
							fetch(`https://www.swapi.tech/api/people/${i + 1}`)
						)
					);
			
					const results = await Promise.all(
						responses.map(response => {
							if (response.status === 200) {
								return response.json().then(data => ({
									...data.result.properties,
									uid: data.result.uid,
									description: data.result.description,
								}));
							} else {
								return null; // Manejar errores como quieras
							}
						})
					);
			
					// Filtrar los resultados nulos
					const people = results.filter(person => person !== null);
					console.log(people)
					setStore({ people });
				} catch (error) {
					console.error("Error fetching data:", error);
					setError("Error al conectar con la API.");
				}
			},
			
			getVehicles: async () => {
				const store = getStore();
				const setError = (errorMessage) => setStore({ error: errorMessage });
			
				try {
					const responses = await Promise.all(
						Array.from({ length: 15 }, (_, i) =>
							fetch(`https://www.swapi.tech/api/starships/${i + 1}`)
						)
					);
			
					const results = await Promise.all(
						responses.map(response => {
							if (response.ok) {
								return response.json().then(data => ({
									...data.result.properties,
									uid: data.result.uid,
									description: data.result.description,
								}));
							} else {
								console.error(`Error fetching vehicle: ${response.status}`);
								return null;
							}
						})
					);
			
					// Filtrar los resultados nulos
					const vehicles = results.filter(vehicle => vehicle !== null);
					console.log(vehicles);
					setStore({ vehicles });
				} catch (error) {
					console.error("Error fetching data:", error);
					setError("Error al conectar con la API.");
				}
			},
			

			getPlanets: async () => {
				const store = getStore();
				const setError = (errorMessage) => setStore({ error: errorMessage });
			
				try {
					const responses = await Promise.all(
						Array.from({ length: 5 }, (_, i) =>
							fetch(`https://www.swapi.tech/api/planets/${i + 1}`)
						)
					);
					const results = await Promise.all(
						responses.map(response => {
							if (response.status === 200) {
								return response.json().then(data => ({
									...data.result.properties,
									uid: data.result.uid,
									description: data.result.description,
								}));
							} else {
								return null; // Manejar errores como quieras
							}
						})
					);
					// Filtrar los resultados nulos
					const planets = results.filter(planet => planet !== null);
					console.log(planets)
					setStore({ planets });
				} catch (error) {
					console.error("Error fetching data:", error);
					setError("Error al conectar con la API.");
				}
			},
		}
	};
};

export default getState;
