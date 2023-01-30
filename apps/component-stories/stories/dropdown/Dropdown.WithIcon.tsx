import React, { Profiler } from "react";
import { Dropdown } from '@portfolio/dropdown';
import { CgProfile } from 'react-icons/cg';
import { FaProductHunt } from 'react-icons/fa';
import styled from "@emotion/styled";
import { RxCounterClockwiseClock } from 'react-icons/rx';
import { GiCircle } from 'react-icons/gi';


const StyledProductIcon1 = styled(FaProductHunt)`
  width: 40px;
  height: 40px;
  fill: gray;
`;

const StyledProfileIcon = styled(CgProfile)`
  width: 40px;
  height: 40px;
  fill: gray;
`;

const StyledOrdersIcon = styled(RxCounterClockwiseClock)`
  width: 40px;
  height: 40px;
  fill: gray;
`;

const Options = styled.div`
  margin: 25px
`;

export const TestOption = () => {
	return (
		<>
			<StyledProfileIcon />
			<Options>My Profile</Options>
		</>
	);
};

export const TestOption2 = () => {
	return (
		<>
			<StyledProductIcon1 />
			<Options>My Product</Options>
		</>
	);
};

export const TestOption3 = () => {
	return (
		<>
			<StyledOrdersIcon />
			<Options>My Orders</Options>
		</>
	);
};


const UserImage = () => {
	return <GiCircle/>
}

export const WithIcon = () => {
	const options = [<TestOption />, <TestOption2 />, <TestOption3/>];
  const userName = 'Rashika Shaw';
  const userImage = <UserImage/>
	const onSelect = (index: number) => {
		alert(`${index} option was clicked`)
	}
	return (
		<Dropdown userImage={userImage} options={options} onSelect={onSelect} userName={userName}/>
	);
};
