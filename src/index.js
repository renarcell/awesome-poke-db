import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { PokeapiServiceProvider } from './components/pokeapiServiceContext';
import { BrowserRouter } from "react-router-dom";
import PokeapiService from './api/pokeapiService';
import { Provider } from 'react-redux';
import store from './store';

const pokeapiService = new PokeapiService();
ReactDOM.render(
	<React.StrictMode>
		<PokeapiServiceProvider value={pokeapiService}>
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</PokeapiServiceProvider>
	</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
