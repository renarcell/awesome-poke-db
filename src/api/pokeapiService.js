export default class pokeapiService {
	_baseUrl = "https://pokeapi.co/api/v2/";
	getResourse = async (url) => { 
		const response = await fetch(`${this._baseUrl}${url}`);
		if (!response.ok) {
			throw new Error('get resourse error');
		}
		return await response.json();
	}

	getPokemons = async () => {
		const res = await this.getResourse("pokemon/?limit=1130");
		if (!res.results && !res.count) {
			throw new Error('Invalid pokemons json');
		}
		return {
			count: res.count, 
			results: res.results.map(pok => this._transformPokemon(pok)),
		}
	}

	_transformPokemon = ({name, url}) => {
		const id = this._ejectIdFromUrl(url);
		return {
			id,
			name,
			url,
			imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
		}
	}

	_ejectIdFromUrl = (url) => {
		return url.match(/\/([0-9]+)\/$/)[1];
	}


}