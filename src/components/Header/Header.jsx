import React from 'react';
import './Header.css';
import logo from './logo.png';

export default function Header(props) {
	return (
		<header className='header'>
			<div className="container">
				<div className="nav-bar">
					<div className="logo-wrapper">
						<img src={logo} alt="Pokeball-logo" className="logo" />
						<div className="logo-text"><span className="fpart">Awesome</span><span className="spart">PokeDB</span></div>
					</div>
					<ul className="menu">
						<li>Pokemons</li>
						<li>Items</li>
						<li>Forms</li>
					</ul>
				</div>
			</div>
		</header>
	)
};
