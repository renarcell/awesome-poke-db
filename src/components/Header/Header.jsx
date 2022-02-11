import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';

export default function Header(props) {
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
						<li><Link to='/pokemons' className='link'>Pokemons</Link></li>
						<li><Link to='/' className='link'>Items</Link></li>
						<li><Link to='/' className='link'>Forms</Link></li>
					</ul>
				</nav>
			</div>
		</header>
	)
};
