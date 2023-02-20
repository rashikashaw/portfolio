import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { Tags } from 'tags';
import styled from '@emotion/styled';
const Wrapper = styled.div `
  top: 10%;
  height: 100px;
  width: 500px;
`;
export const Default = () => {
    const [values, setValues] = useState([]);
    const onTagAdd = (tag) => {
        if (![...values].includes(tag)) {
            setValues([...values, tag]);
        }
    };
    const onTagDelete = (tagIndex) => {
        const newValues = [...values];
        newValues.splice(tagIndex, 1);
        setValues(newValues);
    };
    return (_jsx(Wrapper, { children: _jsx(Tags, { tags: values, onTagDelete: onTagDelete, onTagAdd: onTagAdd }) }));
};
