import React from 'react';
import styled from 'styled-components';
import circlesImg from '../../images/circles-background.jpg';
import sectionImg from '../../images/section-bg.png';
import MyInfo from './MyInfo';
import InfoTable from './InfoTable';
import CoolInfo from './CoolInfo';

const Section = styled.section`
  border-top: 1px solid #e4e4e4;
  background: url(${sectionImg}) no-repeat, url(${circlesImg}) repeat-y 50% 0;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'MyInfo StyledCoolInfo'
    'StyledInfoTable StyledInfoTable';
  color: #444;
`;

const StyledMyInfo = styled(MyInfo)`
  grid-area: MyInfo;
`;

const StyledCoolInfo = styled(CoolInfo)`
  grid-area: StyledCoolInfo;
`;

const StyledInfoTable = styled.div`
  grid-area: StyledInfoTable;
  justify-self: center;
`;

const About = ({ data }) => {
  return (
    <Section>
      <Wrapper>
        <StyledMyInfo myInfo={data.myInfo} />
        <StyledCoolInfo />
        <StyledInfoTable>
          <InfoTable />
        </StyledInfoTable>
      </Wrapper>
    </Section>
  );
};

export default About;
