import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

type ProgressBarType = {
  totalSteps: number;
  currentStep: number;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 10px;
  width: 500px;
  border: 0.5px solid grey;
  border-radius: 6px;
  justify-content: space-around;
  align-items: center;
  padding: 2px;
`;

const Bar = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  border: 1px solid rgb(234, 218, 235);
  border-right: none;
  border-left: none;
  background: white;
  transition: all 500ms ease-out;
`;

const ColoredBar = styled(Bar)`
  background: rgb(86, 218, 245);
`;

const UncoloredBar = styled(Bar)`
  background: White;
`;


export const ProgressBar = (props: ProgressBarType) => {
  const { totalSteps, currentStep } = props;
  const coloredDiv = [...Array(currentStep).keys()]
  const uncoloredDiv = [...Array(totalSteps-currentStep).keys()]
  return (
  <Wrapper>
    {coloredDiv.map(() => 
      <>
        <ColoredBar></ColoredBar>
      </>
    )}
    {uncoloredDiv.map(() =>
      <UncoloredBar></UncoloredBar>
    )}
  </Wrapper>
  );
};
