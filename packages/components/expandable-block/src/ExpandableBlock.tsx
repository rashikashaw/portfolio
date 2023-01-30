import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { ColorPalette } from "@portfolio/css-util";

const Wrapper = styled.div`
  display: flex:
`;

const HeaderWrapper = styled.div`
  height: 36px;
  width: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 6px;
  margin-bottom: 2px;
  justify-content: center;
  padding-left: 20px;
  cursor: pointer;
`;

const BodyWrapper = styled.div`
  height: 100px;
  width: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 6px;
  margin-bottom: 10px;
  overflow: hidden;
  overflow-y: scroll;
  transition: max-height 1s ease-in-out;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${ColorPalette.purple.purple4};
`;

type ExpandableBlockProps = {
  header: React.ReactNode | string;
  body: React.ReactNode | string;
  close: boolean;
  onToggle?: (status: boolean) => void;
};

export const ExpandableBlock = (props: ExpandableBlockProps) => {
  const { header, body, onToggle, close } = props;


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
    <Wrapper>
      <HeaderWrapper onClick={onHeaderClick} >
        {header}
      </HeaderWrapper>
      { isOpen &&
        <BodyWrapper>{body}</BodyWrapper> 
      }
    </Wrapper>
  );
};
