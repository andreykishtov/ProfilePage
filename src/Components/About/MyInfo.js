import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 4.1em;
  padding-top: 1.3em;
`;

const P = styled.p`
  width: 40%;
  font-size: 1.125em;
`;

const MyInfo = ({ myInfo }) => {
  return (
    <div>
      <H1>{myInfo.h1}</H1>
      <P>{myInfo.about}</P>
    </div>
  );
};

export default MyInfo;
