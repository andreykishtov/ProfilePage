import React from 'react';
import styled from 'styled-components';
import circlesImg from '../images/circles-background.jpg';
import sectionImg from '../images/section-bg.png';

const Section = styled.section`
  border-top: 1px solid #e4e4e4;
  background-color: white;
  background-image: ;
  background: url(${circlesImg}) repeat-y 50% 0;
`;

const Wrapper = styled.div`
  background: url(${sectionImg}) no-repeat 50% 0;
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
