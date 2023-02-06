import React, { useState } from "react";
import { Tags } from "@portfolio/tags";
import styled from "@emotion/styled";


const Wrapper = styled.div`
  top: 10%;
  height: 100px;
  width: 500px;
`;
export const Default = () => {
  const [values, setValues] = useState<string[]>([]);
  const onTagAdd = (tag: string) => {
    if (!([...values].includes(tag)) ) {
      setValues([...values, tag]);
    }
  };
  const onTagDelete = (tagIndex: number) => {
    const newValues = [...values];
    newValues.splice(tagIndex, 1)
    setValues(newValues);
  }
  return (
    <Wrapper>
      <Tags tags={values} onTagDelete={onTagDelete} onTagAdd={onTagAdd} />
    </Wrapper>
  );
};
