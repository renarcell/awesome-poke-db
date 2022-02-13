export default function pokemons(store, action) {
	if (store === undefined) {
		return {
			items: [],
			count: 0,
			isLoading: null,
			error: null,
			autoload: false,
			limit: 12,
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
				items: action.payload.results,
				count: action.payload.count,
			}
		case "FETCH_POKEMONS_FAILURE":
			return {
				...pokemons,
				error: action.payload,
			}
		case "START_POKEMONS_AUTOLOAD":
			return {
				...pokemons,
				autoload: true,
			}
		case "STOP_POKEMONS_AUTOLOAD":
			return {
				...pokemons,
				autoload: false,
			}
		case "INCREASE_POKEMONS_LIMIT":
			return {
				...pokemons,
				limit: pokemons.limit + action.payload,
			}
		default:
			return store;
	}
}