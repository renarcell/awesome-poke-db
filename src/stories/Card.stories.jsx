import React from 'react';
import Card from '../ui/Card';

export default {
	title: 'Project/Card',
	component: Card
}

const Template = (args) => (
	<Card {...args}>
		<Card.Image imageUrl={args.imageUrl}/>
		<Card.Title name={args.name}/>
	</Card>
);

export const Main = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Main.args = {
  imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
  name: "Bulbasaur",
  types: ['fire']
};

