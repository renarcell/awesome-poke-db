import { combineReducers } from 'redux';
import pokemonsReducer from './pokemonsReducer';


// export default function reducer(store, action) {
// 	return {
// 		pokemons: pokemonsReducer,
// 	}
// }

const reducer = combineReducers({
	pokemons: pokemonsReducer,
});

export default reducer;