import LoremIpsum from 'react-lorem-ipsum';
import React from 'react';
import { Tabs } from '@portfolio/tabs';
import { action } from '@storybook/addon-actions';

const Body1 = () => (
	<LoremIpsum p={2} />
);
const Body2 = () => (
	<>
		<p>👽 👾 🤖 😺 😸 😹 😻 😼 😽 🙀</p>
		<LoremIpsum p={1} />
	</>
);
const options = ['Tab1', 'Tab2'];

export const Default = () => {
	return(
		<Tabs
			options={options}
			onTabClick={action('onTabClick')}
		/>
	);
};