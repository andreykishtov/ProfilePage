import React from 'react';
import styled from 'styled-components';

import {
  Section,
  Wrapper,
  StyledMyInfo,
  StyledCoolInfo,
  StyledInfoTable
} from '../../StyledFiles/About.styled';

import crank from '../../images/crank.png';

import InfoTable from './InfoTable';

const Image = styled.img`
  width: 50px;
  height: 50px;
  animation: rotation 6s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(${props => props.from + 'deg'});
    }
    to {
      transform: rotate(${props => props.to +'deg'});
    }
  }
`;

const About = ({ data }) => {
  return (
    <Section>
      <Wrapper>
        <StyledMyInfo myInfo={data.myInfo} />
        <div>
          <Image from={'0'} to={'360'} src={crank} />
          <Image from={'0'} to={'100'} src={crank} />
          <Image from={'360'} to={'0'} src={crank} />
          <Image from={'0'} to={'360'} src={crank} />
          <Image from={'360'} to={'0'} src={crank} />
        </div>
        {/* <StyledCoolInfo /> */}
        <StyledInfoTable>{/* <InfoTable /> */}</StyledInfoTable>
      </Wrapper>
    </Section>
  );
};

export default About;
