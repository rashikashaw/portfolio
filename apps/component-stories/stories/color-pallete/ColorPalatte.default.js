import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from '@emotion/styled';
import { ColorPalette } from 'css-util';
const Wrapper = styled.div `
  align-items: flex-start;
  padding: 20px;
  flex-direction: row;
  display: flex;
`;
const Color = styled.div `
  width: 72px;
  height: 32px;
  background: ${(p) => p.color};
  margin-left: 32px;
`;
const ColorItem = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;
const ColorWrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 32px;
`;
const ColorTitle = styled.div `
  margin-bottom: 24px;
  font-weight: 600;
`;
export const ColorPalatte = () => {
    return (_jsxs(Wrapper, { children: [_jsxs(ColorWrapper, { children: [_jsx(ColorTitle, { children: "Purple" }), Object.keys(ColorPalette.purple).map((colorName) => (_jsxs(ColorItem, { children: [_jsx("div", { children: `${colorName}: ` }), _jsx(Color, { color: ColorPalette.purple[colorName] })] })))] }), _jsxs(ColorWrapper, { children: [_jsx(ColorTitle, { children: "Black" }), Object.keys(ColorPalette.black).map((colorName) => (_jsxs(ColorItem, { children: [_jsx("div", { children: `${colorName}: ` }), _jsx(Color, { color: ColorPalette.black[colorName] })] })))] })] }));
};
