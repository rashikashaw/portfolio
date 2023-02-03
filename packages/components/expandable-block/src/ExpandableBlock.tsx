import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { ColorPalette } from "@portfolio/css-util";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const HeaderWrapper = styled.div`
  height: 36px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 6px;
  margin-bottom: 2px;
  justify-content: center;
  cursor: pointer;
`;

const BodyWrapper = styled.div<{ isOpen: boolean }>`
  height: 100px;
  max-height: ${({ isOpen }) => isOpen ? '100px' : '0px'};
  border: ${({ isOpen }) => isOpen ? '1px' : '0px'} solid black;
  transition: max-height 200ms ease-in-out;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;
  overflow-y: scroll;
  transition: all 0.2s ease-in-out;
  justify-content: center;
  align-items: center;
  background-color: ${ColorPalette.purple.purple4};
`;

type ExpandableBlockProps = {
  header: React.ReactNode | string;
  body: React.ReactNode | string;
  close: boolean;
  className?: string;
  onToggle?: (status: boolean) => void;
};

export const ExpandableBlock = (props: ExpandableBlockProps) => {
  const { className, header, body, onToggle, close } = props;


  const [isOpen, setIsOpen] = useState(false);
  const onHeaderClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    onToggle && onToggle(isOpen)
  }, [isOpen]);

  useEffect(() => {
    if (close && isOpen) {
      setIsOpen(false);
    }
  }, [close]);

  return (
    <Wrapper className={className}>
      <HeaderWrapper onClick={onHeaderClick} >
        {header}
      </HeaderWrapper>
      <BodyWrapper isOpen={isOpen}>{body}</BodyWrapper> 
    </Wrapper>
  );
};
