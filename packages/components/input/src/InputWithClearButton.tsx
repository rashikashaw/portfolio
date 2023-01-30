import React from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import styled from "@emotion/styled";
import { Wrapper, InputBox, InputBaseProps, Icon } from './InputBase';

const IconWrapper = styled(Icon)`
  cursor: pointer;
  right: 6px; 
`;

const InputBoxWrapper = styled(InputBox)`
  padding-right: 40px;
`;
export type InputWithClearButtonProps = InputBaseProps & {
  onCancel?: () => void;
}
export const InputWithClearButton = (props: InputWithClearButtonProps) => {
  const { 
    className,
    onCancel
  } = props;
  return (
    <Wrapper className={className}>
      <IconWrapper onClick={onCancel}>
        <AiOutlineCloseCircle />
      </IconWrapper>
      <InputBoxWrapper {...props} />
    </Wrapper>
  );
};
