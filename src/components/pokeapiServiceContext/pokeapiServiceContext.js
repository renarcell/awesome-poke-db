import React, { createContext } from 'react';

const { Provider: PokeapiServiceProvider, Consumer: PokeapiServiceCunsumer } = createContext();

export {
	PokeapiServiceProvider,
	PokeapiServiceCunsumer
}