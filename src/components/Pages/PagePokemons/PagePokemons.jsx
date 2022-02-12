import React, { useCallback, useEffect } from 'react';
import PageContainer from '../PageContainer/PageContainer';
import ItemList from '../../../ui/ItemList/ItemList';
import { INCREASE_POKEMONS_LIMIT, START_POKEMONS_AUTOLOAD, loadPokemons } from '../../../actions/pokemons';
import Card from '../../../ui/Card/Card';
import Button from '../../../ui/Button/Button';
import './PagePokemons.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withPokeapiService from '../../../hoc-helpers/withPokeapiService';

function PagePokemonsContainer({pokemons, limit, autoload, loadPokemons, increaseLimit, loadMore }) {
	const onScroll = useCallback((e) => {
		if ((window.innerHeight + window.scrollY) > document.body.clientHeight*0.98) {
			increaseLimit(12);
		}
	}, []);

	useEffect(() => { 
		if (!pokemons.length) {
			loadPokemons();
		}
		if (autoload) {
			document.addEventListener('scroll', onScroll);
			onScroll();
		}
		return () => {
			document.removeEventListener('scroll', onScroll);
		}
	 }, [ loadPokemons, autoload ]);

	return <PagePokemons pokemons={pokemons} limit={limit} autoload={autoload} onLoadMore={() => loadMore(12)}/>;
}

function PagePokemons({pokemons, limit, autoload, onLoadMore}) {
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
	autoload: store.pokemons.autoload,
});

const mapDispatchToProps = (dispatch, ownProps) => {
	return bindActionCreators({
		loadPokemons: loadPokemons(ownProps.service),
		loadMore: START_POKEMONS_AUTOLOAD,
		increaseLimit: INCREASE_POKEMONS_LIMIT,
	}, dispatch)
}

export default withPokeapiService(connect(mapStateToProps, mapDispatchToProps)(PagePokemonsContainer));