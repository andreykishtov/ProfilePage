import React from 'react';

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
  Strong
} from '../StyledFiles/main.styled';

const Main = () => {
  const data = {
    name: {
      first: `Andrey`,
      last: `Kishtov`
    },
    mainText: {
      header: `Hi,`,
      message: `I’m an Israeli web developer. I create #usable, #responsive interface design, that is nice to look at
      and easy to use.`
    },
    topRight: { text: `UX designer, front-end developer and code lover` },
    mainMenu: [
      { text: ['learn more', 'about me'], color: 'blue' },
      { text: ['look at', 'my works'], color: 'red' },
      { text: ['contact', 'me'], color: 'green' }
    ]
  };
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
            <Li key={item.text}>
              <A color={item.color}>{item.text.map(arrItem => <div>{arrItem}</div>)}</A>
            </Li>
          ))}
        </Ul>
      </MainMenu>
    </Wrapper>
  );
};

export default Main;
