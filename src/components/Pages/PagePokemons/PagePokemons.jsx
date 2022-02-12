import React, { useEffect } from 'react';
import PageContainer from '../PageContainer/PageContainer';
import ItemList from '../../../ui/ItemList/ItemList';
import { INCREASE_POKEMONS_LIMIT, loadPokemons } from '../../../actions/pokemons';
import Card from '../../../ui/Card/Card';
import Button from '../../../ui/Button/Button';
import './PagePokemons.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withPokeapiService from '../../../hoc-helpers/withPokeapiService';

function PagePokemonsContainer({pokemons, limit, loadPokemons, loadMore }) {
	useEffect(() => { 
		loadPokemons();
	 }, [ loadPokemons ]);
	return <PagePokemons pokemons={pokemons} limit={limit} onLoadMore={() => loadMore(12)}/>;
}

function PagePokemons({pokemons, limit, onLoadMore}) {
	const {results = []} = pokemons;
	return (
		<PageContainer>
			<ItemList>
				{
					results.slice(0, limit).map(({imageUrl, name, id}) => (
						<Card key={id}>
							<Card.Image imageUrl={imageUrl}/>
							<Card.Title name={name}/>
						</Card>
					))
				}
			</ItemList>
			<Button onClick={onLoadMore}/>
		</PageContainer>
	);
}

const mapStateToProps = (store) => ({
	pokemons: store.pokemons.items,
	limit: store.pokemons.limit,
});

const mapDispatchToProps = (dispatch, ownProps) => {
	return bindActionCreators({
		loadPokemons: loadPokemons(ownProps.service),
		loadMore: INCREASE_POKEMONS_LIMIT,
	}, dispatch)
}

export default withPokeapiService(connect(mapStateToProps, mapDispatchToProps)(PagePokemonsContainer));