import React, { useState } from "react";
import styled from "@emotion/styled";
import { Tag } from "./Tag";
import { useOutsideClick } from "@portfolio/hooks";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Newtag = styled.div`
  height: 35px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(0, 0, 0, 0.4);
  border-radius: 8px;
  background-color: white;
  &:hover {
    border-color: #1677FF;
    color: #1677FF;
  }
`;

const InputWrapper = styled.div` 
  height: 35px;
  width: 100px;
  display: flex;
  align-items: center;
`;

const InputBox = styled.input`
  height: 100%;
  width: 100%;
  transition-duration: 1s;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid rgb(0, 0, 0, 0.4);
  border-radius: 8px;
  &:hover {
    border-color: #1677FF;
  }
  &:focus {
    outline: none !important;
    border-color: #1677FF;
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
        {tags && tags.map((tag,i) => (
          <Tag key={i} tag={tag} onTagDelete={() => { onTagDelete(i); }} />
        ))}
      {!isShown &&
      <Newtag onClick={handleClick}>New Tag</Newtag>
      }   
      { isShown &&
        <InputWrapper ref={outsideClickRef}>
          <InputBox onKeyDown={onEnterKey} onChange={onChangeHandler} value={inputValue} autoFocus />
        </InputWrapper>
      } 
    </Wrapper>
  );
};
