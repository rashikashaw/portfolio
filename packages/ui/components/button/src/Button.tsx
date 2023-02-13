import React from 'react';
import styled from '@emotion/styled';
import { Spin } from 'antd';

export type ButtonProps = {
  label: React.ReactNode | string;
  isButtonLoading?: boolean;
  isButtonDisabled?: boolean;
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  variant?: 'primary' | 'danger' | 'regular';
};

const getButtonBackground = (variant: ButtonProps['variant']) => {
  if (variant === 'primary') {
    return 'rgb(60, 120, 194)';
  }
  if (variant === 'danger') {
    return '#FF4D4F';
  }
  return 'white';
};

const getButtonBackgroundHover = (variant: ButtonProps['variant']) => {
  if (variant === 'primary') {
    return 'rgb(75, 126, 191)';
  }
  if (variant === 'danger') {
    return 'rgb(232, 104, 104)';
  }
  return 'white';
};

const getButtonFontColor = (variant: ButtonProps['variant']) => {
  if (variant === 'primary') {
    return 'white';
  }
  if (variant === 'danger') {
    return 'white';
  }
  return 'inherit';
};

const ButtonBase = styled.button<{variant: ButtonProps['variant']}>`
  min-height: 32px;
  min-width: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ variant })=> getButtonBackground(variant)};
  color: ${({ variant })=> getButtonFontColor(variant)};
  border: 1px solid rgb(0, 0, 0, 0.1);
  border-radius: 6px;  
  cursor: pointer;
  padding: 8px;
  font-size: 15px;
  font-weight: 400;
  gap: 8px;
  &:hover {
    background-color: ${({ variant })=> getButtonBackgroundHover(variant)};
    ${({ variant }) => variant === 'regular' && `
      border-color: #1677FF;
      color: #1677FF;
    `}}
  }
`;

const Spinner = styled(Spin)`
  width: 24px;
  height:24px;
`;

export const Button = (props: ButtonProps) => {
  const {
    label, 
    onClick,
    className,
    variant = 'regular',
    isButtonLoading = false,
    isButtonDisabled = false,
  } = props;
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isButtonLoading) {
      onClick(e);
    };
  };

  return (
    <ButtonBase className={className} onClick={onButtonClick} disabled={isButtonDisabled} variant={variant}>
      {!isButtonLoading && label} 
      {isButtonLoading && <Spinner />}
    </ButtonBase>
  );
};
