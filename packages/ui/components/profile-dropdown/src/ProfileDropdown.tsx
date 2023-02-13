import React from 'react';
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

export const ProfileDropdown = () => {
  
  return (
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
  )
}
