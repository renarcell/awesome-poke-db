import React, { useCallback, useEffect } from 'react';
import PageContainer from '../PageContainer/PageContainer';
import ItemList from '../../../ui/ItemList/ItemList';
import { INCREASE_POKEMONS_LIMIT, START_POKEMONS_AUTOLOAD, loadPokemons, STOP_POKEMONS_AUTOLOAD } from '../../../actions/pokemons';
import Card from '../../../ui/Card/Card';
import Button from '../../../ui/Button/Button';
import './PagePokemons.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withPokeapiService from '../../../hoc-helpers/withPokeapiService';

function PagePokemonsContainer({pokemons, count, limit, autoload, loadPokemons, increaseLimit, loadMore, stopAutoload }) {
	console.log(pokemons);
	const onScroll = useCallback((e) => {
		if ((window.innerHeight + window.scrollY) > document.body.clientHeight*0.98) {
			increaseLimit(12);
		}
	}, [ increaseLimit ]);

	useEffect(() => { 
		if (!pokemons?.length) {
			loadPokemons();
		}
		if (limit >= count) {
			stopAutoload();
		}
		if (autoload) {
			document.addEventListener('scroll', onScroll);
			onScroll();
		} else {
			document.removeEventListener('scroll', onScroll);
		}
		return () => {
			document.removeEventListener('scroll', onScroll);
		}
	 }, [ loadPokemons, stopAutoload, onScroll, autoload, limit, count, pokemons?.length ]);

	return <PagePokemons pokemons={pokemons} limit={limit} count={count} onLoadMore={() => loadMore(12)}/>;
}

function PagePokemons({pokemons, count, limit, onLoadMore}) {
	return (
		<PageContainer>
			<ItemList>
				{
					pokemons.slice(0, limit).map(({imageUrl, name, id}) => (
						<Card key={id}>
							<Card.Image imageUrl={imageUrl}/>
							<Card.Title name={name}/>
						</Card>
					))
				}
			</ItemList>
			{count > limit && <Button onClick={onLoadMore}>Load more</Button>}
		</PageContainer>
	);
}

const mapStateToProps = (store) => ({
	pokemons: store.pokemons.items,
	count: store.pokemons.count,
	limit: store.pokemons.limit,
	autoload: store.pokemons.autoload,
});

const mapDispatchToProps = (dispatch, ownProps) => {
	return bindActionCreators({
		loadPokemons: loadPokemons(ownProps.service),
		loadMore: START_POKEMONS_AUTOLOAD,
		stopAutoload: STOP_POKEMONS_AUTOLOAD,
		increaseLimit: INCREASE_POKEMONS_LIMIT,
	}, dispatch)
}

export default withPokeapiService(connect(mapStateToProps, mapDispatchToProps)(PagePokemonsContainer));