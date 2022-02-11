import pokemons from "./pokemons";

export default function reducer(store, action) {
	return {
		pokemons: pokemons(store, action),
	}
}