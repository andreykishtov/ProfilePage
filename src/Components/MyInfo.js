import React from 'react';

const MyInfo = ({ myInfo }) => {
  return (
    <div>
      <h1>{myInfo.h1}</h1>
      <p>{myInfo.about}</p>
    </div>
  );
};

export default MyInfo;
