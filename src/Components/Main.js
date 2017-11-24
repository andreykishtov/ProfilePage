import React from 'react';
import {
  Wrapper,
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
  Strong,
  I,
  ContentWrapper
} from '../StyledFiles/main.styled';

const Main = ({ mainData }) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TopLeft>
          <FirstName>{mainData.name.first}</FirstName>
          <LastName>{mainData.name.last}</LastName>
        </TopLeft>
        <TopRight>{mainData.topRight.text}</TopRight>
        <Hr />
        <MainText>
          <Strong>{mainData.mainText.header}</Strong>
          <span>{mainData.mainText.message}</span>
        </MainText>
        <MainMenu>
          <Ul>
            {mainData.mainMenu.map(item => (
              <Li key={item.text} left={item.left}>
                <A color={item.color}>
                  {item.text.map(arrItem => <div>{arrItem}</div>)}
                  <I className="fa fa-chevron-down" aria-hidden="true" />
                </A>
              </Li>
            ))}
          </Ul>
        </MainMenu>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Main;
