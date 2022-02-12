import React from 'react';
import ItemList from '../ui/ItemList/ItemList';
import Card from '../ui/Card';


export default {
	title: 'Project/ItemList',
	component: ItemList
}

const Template = (args) => (
	<ItemList {...args}>
		{
			[1,2,3,4,5,6].map(() => (
				<Card {...args}>
					<Card.Image imageUrl={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"}/>
					<Card.Title name={"Bulbasaur"}/>
				</Card>
			))
		}
	</ItemList>
);

export const Main = Template.bind({});
