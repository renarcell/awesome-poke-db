import React from 'react';
import './App.css';
import Header from "../Header/Header";
import PagePokemons from '../Pages/PagePokemons/PagePokemons';
import WelcomePage from '../Pages/WelcomePage/WelcomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
		<Header/>
		<Routes>
			<Route path='/' element={<WelcomePage/>}/>
			<Route path='/pokemons' element={<PagePokemons/>}>
			</Route>
		</Routes>
    </div>
  );
}

export default App;