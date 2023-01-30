import React from "react";
import styled from "@emotion/styled";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ColorPalette } from "@portfolio/css-util";
import { TextOverFlow } from "@portfolio/text-overflow";

const TagWrapper = styled.div`
  height: 20px;
  width: 100px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${ColorPalette.purple.purple2};
  border-radius: 8px;
  justify-content: center;
  align-items: flex-start;
  position:relative;
  padding: 6px;
  margin-right: 4px;
  margin-left: 4px;
`;

const StyledTextOverFlow = styled(TextOverFlow)`
  height: 0px;
  width: 0px;
  border: none;
`;

const IconWrapper = styled.div`
  svg {
    height: 20px;
    width: 20px;
  }
  cursor: pointer;
  right: 6px; 
  position: absolute;  
  display: flex;
  align-items: center;
  top: 50%;
  box-sizing:border-box;
  transform: translateY(-50%);
`;

export type TagProp = {
  tag: string;
  onTagDelete: () => void;
};

export const Tag = (props: TagProp) => {
  const { tag, onTagDelete } = props;
  return (
    <TagWrapper>
      <StyledTextOverFlow text={tag} length={7} />
      <IconWrapper onClick={onTagDelete}>
        <AiOutlineCloseCircle />
      </IconWrapper>
    </TagWrapper>
  );
};
