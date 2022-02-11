import React, { useEffect, useState } from 'react';
import PageContainer from '../PageContainer/PageContainer';
import ItemList from '../../../ui/ItemList/ItemList';
import { loadPokemons } from '../../../actions/pokemons';
import DummyService from '../../../api/dummyService';
import Card from '../../../ui/Card/Card';
import './PagePokemons.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withPokeapiService from '../../../hoc-helpers/withPokeapiService';

function PagePokemonsContainer({pokemons, loadPokemons}) {
	useEffect(() => { 
		loadPokemons();
	 }, []);
	return <PagePokemons pokemons={pokemons}/>;
}

function PagePokemons({pokemons}) {
	const {results = []} = pokemons;
	return (
		<PageContainer>
			<ItemList>
				{
					results.map(({imageUrl, name}, idx) => (
						<Card key={idx}>
							<Card.Image imageUrl={imageUrl}/>
							<Card.Title name={name}/>
						</Card>
					))
				}
			</ItemList>
		</PageContainer>
	);
}

const mapStateToProps = (store) => ({
	pokemons: store.pokemons.items,
});

const mapDispatchToProps = (dispatch, ownProps) => {
	return bindActionCreators({
		loadPokemons: loadPokemons(ownProps.service),
	}, dispatch)
}

export default withPokeapiService(connect(mapStateToProps, mapDispatchToProps)(PagePokemonsContainer));