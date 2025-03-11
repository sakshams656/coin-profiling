"use client"
import React from 'react';
import LoadingState from './Homepage';
import "zebpay-ui/dist/icons/icons.css";


const Home: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Lato' }}>
      <LoadingState />
    </div>
  );
};

export default Home;
