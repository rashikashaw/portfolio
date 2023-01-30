import React from "react";
import { InputWithIcon, InputWithIconProps } from './InputWithIcon';
import { InputWithClearButton, InputWithClearButtonProps } from './InputWithClearButton';
import { InputRegular } from "./InputRegular";
import { InputWithIncreaseDecrease, InputWithIncreaseDecreaseProps } from "./InputWithIncreaseDecrease";
import { InputBaseProps } from "./InputBase";

type InputProps = InputBaseProps & {
  variant?: 'regular' | 'icon' | 'clear-button' | 'increment-decrement';
} & (InputWithIconProps
  & InputWithClearButtonProps
  & InputWithIncreaseDecreaseProps
  );
 
export const Input = (props: InputProps) => {
  const { variant } = props;
  switch (variant) {
    case 'regular': {
      return (
        <InputRegular {...props} />
      );
    }
    case 'icon': {
      return (
        <InputWithIcon {...props} />
      );
    }
    case 'clear-button':{
      return (
        <InputWithClearButton {...props} />
      );
    }
    case 'increment-decrement':{
      return (
        <InputWithIncreaseDecrease {...props} />
      );
    }
    default: {
      return (
        <InputRegular {...props} />
      );
    }
  }
}