import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable no-magic-numbers */
import { useState } from 'react';
import { Input } from 'input';
import styled from '@emotion/styled';
import { BiEnvelope, BiSearchAlt } from 'react-icons/bi';
import { ColorPalette } from 'css-util';
const Wrapper = styled.div `
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const VarientWrapper = styled.div `
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  margin-top: 40px;
`;
const StyledInput = styled(Input) `
  height: 100px;
  width: 200px;
`;
const LabelWrapper = styled.label `
  margin-bottom: 8px;
`;
const StyledSearch = styled(BiSearchAlt) `
  color: ${ColorPalette.purple.purple2};
`;
const StyledEnvelope = styled(BiEnvelope) `
  color: ${ColorPalette.purple.purple2};
`;
export const Default = () => {
    const [inputWithState1, setInputWithState1] = useState(0);
    const onInputChange1 = (e) => {
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
    const [inputWithState, setInputWithState] = useState('');
    const onInputChange = (e) => {
        setInputWithState(e.target.value);
    };
    const onInputClear = () => {
        setInputWithState('');
    };
    const [inputWithState2, setInputWithState2] = useState('');
    const onInputChange2 = (e) => {
        setInputWithState2(e.target.value);
    };
    const onInputClear2 = () => {
        setInputWithState2('');
    };
    return (_jsxs(Wrapper, { children: [_jsxs(VarientWrapper, { children: [_jsx(LabelWrapper, { children: "Text Label" }), _jsx(Input, { placeholder: "type here" })] }), _jsxs(VarientWrapper, { children: [_jsx(LabelWrapper, { children: "Text label with Icon" }), _jsx(StyledInput, { variant: "icon", icon: _jsx(StyledEnvelope, {}), placeholder: "type here" })] }), _jsxs(VarientWrapper, { children: [_jsx(LabelWrapper, { children: "Input-box with search icon" }), _jsx(Input, { variant: "icon", icon: _jsx(StyledSearch, {}), placeholder: "search" })] }), _jsxs(VarientWrapper, { children: [_jsx(LabelWrapper, { children: "Input-box with search icon" }), _jsx(Input, { variant: "clear-button", value: inputWithState, onChange: onInputChange, onCancel: onInputClear, placeholder: "search" })] }), _jsxs(VarientWrapper, { children: [_jsx(LabelWrapper, { children: "Input-box for increase decrease" }), _jsx(Input, { variant: "increment-decrement", onDecrease: onLeftButtonClick, onIncrease: onRightButtonCLick, onChange: onInputChange1, value: inputWithState1 })] })] }));
};
