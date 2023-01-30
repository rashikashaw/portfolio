import React, { useState } from "react";
import styled from "@emotion/styled";
import { Tag } from "./Tag";
import { Button } from "@portfolio/button";
import { useOutsideClick } from "@portfolio/hooks";
import { ColorPalette } from "@portfolio/css-util";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled(Button)`
  height: 35px;
  width: 100px;
  position:relative;
  display: flex;
  align-items: center;
  margin-right: 4px;
  margin-bottom: 10px;
  &: hover {
    background-color: ${ColorPalette.purple.purple4};
  }
`;

const InputWrapper = styled.div` 
  height: 35px;
  width: 100px;
  position: absolute;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 4px;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputBox = styled.input`
  height: calc(100% - 2.3px) !important;
  width: calc(100% - 53px) !important;
  border-color: ${ColorPalette.purple.purple4};
  border-radius: 8px;
  transition-duration: 1s;
  padding-left: 10px;
  padding-right: 40px;
  &:hover {
    border-color: ${ColorPalette.purple.purple1};
  }
  &:focus {
    outline: none !important;
    border-color: ${ColorPalette.purple.purple1};
  }
`;

export type TagsProps =  {
  tags: string[];
  onTagAdd: (tag: string) => void;
  onTagDelete: (tagIndex: number) => void;
};

export const Tags = (props: TagsProps) => {
  const { tags, onTagAdd, onTagDelete } = props;
  const [inputValue, setInputvalues] = useState('');
  const [isShown, setIsShown] = useState(false);
  const onChangeHandler =(e: React.ChangeEvent<HTMLInputElement>) => {
    setInputvalues(e.target.value)
  };
  const handleClick = () => {
    setIsShown(!isShown);
  };
  const resetButtonStatus = () => setIsShown(false);
  const outsideClickRef = useOutsideClick(resetButtonStatus);

  const onEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.length > 0) {
      const target = e.target as HTMLInputElement;
      onTagAdd(target.value);
      setInputvalues('');
      setIsShown(false)
    }
    if (e.key === 'Enter' && inputValue.length === 0) {
      setIsShown(false)
    }
  };

  return (
    <Wrapper>
      <StyledButton label={'New Tag'} onClick={handleClick}/>
      { isShown &&
        <InputWrapper ref={outsideClickRef}>
          <InputBox onKeyDown={onEnterKey} onChange={onChangeHandler} value={inputValue} autoFocus />
        </InputWrapper>
      } 
      <TagsWrapper>
        {tags && tags.map((tag,i) => (
          <Tag key={i} tag={tag} onTagDelete={() => { onTagDelete(i); }} />
        ))}
      </TagsWrapper>
    </Wrapper>
  );
};
