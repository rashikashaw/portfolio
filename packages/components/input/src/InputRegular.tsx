import { Wrapper, InputBox, InputBaseProps } from './InputBase';

export const InputRegular = (props: InputBaseProps) => {
  const { className } = props;
  return (
    <Wrapper className={className}>
      <InputBox {...props} />
    </Wrapper>
  );
};
