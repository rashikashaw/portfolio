import React from 'react';
import { Dropdown } from '@portfolio/dropdown';
import { CgProfile } from 'react-icons/cg';
import { FaProductHunt } from 'react-icons/fa';
import styled from '@emotion/styled';
import { RxCounterClockwiseClock } from 'react-icons/rx';
import { Button } from '@portfolio/button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 300px;
  width: 200px;
  align-items: center;
  justify-content: space-around;
`;

const WithIconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 40%;
  margin-left: 40%;
`;

const OptionWrapper = styled.div`
  width: 160px;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  svg {
    width: 24px;
    height: 24px;
  }
`;
const TextWrapper = styled.div`
  margin-left: 20px;
  font-size: 15px;
  font-weight: 400;
`;

export const TestOption1 = () => {
  return (
    <OptionWrapper>
      <CgProfile />
      <TextWrapper>My Profile</TextWrapper>
    </OptionWrapper>
  );
};

export const TestOption2 = () => {
  return (
    <OptionWrapper>
      <FaProductHunt />
      <TextWrapper>My Products</TextWrapper>
    </OptionWrapper>
  );
};

export const TestOption3 = () => {
  return (
    <OptionWrapper>
      <RxCounterClockwiseClock />
      <TextWrapper>My Orders</TextWrapper>
    </OptionWrapper>
  );
};

const WithoutIconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 40%;
  margin-left: 40%;
`;

export const Default = () => {
  const option1 = [<TestOption1 />, <TestOption2 />, <TestOption3 />];
  const onSelect1 = (index: number) => {
    alert(`${index} option was clicked`);
  };
  const option2 = ['My Profile', 'My Orders', 'My Products'];
  const onSelect2 = (index: number) => {
    alert(`${index} option was clicked`);
  };
  return (
    <Wrapper>
      <WithIconWrapper>
        <Dropdown options={option1} onSelect={onSelect1}>
          <Button label={'With Icon'} onClick={() => {}} />
        </Dropdown>
      </WithIconWrapper>
      <WithoutIconWrapper>
        <Dropdown options={option2} onSelect={onSelect2}>
          <Button label={'Click me'} onClick={() => {}} />
        </Dropdown>
      </WithoutIconWrapper>
    </Wrapper>
  );
};
