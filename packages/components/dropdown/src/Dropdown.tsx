import React, { useState } from "react";
import styled from "@emotion/styled";
import { ColorPalette, font, sizes } from "@portfolio/css-util";
import { Button } from "@portfolio/button";
import { useOutsideClick } from "@portfolio/hooks";
import { GoThreeBars } from "react-icons/go";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownBox = styled.div`
  height: 650px;
  width: 400px;
  border-radius: 17px;
  display: block;
  justify-content: center;
  align-items: flex-start;
  border: grey solid 1px;
  z-index: 1;
`;

const Header = styled.div`
border-bottom: ${ColorPalette.black.black4} solid 1px;
border-top-right-radius: 17px;
border-top-left-radius: 17px;
height: 30%;
width: 100%;
background: ${ColorPalette.purple.purple5};
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
margin: auto;
`;

const Body = styled.div`
height: 50%;
width: 100%;
margin: auto;
background: ${ColorPalette.purple.purple5};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const MenuOptions = styled.div`
font-size: 20px;
margin-bottom: 24px;
height: 20%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const UserImageWrapper = styled.div`
margin: 10px 0px 10px;
font-size: 80px;
`;

const UserNameWrapper = styled.div`
font-size: 30px;
`;

export const ButtonWrapper = styled.div`
height: 20%;
width: 100%;
border-bottom-right-radius: 17px;
border-bottom-left-radius: 17px;
margin: auto;
background: ${ColorPalette.purple.purple5};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const StyledButton = styled(Button)`
width: 300px;
height: ${sizes.buttonLarge.height}px;
border: none;
background: ${ColorPalette.purple.purple5};
font-size: ${font.button.buttonLarge.fontSize}px;
font-weight: ${font.button.buttonLarge.fontWeight};
justify-content: center;
align-items: center;
`;


export type DropdownProps = {
  options: string[] | React.ReactNode[];
  onSelect: (optionIndex: number) => void;
  userName: string;
  userImage: React.ReactNode;
}

export const Dropdown = (props: DropdownProps) => {
  const { userImage, userName, options, onSelect } = props;
  const [status, setStatus] = useState(false);
  const toggleDropdownStatus = () => setStatus(!status);
  const resetDropdownStatus = () => setStatus(false);
  const outsideClickRef = useOutsideClick(resetDropdownStatus);
 
  return (
    <Wrapper ref={outsideClickRef}>
      <GoThreeBars onClick={toggleDropdownStatus} />
      {status && ( 
        <DropdownBox>
          <Header>
            <UserImageWrapper>
              {userImage}
            </UserImageWrapper>
            <UserNameWrapper>
              {userName}
            </UserNameWrapper>
          </Header>
          <Body>
            {options.map((option, i) => (
              <MenuOptions onClick={ () => { onSelect(i); } }>
                {option}
              </MenuOptions>
            ))}
          </Body>
          <ButtonWrapper>
            <StyledButton label={'Log out'} onClick={() => {}} />
          </ButtonWrapper>
        </DropdownBox>
      )}
    </Wrapper>
  ); 
};
