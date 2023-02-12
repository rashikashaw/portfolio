import { Tab } from './Tab';
import styled from '@emotion/styled';
import { useState } from 'react';

const Wrapper = styled.div`
  height: 48px;
  display: flex;
  // margin-left: 20px;
  justify-content: center;
  align-items: center;
  // border: 2px solid rgb(153,153,153);
  border-radius: 20px;
`;

export type TabsProps = {
  options: string[];
  onTabClick?: (tabIndex: number) => void;
};

export const Tabs = ({ options, onTabClick }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const onTabClickLocal = (tabIndex: number) => {
    setSelectedTab(tabIndex);
    if (onTabClick) {
      onTabClick(tabIndex);
    }
  };
  return (
    <Wrapper>
      {options.map((item, i) => (
        <Tab
          key={item}
          label={item}
          selected={i === selectedTab}
          onTabClick={() => onTabClickLocal(i)}
        />
      ))}
    </Wrapper>
  );
};
