import React from 'react';
import styled from 'styled-components';
import circlesImg from '../images/circles-background.jpg';
import sectionImg from '../images/section-bg.png';
import Work from './Work';

const Section = styled.section`
  border-top: 1px solid #e4e4e4;
  background: url(${sectionImg}) no-repeat, url(${circlesImg}) repeat-y 50% 0;
`;

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  color: #444;
`;

const H2 = styled.h2`
  font-size: 4.1em;
  padding-top: 1.3em;
`;

const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyWork = () => {
  return (
    <Section>
      <Wrapper>
        <H2>My Best Works</H2>
        <WorkWrapper>
          {Array(3)
            .fill(null)
            .map(() => <Work />)}
        </WorkWrapper>
      </Wrapper>
    </Section>
  );
};

export default MyWork;
