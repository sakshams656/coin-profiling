import Header from "@components/Header/HeaderPage";
import NewsPage from "@components/News";
import Overview from "@components/Overview";


import Blogs from "@components/Blogs";
import { main, headerWrapper } from "./styles"; 

import React, { useState } from "react";
import { Divider } from "zebpay-ui";
import PricePredictor from "@components/PricePredictor";


interface CoinProfilingProps {
  coinSymbol: string;
}

const CoinProfiling: React.FC<CoinProfilingProps> = ({ coinSymbol }) => {
  const [selectedTab, setSelectedTab] = useState<string>("overview");

  const renderTabContent = () => {
    switch (selectedTab) {
      case "overview":
        return <Overview coinSymbol={coinSymbol} />; 
      case "pricePredictor":
        return <PricePredictor/>;
      case "news":
        return <NewsPage />;
      case "blogs":
        return <Blogs />;
      default:
        return <div>Invalid Tab</div>;
    }
  };

  return (
    <div css={main}>
      <div css={headerWrapper}>
        <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} coinSymbol={coinSymbol} /> 
        <Divider color="#181837" spacing={2} />
      </div>
      {renderTabContent()}
    </div>
  );
};

export default CoinProfiling;






