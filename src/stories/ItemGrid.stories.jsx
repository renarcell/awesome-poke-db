import React from 'react';
import ItemGrid from '../ui/ItemGrid/ItemGrid';
import Card from '../ui/Card';


export default {
	title: 'Project/ItemGrid',
	component: ItemGrid
}

const Template = (args) => (
	<ItemGrid {...args}>
		{
			[1,2,3,4,5,6].map(() => (
				<Card {...args}>
					<Card.Image imageUrl={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"}/>
					<Card.Title name={"Bulbasaur"}/>
				</Card>
			))
		}
	</ItemGrid>
);

export const Main = Template.bind({});
