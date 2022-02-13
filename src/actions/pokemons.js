export function FETCH_POKEMONS_REQUEST() {
	return {
		type: "FETCH_POKEMONS_REQUEST",
	}
}

export function FETCH_POKEMONS_SUCCESS(data) {
	return {
		type: "FETCH_POKEMONS_SUCCESS",
		payload: data,
	}
}

export function FETCH_POKEMONS_FAILURE(error) {
	return {
		type: "FETCH_POKEMONS_FAILURE",
		payload: error.message,
	}
}

export const loadPokemons = (service) => () => (dispatch) => {
	dispatch(FETCH_POKEMONS_REQUEST());
	service.getPokemons()
	.then((pokemons) => { dispatch(FETCH_POKEMONS_SUCCESS(pokemons)) })
	.catch((error) => { dispatch(FETCH_POKEMONS_FAILURE(error)) });
}

export function START_POKEMONS_AUTOLOAD() {
	return {
		type: "START_POKEMONS_AUTOLOAD",
	}
}

export function STOP_POKEMONS_AUTOLOAD() {
	return {
		type: "STOP_POKEMONS_AUTOLOAD",
	}
}

export function INCREASE_POKEMONS_LIMIT(count) {
	return {
		type: "INCREASE_POKEMONS_LIMIT",
		payload: count,
	}
}