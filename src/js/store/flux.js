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

			}
			getVehicles: async () => {
				
			}
			getPlanets: async () => {
				
			}
		}
	};
};

export default getState;
