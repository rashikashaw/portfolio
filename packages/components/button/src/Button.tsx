import React from 'react';
import styled from '@emotion/styled';
import { ColorPalette } from '@portfolio/css-util';

export type ButtonProps = {
  label: React.ReactNode | string;
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

const ButtonBase = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 2px solid ${ColorPalette.purple.purple2};
  border-radius: 12px;  
  cursor: pointer;
  gap: 8px;
`;

export const Button = (props: ButtonProps) => {
  const {
    label, 
    onClick,
    className,
  } = props;
  return (
    <ButtonBase className={className} onClick={onClick}>
      {label} 
    </ButtonBase>
  );
};

