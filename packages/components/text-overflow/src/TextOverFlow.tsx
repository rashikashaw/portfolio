import styled from "@emotion/styled";
import React from "react";
import { Tooltip } from 'antd';

const Wrapper = styled.div`
  height: 20px;
  width: 100px;
  display: flex;
  flex-direction: column;
  padding: 4px;
`;

const TextWrapper = styled.div`
  &:hover {
    cursor: pointer;
    border-color: blue;
  }
`;

export type TextOverFlowProps = {
  length: number;
  text: string;
  children?: React.ReactNode;
}

export const TextOverFlow = (props: TextOverFlowProps) => {
  const { length, text} = props;
  return (
    <Wrapper>
      {
        text.length > length ?
        <TextWrapper>
          <Tooltip title={text}>      
            {text.slice(0, length)}{'...'} 
          </Tooltip>
        </TextWrapper> :
        <TextWrapper>
          {text}
        </TextWrapper>
      }
    </Wrapper>
  )
}