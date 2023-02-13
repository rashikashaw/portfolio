import React from "react";
import { Wrapper, InputBox, Icon, InputBaseProps } from './InputBase'; 
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import styled from "@emotion/styled";

const LeftIconWrapper = styled(Icon)`
  cursor: pointer;
  left: 6px; 
`;

const RightIconWrapper = styled(Icon)`
  cursor: pointer;
  right: 6px; 
`;

const InputBoxWrapper = styled(InputBox)`
  padding-right: 135px;
  padding-left: 135px;
`;

export type InputWithIncreaseDecreaseProps = InputBaseProps & {
  onDecrease?: () => void;
  onIncrease?: () => void;
}
export const InputWithIncreaseDecrease = (props: InputWithIncreaseDecreaseProps) => {
  const { className, onDecrease, onIncrease } = props;
  return (
    <Wrapper className={className}>
      <LeftIconWrapper onClick={onDecrease}>
        <IoMdArrowDropdown />
      </LeftIconWrapper>
      <RightIconWrapper onClick={onIncrease}>
        <IoMdArrowDropup />
      </RightIconWrapper>
      <InputBoxWrapper {...props} />
    </Wrapper>
  );
};
