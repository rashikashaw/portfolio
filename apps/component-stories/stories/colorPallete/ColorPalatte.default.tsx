import React from "react";
import styled from "@emotion/styled";
import { ColorPalette } from "@portfolio/css-util";

const Wrapper = styled.div`
  align-items: flex-start;
  padding: 20px;
  flex-direction: row;
  display: flex;
`;
const Color = styled.div`
  width: 72px;
  height: 32px;
  background: ${p => p.color};
  margin-left: 32px;
`;
const ColorItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;
const ColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 32px;
`;
const ColorTitle = styled.div`
  margin-bottom: 24px;
  font-weight: 600;
`;
export const ColorPalatte = () => {
  return (
    <Wrapper>
      <ColorWrapper>
        <ColorTitle>Purple</ColorTitle>
        {
          Object.keys(ColorPalette.purple).map(colorName => (
            <ColorItem>
              <div>{`${colorName}: `}</div>
              <Color color={ColorPalette.purple[colorName]} />
            </ColorItem>
          ))
        }
      </ColorWrapper>
      <ColorWrapper>
        <ColorTitle>Black</ColorTitle>
        {
          Object.keys(ColorPalette.black).map(colorName => (
            <ColorItem>
              <div>{`${colorName}: `}</div>
              <Color color={ColorPalette.black[colorName]} />
            </ColorItem>
          ))
        }
      </ColorWrapper>
    </Wrapper>
  );
};