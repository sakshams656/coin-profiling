"use client"
import React from 'react';
import LoadingState from './app/components/page[1]';
import "zebpay-ui/dist/icons/icons.css";


const Home: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Lato' }}>
      <LoadingState />
    </div>
  );
};

export default Home;
