import React from 'react';
import data from '../Data/main.json';
import {
  Wrapper,
  Logo,
  TopLeft,
  FirstName,
  LastName,
  TopRight,
  Hr,
  MainText,
  MainMenu,
  Li,
  Ul,
  A,
  Span,
  Strong,
  I
} from '../StyledFiles/main.styled';

const Main = () => {
  return (
    <Wrapper>
      <TopLeft>
        <FirstName>{data.name.first}</FirstName>
        <LastName>{data.name.last}</LastName>
      </TopLeft>
      <TopRight>{data.topRight.text}</TopRight>
      <Hr />
      <MainText>
        <Strong>{data.mainText.header}</Strong>
        <span>{data.mainText.message}</span>
      </MainText>
      <MainMenu>
        <Ul>
          {data.mainMenu.map(item => (
            <Li key={item.text} left={item.left}>
              <A color={item.color}>
                {item.text.map(arrItem => <div>{arrItem}</div>)}
                <I className="fa fa-chevron-down" aria-hidden="true" />
              </A>
            </Li>
          ))}
        </Ul>
      </MainMenu>
    </Wrapper>
  );
};

export default Main;
