import styled from '@emotion/styled';
import React from 'react';
import { Wrapper, InputBox, Icon, InputBaseProps } from './InputBase';

export type InputWithIconProps = InputBaseProps & {
  icon?: React.ReactNode;
};

const IconWrapper = styled(Icon)`
  left: 6px;
`;

const StyledInputBox = styled(InputBox)<InputWithIconProps>`
  padding-left: ${(p) => (p.icon ? '40' : '10')}px;
  padding-right: 10px;
  };
`;

export const InputWithIcon = (props: InputWithIconProps) => {
  const { icon, className } = props;
  return (
    <Wrapper className={className}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <StyledInputBox {...props} />
    </Wrapper>
  );
};
