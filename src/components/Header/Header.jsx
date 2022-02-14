import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';

export default function Header(props) {
	function getLinkClasses({isActive}) {
		return ('link' + (isActive ? ' active' : ''));
	}
	return (
		<header className='header'>
			<div className="container">
				<nav className="nav-bar">
					<Link to='/'>
						<div className="logo-wrapper">
							<img src={logo} alt="Pokeball-logo" className="logo" />
							<div className="logo-text"><span className="fpart">Awesome</span><span className="spart">PokeDB</span></div>
						</div>
					</Link>

					<ul className="menu">
						<li><NavLink to='/pokemons' className={getLinkClasses}>Pokemons</NavLink></li>
						<li><NavLink to='/items' className={getLinkClasses}>Items</NavLink></li>
						<li><NavLink to='/forms' className={getLinkClasses}>Forms</NavLink></li>
					</ul>
				</nav>
			</div>
		</header>
	)
};
