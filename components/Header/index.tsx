import React from 'react';
import "../../styles/shared/global.ts";
import Header from './HeaderPage/index.jsx';

const Blogs = () => {
  return (
      <Header selectedTab={''} setSelectedTab={function (tab: string): void {
      throw new Error('Function not implemented.');
    } } coinSymbol={''} />
  );
};

export default Blogs;
