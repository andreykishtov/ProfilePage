import React from 'react';
import styled from 'styled-components';
import circlesImg from '../images/circles-background.jpg';
import sectionImg from '../images/section-bg.png';
import MyInfo from './MyInfo';

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
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'MyInfo CoolInfo'
    'InfoTable InfoTable';
  background-color: #fff;
  color: #444;
`;

const StyledMyInfo = styled(MyInfo)`
  grid-area: MyInfo;
`;

const CoolInfo = styled.div`
  grid-area: CoolInfo;
`;

const InfoTable = styled.div`
  grid-area: InfoTable;
`;

const About = ({ data }) => {
  return (
    <Section>
      <Wrapper>
        <StyledMyInfo myInfo={data.myInfo} />
        <CoolInfo />
        <InfoTable />
      </Wrapper>
    </Section>
  );
};

export default About;
