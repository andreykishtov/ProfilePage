import React from 'react';
import {
  Section,
  Wrapper,
  StyledMyInfo,
  StyledCoolInfo,
  StyledInfoTable
} from '../../StyledFiles/About.styled';

import InfoTable from './InfoTable';

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
