import { Button } from 'button';
import { ProgressBar } from 'progress-bar';
import { useState } from 'react';
import styled from '@emotion/styled';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  width: 500px;
  border-radius: 4px;
  justify-content: space-around;
  align-items: center;
  padding: 2px;
`;


const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;
const IconWrapper = styled.div`
  position: relative;
  z-index: 1
`;

export const Default = () => {
  const items = ['👻', '💁🏽‍♀️', '🚀', '👩🏽‍💻', '🖥', '📞'];
  const [currentStep, setCurrentStep] = useState(1);

  const increase = () => {
    if (currentStep === items.length) {
      return setCurrentStep(items.length)
    }
    setCurrentStep(currentStep + 1)
  }
  const decrease = () => {
    if (currentStep <= 1) {
      return setCurrentStep(1)
    }
    setCurrentStep(currentStep - 1)
  }

  const [currentStep1, setCurrentStep1] = useState(1);
  const totalSteps = 6;
  const increase1 = () => {
    if (currentStep1 === totalSteps) {
      return setCurrentStep1(items.length)
    }
    setCurrentStep1(currentStep1 + 1)
  }
  const decrease1 = () => {
    if (currentStep1 <= 1) {
      return setCurrentStep1(1)
    }
    setCurrentStep1(currentStep1 - 1)
  }
  return (
    <Wrapper>
      <ProgressBarWrapper>
        <BarWrapper>
          <ItemsWrapper>
            {items.map((item, i) => (
              <ItemWrapper onClick={() => setCurrentStep(i+1)}>
                {item}
              </ItemWrapper>
            ))}
          </ItemsWrapper>
          <ProgressBar currentStep={currentStep} totalSteps={6} />
        </BarWrapper>
        <ButtonWrapper>
          <Button onClick={decrease} label='Previous' />
          <Button onClick={increase} label='Next' />
        </ButtonWrapper>
      </ProgressBarWrapper>
      <ProgressBarWrapper>
        <BarWrapper>
          <ProgressBar currentStep={currentStep1} totalSteps={totalSteps} />
        </BarWrapper>
        <ButtonWrapper>
          <Button onClick={decrease1} label='Previous' />
          <Button onClick={increase1} label='Next' />
        </ButtonWrapper>
      </ProgressBarWrapper>
    </Wrapper>
  );
};
