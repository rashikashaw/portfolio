import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from '@emotion/styled';
import { Button } from 'button';
import { SidePanel } from 'side-panel';
import { useState } from 'react';
import LoremIpsum from 'react-lorem-ipsum';
const Wrapper = styled.div `
  display: flex;
`;
const HeaderWrapper = styled.div `
  height: 32px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const HeaderText = styled.div `
  margin-left: 8px;
`;
const Header = () => {
    return (_jsx(HeaderWrapper, { children: _jsx(HeaderText, { children: "This is the header" }) }));
};
const StyledButton = styled(Button) `
  background: #dedaf9;
  border: 1px solid;
  font-size: 16px;
  cursor: pointer;
  height: 50px;
  width: 100px;
`;
export const Default = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (_jsxs(Wrapper, { children: [_jsx(StyledButton, { label: "click", onClick: () => setDrawerOpen(!drawerOpen) }), drawerOpen &&
                _jsx(SidePanel, { isOpen: drawerOpen, header: _jsx(Header, {}), body: _jsx(LoremIpsum, {}), close: () => setDrawerOpen(false) })] }));
};
