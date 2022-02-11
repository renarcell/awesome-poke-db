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
		const res = await this.getResourse("pokemon/?offset=20&limit=1126");
		if (!res.results) {
			throw new Error('Invalid pokemons json');
		}
		return {
			count: res.count, 
			results: res.results
		}
	}


}