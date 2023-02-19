import React from 'react';
import styled from '@emotion/styled';
import { ColorPalette } from '@portfolio/css-util';

export const Wrapper = styled.div`
  height: 80px;
  width: 300px;
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputBox = styled.input`
  height: calc(100% - 2.3px) !important;
  width: calc(100% - 53px) !important;
  border-color: ${ColorPalette.purple.purple4};
  border-radius: 8px;
  transition-duration: 1s;
  padding-left: 10px;
  padding-right: 10px;
  &:hover {
    border-color: ${ColorPalette.purple.purple1};
  }
  &:focus {
    outline: none !important;
    border-color: ${ColorPalette.purple.purple1};
  }
`;
export const Icon = styled.div`
  svg {
    height: 20px;
    width: 20px;
  }
  position: absolute;
  display: flex;
  align-items: center;
  top: 50%;
  box-sizing: border-box;
  transform: translateY(-50%);
`;

export type InputBaseProps = React.InputHTMLAttributes<HTMLInputElement>;
