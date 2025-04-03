import React from 'react';
import "../../styles/shared/global.ts";
import Header from './HeaderPage/index.jsx';
import NOOB from '@constants/noob.js';

const HeaderPage = () => {
  return (
      <Header selectedTab={''} setSelectedTab={NOOB} coinSymbol={''} />
  );
};

export default HeaderPage;
