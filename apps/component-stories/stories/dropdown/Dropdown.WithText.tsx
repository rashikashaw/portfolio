import React, { Profiler } from "react";
import { Dropdown } from '@portfolio/dropdown';
import { GiCircle } from 'react-icons/gi';


const UserImage = () => {
	return <GiCircle />
}

export const WithText = () => {
	const options = ['My Profile', 'My Orders', 'My Products'];
	const userName = 'Rashika Shaw';
	const userImage = <UserImage/>
	const onSelect = (index: number) => {
		alert(`${index} option was clicked`)
	}
	return (
		<Dropdown userImage={userImage}userName={userName} options={options} onSelect={onSelect} />
	);
};
