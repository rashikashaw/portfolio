import styled from '@emotion/styled';
import { Button } from 'button';
import { SidePanel, useSidePanel } from 'side-panel';
import React, { useState } from 'react';
import LoremIpsum from 'react-lorem-ipsum';

const Wrapper = styled.div`
  display: flex;
`;
const HeaderWrapper = styled.div`
  height: 32px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const HeaderText = styled.div`
  margin-left: 8px;
`;
type HeaderType = {};
const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderText>This is the header</HeaderText>
    </HeaderWrapper>
  );
};

const StyledButton = styled(Button)`
  background: #dedaf9;
  border: 1px solid;
  font-size: 16px;
  cursor: pointer;
  height: 50px;
  width: 100px;
`;
export const Default = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Wrapper>
      <StyledButton label="click" onClick={() => setDrawerOpen(!drawerOpen)} />
      {drawerOpen &&
        <SidePanel
          isOpen={drawerOpen}
          header={<Header />}
          body={<LoremIpsum />}
          close={() => setDrawerOpen(false)}
        />
      }
    </Wrapper>
  );
};
