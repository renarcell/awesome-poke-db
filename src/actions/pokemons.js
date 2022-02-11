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
	dispatch(FETCH_POKEMONS_REQUEST);

}

export function INCREASE_POKEMONS_LIMIT() {
	return {
		type: "INCREASE_POKEMONS_LIMIT",
	}
}