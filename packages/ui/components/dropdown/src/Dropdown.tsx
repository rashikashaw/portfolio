import { PropsWithChildren, useState, ReactNode } from 'react';
import styled from '@emotion/styled';
import { useOutsideClick } from 'hooks';

type DropdownOption = string | ReactNode;
export type DropdownProps = {
  options: DropdownOption[];
  onSelect: (optionIndex: number) => void;
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownBox = styled.div<{ status: boolean; options: DropdownProps['options'] }>`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 1;
  padding: 4px;
  padding-left: 8px;
  padding-right: 8px;
  overflow: hidden;
  border: 1px solid rgb(0, 0, 0, 0.1);
  height: ${({ status, options }) => (status ? `${options.length * 32 + 10}px` : '0px')};
  ${({ status }) =>
    status
      ? ''
      : `
    padding: 0px;
    border: 0px;
  `}
  transition: all 0.2s 0s ease;
`;

const OptionWrapper = styled.div<{ status: boolean }>`
  min-width: 96px;
  min-height: 32px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  justify-content: flex-start;
  align-items: center;
  transition: background 0.5s ease;
  &:hover {
    background: rgb(0, 0, 0, 0.05);
  }
`;

export const Dropdown = (props: PropsWithChildren<DropdownProps>) => {
  const { options, onSelect, children } = props;
  const [status, setStatus] = useState(false);
  const toggleDropdownStatus = () => setStatus(!status);
  const resetDropdownStatus = () => setStatus(false);
  const outsideClickRef = useOutsideClick(resetDropdownStatus);

  return (
    <Wrapper ref={outsideClickRef}>
      <div onClick={toggleDropdownStatus}>{children}</div>
      <DropdownBox status={status} options={options}>
        {options.map((option, i) => (
          <OptionWrapper status={status} key={i}>
            {typeof option !== 'string' ? option : <div>{option}</div>}
          </OptionWrapper>
        ))}
      </DropdownBox>
    </Wrapper>
  );
};
