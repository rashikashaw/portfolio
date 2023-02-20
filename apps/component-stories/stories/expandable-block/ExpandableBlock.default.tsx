import React from 'react';
import { ExpandableBlock } from 'expandable-block';
import { useState } from '@storybook/addons';
import { GoChevronRight, GoChevronDown } from 'react-icons/go';
import styled from '@emotion/styled';

const EB_CLASS = 'expandable-block-class';
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  .${EB_CLASS} {
    margin-bottom: 16px;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextWrapper = styled.div`
  font-family: sans-serif;
  font-weight: 1000;
`;

const IconWrapper = styled.div`
  margin-right: 5px;
  margin-left: 12px;
  display: flex;
  justify-content: center;
`;

type HeaderProp = {
  currStatus: boolean;
  text: string;
};
const Header = ({ currStatus, text }: HeaderProp) => {
  return (
    <HeaderWrapper>
      <IconWrapper>
        {currStatus ? <GoChevronDown /> : <GoChevronRight />}
      </IconWrapper>
      <TextWrapper>{text}</TextWrapper>
    </HeaderWrapper>
  );
};

export const Default = () => {
  const [state, setState] = useState([false, false]);
  const onAnyToggleClick = (status: boolean, index: number) => {
    const newStatus = [...state];
    newStatus[index] = status;
    setState(newStatus);
  };
  const state0 = 0;
  const state1 = 1;
  return (
    <Wrapper>
      <ExpandableBlock
        header={<Header currStatus={state[state0]} text={'Header 1'} />}
        body={'body 1'}
        onToggle={(status: boolean) => {
          onAnyToggleClick(status, state0);
        }}
        close={state[state1]}
        className={EB_CLASS}
      />
      <ExpandableBlock
        header={<Header currStatus={state[state1]} text={'Header 2'} />}
        body={'body 2'}
        onToggle={(status: boolean) => {
          onAnyToggleClick(status, state1);
        }}
        close={state[state0]}
      />
    </Wrapper>
  );
};
