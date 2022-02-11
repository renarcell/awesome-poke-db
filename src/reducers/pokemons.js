export default function pokemons(store, action) {
	if (store === undefined) {
		return {
			items: [],
			isLoading: null,
			error: null,
			limit: null,
		}
	}
	const { pokemons } = store;
	switch(action.type) {
		case "FETCH_POKEMONS_REQUEST":
			return {
				...pokemons,
				isLoading: true,
			}
		case "FETCH_POKEMONS_SUCCESS":
			return {
				...pokemons,
				items: action.payload,
			}
		case "FETCH_POKEMONS_FAILURE":
			return {
				...pokemons,
				error: action.payload,
			}
		case "INCREASE_POKEMONS_LIMIT":
			return {
				...pokemons,
				limit: action.payload,
			}
		default:
			return store;
	}
}