import styled from '@emotion/styled';

type TabProps = {
  label: string;
  selected: boolean;
  onTabClick: () => void;
};

const Wrapper = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 72px;
  cursor: pointer;
`;
const Label = styled.div`
  font-weight: 400;
`;
const StyledHR = styled.hr<{ selected: boolean }>`
  margin-top: 4px;
  margin-bottom: 0px;
  width: ${({ selected }) => (selected ? '65px' : '0px')};
  color: rgb(22, 119, 255);
  border: ${({ selected }) => (selected ? '2px solid rgb(22, 119, 255)' : '2px solid transparent')};
  border-radius: 5px;
  transition: width 0.5s ease;
`;
export const Tab = ({ label, onTabClick, selected }: TabProps) => {
  return (
    <Wrapper onClick={onTabClick} selected={selected}>
      <Label>{label}</Label>
      <StyledHR selected={selected} />
    </Wrapper>
  );
};
