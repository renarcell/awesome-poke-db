import React, { useEffect, useState } from 'react';
import PageContainer from '../PageContainer/PageContainer';
import ItemList from '../../../ui/ItemList/ItemList';
import DummyService from '../../../api/dummyService';
import Card from '../../../ui/Card/Card';
import './PagePokemons.css';

const dummyService = new DummyService();

export default function PagePokemons(props) {
	const [pokemons, setPokemons] = useState([]);
	useEffect(() => { 
		const pokemons = dummyService.getPokemons();
		setPokemons(pokemons);
	 }, []);
	return (
		<PageContainer>
			<ItemList>
				{
					pokemons.map(({imageUrl, name}) => (
						<Card>
							<Card.Image imageUrl={imageUrl}/>
							<Card.Title name={name}/>
						</Card>
					))
				}
			</ItemList>
		</PageContainer>
	);
}

