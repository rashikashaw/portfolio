import React, { useState } from "react";
import { Tags } from "@portfolio/tags";

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
    <Tags tags={values} onTagDelete={onTagDelete} onTagAdd={onTagAdd} />
  );
};
