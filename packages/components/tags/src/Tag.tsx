import styled from '@emotion/styled';
import { GrFormClose } from 'react-icons/gr';
import { TextOverFlow } from '@portfolio/text-overflow';

const TagWrapper = styled.div`
  height: 20px;
  width: 100px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(0, 0, 0, 0.4);
  border-radius: 8px;
  justify-content: center;
  align-items: flex-start;
  background-color: rgb(0, 0, 0, 0.04);
  position: relative;
  padding: 6px;
  margin-right: 4px;
  margin-left: 4px;
  &:hover {
    border-color: #1677ff;
    color: #1677ff;
  }
`;

const StyledTextOverFlow = styled(TextOverFlow)`
  height: 0px;
  width: 0px;
  border: none;
`;

const IconWrapper = styled.div`
  svg {
    height: 20px;
    width: 20px;
  }
  cursor: pointer;
  right: 6px;
  position: absolute;
  display: flex;
  align-items: center;
  top: 50%;
  box-sizing: border-box;
  transform: translateY(-50%);
`;

export type TagProp = {
  tag: string;
  onTagDelete: () => void;
};

export const Tag = (props: TagProp) => {
  const { tag, onTagDelete } = props;
  return (
    <TagWrapper>
      <StyledTextOverFlow text={tag} length={7} />
      <IconWrapper onClick={onTagDelete}>
        <GrFormClose />
      </IconWrapper>
    </TagWrapper>
  );
};
