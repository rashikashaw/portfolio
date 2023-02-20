import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable no-magic-numbers */
import styled from '@emotion/styled';
import { Button } from 'button';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
export const IconLabel = () => (_jsxs(_Fragment, { children: ['Submit', _jsx(IoIosArrowForward, {})] }));
const RegularButton = styled(Button) `
  width: 120px;
`;
const RowWrapper = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  width: 1000px;
  justify-content: space-around;
`;
export const Default = () => {
    const [isLoading, setisLoading] = useState(false);
    const onLoadingButtonClick = () => {
        setisLoading(true);
    };
    if (isLoading) {
        setTimeout(() => {
            setisLoading(false);
        }, 2000);
    }
    return (_jsxs(RowWrapper, { children: [_jsx(Button, { label: "Danger", variant: "danger", onClick: () => { } }), _jsx(Button, { label: _jsx(IconLabel, {}), variant: "primary", onClick: () => { } }), _jsx(RegularButton, { label: "Click me to load", variant: "regular", isButtonLoading: isLoading, onClick: onLoadingButtonClick })] }));
};
