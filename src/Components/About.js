import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  border-top: 1px solid #e4e4e4;
  background-color: white;
  background: url(../images/circles-background.jpg) repeat-y 50% 0;
`;

const Wrapper = styled.div`
  background: url(../images/section-bg.png) no-repeat 50% 0;
  width: 100vw;
  height: 100vh;
`;

const About = () => {
  return (
    <Section>
      <Wrapper />
    </Section>
  );
};

export default About;
