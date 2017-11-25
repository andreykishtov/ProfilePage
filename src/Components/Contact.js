import React from 'react';
import styled from 'styled-components';
import contactImage from '../images/contacts-background.png';

const Section = styled.footer`
  border-top: 1px solid #e4e4e4;
  background: url(${contactImage}) 50% 0;
  background-attachment: fixed;
  background-position: center;
  height: 100vh;
  position: sticky;
`;

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  color: #444;
  text-align: center;
`;

const H2 = styled.h2`
  color: white;
  font-size: 4.1em;
  padding-top: 1.3em;
`;

const P = styled.div`
  color: white;
  padding-bottom: 10px;
`;

const Email = styled.a`
  cursor: pointer;
  padding: 0.3em 1em;
  font-size: 1.3em;
  background: #63a69f;
  text-decoration: none;
`;

const Skype = styled.a`
  cursor: pointer;
  padding: 0.3em 1em;
  font-size: 1.3em;
  background: blue;
  text-decoration: none;
`;

const Contact = () => {
  return (
    <Section>
      <Wrapper>
        <H2>Contact Me</H2>
        <P>I live In Israel And I am A junior Developer.</P>
        <P>
          <Email>asdasd</Email>
          <Skype>asdasdasd</Skype>
        </P>
      </Wrapper>
    </Section>
  );
};

export default Contact;
