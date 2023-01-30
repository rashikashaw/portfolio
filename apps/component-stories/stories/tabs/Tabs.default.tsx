import LoremIpsum from 'react-lorem-ipsum';
import React from 'react';
import { Tabs } from '@portfolio/tabs';

const Body1 = () => (
	<LoremIpsum p={2} />
);
const Body2 = () => (
	<>
		<p>👽 👾 🤖 😺 😸 😹 😻 😼 😽 🙀</p>
		<LoremIpsum p={1} />
	</>
);
const tabData = [
	{
		label: 'Tab1',
		body: <Body1 />,
	},
	{
		label: 'Tab2',
		body: <Body2 />
	},
];

export const Default = () => {
	return(
		<Tabs
			data={tabData}
		/>
	);
};