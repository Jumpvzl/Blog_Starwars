const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [],
			characters: [],
			vehicles: [],
			planets: [],
		},
		actions: {
			getPeople: async () => {
				// Implement the logic to fetch people data here
			},

			getVehicles: async () => {
				// Implement the logic to fetch vehicles data here
				// If "hola" is intended to be used, define it appropriately
				const hola = "example"; // Replace with actual logic
			},

			getPlanets: async () => {
				// Implement the logic to fetch planets data here
			}
		}
	};
};

export default getState;
