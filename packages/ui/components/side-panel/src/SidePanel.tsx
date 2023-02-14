import styled from '@emotion/styled';
import { useOutsideClick } from 'hooks';
import { RiCloseFill } from 'react-icons/ri';

type SidePanelProps = {
  header: React.ReactNode;
  body: React.ReactNode;
  isOpen?: boolean;
  close: () => void;
};

const DrawerWrapper = styled.div<{ isOpen: SidePanelProps['isOpen'] }>`
  top: 0;
  right: 0;
  height: 100%;
  max-width: ${(p) => (p.isOpen ? '300px' : '0px')};
  transition: max-width 1s;
  display: block;
  padding: 16px;
  background: linear-gradient(#e66465, #9198e5);
  z-index: 2;
  position: absolute;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 72px;
  justify-content: flex-start;
  align-items: center;
  color: white;
`;
const IconWrapper = styled(RiCloseFill)`
  position: absolute;
  right: 16px;
  height: 42px;
  width; 42px;
  fill: white;
`;

export const SidePanel = (props: SidePanelProps) => {
  const { header, body, close, isOpen } = props;
  const ref = useOutsideClick(close);
  return (
    <DrawerWrapper isOpen={isOpen} ref={ref}>
      <HeaderWrapper>
        <IconWrapper width={32} height={32} onClick={close} />
        {header}
      </HeaderWrapper>
      {body}
    </DrawerWrapper>
  );
};
