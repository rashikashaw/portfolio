/* eslint-disable no-magic-numbers */
import styled from '@emotion/styled';
import { Button } from '@portfolio/button';
import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

export const IconLabel = () => (
  <>
    {'Submit'}
    <IoIosArrowForward />
  </>
);

const RegularButton = styled(Button)`
  width: 120px;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  width: 1000px;
  justify-content: space-around;
`;

export const Default = () => {
  const [isLoading, setisLoading] = useState(false);
  const onLoadingButtonClick = () => {
    setisLoading(true);
  };
  if (isLoading) {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }
  return (
    <RowWrapper>
      <Button label="Danger" variant="danger" onClick={() => {}} />
      <Button label={<IconLabel />} variant="primary" onClick={() => {}} />
      <RegularButton
        label="Click me to load"
        variant="regular"
        isButtonLoading={isLoading}
        onClick={onLoadingButtonClick}
      />
    </RowWrapper>
  );
};
