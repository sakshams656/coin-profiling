"use client"
import React from 'react';
// import BTCPricePredictor from './images/iconImage.png';
import LoadingState from './components/page[1]';
import "zebpay-ui/dist/icons/icons.css";
import "../app/styles/fonts.css"; 


const Home: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Lato' }}>
      <LoadingState />
    </div>
  );
};

export default Home;
