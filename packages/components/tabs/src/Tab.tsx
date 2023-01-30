import styled from '@emotion/styled';
import React from 'react';

type TabProps = {
  label: string;
  selected: boolean;
  onTabClick: () => void;
}

const StyledButton = styled.button<{selected: boolean}>`
  height: 70%;
  width: 10%;
  cursor: pointer;
  background-color: ${p => p.selected ? '#98DBF3' : '#FFFFFF'}
`;
export const Tab = ({label, onTabClick, selected}: TabProps) => {
	return(
		<StyledButton onClick={onTabClick} selected={selected}>{label}</StyledButton>
	);
};
