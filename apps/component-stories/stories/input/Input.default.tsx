/* eslint-disable no-magic-numbers */
import React, { useState } from 'react';
import { Input } from '@portfolio/input';
import styled from '@emotion/styled';
import { BiEnvelope, BiSearchAlt } from 'react-icons/bi';
import { ColorPalette } from '@portfolio/css-util';

const Wrapper = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const VarientWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  margin-top: 40px;
`;

const StyledInput = styled(Input)`
  height: 100px;
  width: 200px;
`;

const LabelWrapper = styled.label`
  margin-bottom: 8px;
`;

const StyledSearch = styled(BiSearchAlt)`
  color: ${ColorPalette.purple.purple2};
`;

const StyledEnvelope = styled(BiEnvelope)`
  color: ${ColorPalette.purple.purple2};
`;

export const Default = () => {
  const [inputWithState1, setInputWithState1] = useState(0);
  const onInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputWithState1(Math.round(Number(e.target.value)) || 0);
  };
  const onLeftButtonClick = () => {
    if (inputWithState1 > 0) {
      setInputWithState1(inputWithState1 - 1);
    }
  };
  const onRightButtonCLick = () => {
    setInputWithState1(inputWithState1 + 1);
  };
  const [inputWithState, setInputWithState] = useState<string | number>('');
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputWithState(e.target.value);
  };
  const onInputClear = () => {
    setInputWithState('');
  };

  const [inputWithState2, setInputWithState2] = useState<string | number>('');
  const onInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputWithState2(e.target.value);
  };
  const onInputClear2 = () => {
    setInputWithState2('');
  };

  return (
    <Wrapper>
      <VarientWrapper>
        <LabelWrapper>Text Label</LabelWrapper>
        <Input placeholder="type here" />
      </VarientWrapper>
      <VarientWrapper>
        <LabelWrapper>Text label with Icon</LabelWrapper>
        <StyledInput
          variant="icon"
          icon={<StyledEnvelope />}
          placeholder="type here"
        />
      </VarientWrapper>
      <VarientWrapper>
        <LabelWrapper>Input-box with search icon</LabelWrapper>
        <Input variant="icon" icon={<StyledSearch />} placeholder="search" />
      </VarientWrapper>
      <VarientWrapper>
        <LabelWrapper>Input-box with search icon</LabelWrapper>
        <Input
          variant="clear-button"
          value={inputWithState}
          onChange={onInputChange}
          onCancel={onInputClear}
          placeholder="search"
        />
      </VarientWrapper>
      <VarientWrapper>
        <LabelWrapper>Input-box for increase decrease</LabelWrapper>
        <Input
          variant="increment-decrement"
          onDecrease={onLeftButtonClick}
          onIncrease={onRightButtonCLick}
          onChange={onInputChange1}
          value={inputWithState1}
        />
      </VarientWrapper>
    </Wrapper>
  );
};
