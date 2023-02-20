import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dropdown } from 'dropdown';
import { CgProfile } from 'react-icons/cg';
import { FaProductHunt } from 'react-icons/fa';
import styled from '@emotion/styled';
import { RxCounterClockwiseClock } from 'react-icons/rx';
import { Button } from 'button';
const Wrapper = styled.div `
  display: flex;
  flex-direction: row;
  height: 300px;
  width: 200px;
  align-items: center;
  justify-content: space-around;
`;
const WithIconWrapper = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 40%;
  margin-left: 40%;
`;
const OptionWrapper = styled.div `
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
const TextWrapper = styled.div `
  margin-left: 20px;
  font-size: 15px;
  font-weight: 400;
`;
export const TestOption1 = () => {
    return (_jsxs(OptionWrapper, { children: [_jsx(CgProfile, {}), _jsx(TextWrapper, { children: "My Profile" })] }));
};
export const TestOption2 = () => {
    return (_jsxs(OptionWrapper, { children: [_jsx(FaProductHunt, {}), _jsx(TextWrapper, { children: "My Products" })] }));
};
export const TestOption3 = () => {
    return (_jsxs(OptionWrapper, { children: [_jsx(RxCounterClockwiseClock, {}), _jsx(TextWrapper, { children: "My Orders" })] }));
};
const WithoutIconWrapper = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 40%;
  margin-left: 40%;
`;
export const Default = () => {
    const option1 = [_jsx(TestOption1, {}), _jsx(TestOption2, {}), _jsx(TestOption3, {})];
    const onSelect1 = (index) => {
        alert(`${index} option was clicked`);
    };
    const option2 = ['My Profile', 'My Orders', 'My Products'];
    const onSelect2 = (index) => {
        alert(`${index} option was clicked`);
    };
    return (_jsxs(Wrapper, { children: [_jsx(WithIconWrapper, { children: _jsx(Dropdown, Object.assign({ options: option1, onSelect: onSelect1 }, { children: _jsx(Button, { label: 'With Icon', onClick: () => { } }) })) }), _jsx(WithoutIconWrapper, { children: _jsx(Dropdown, Object.assign({ options: option2, onSelect: onSelect2 }, { children: _jsx(Button, { label: 'Click me', onClick: () => { } }) })) })] }));
};
