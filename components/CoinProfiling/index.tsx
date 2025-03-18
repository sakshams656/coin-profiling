import Header from "@components/Header";
import NewsPage from "@components/News";
import Overview from "@components/Overview";
import Blogs from "@components/Blogs";
import { main, headerWrapper } from "./styles"; 
import React, { useState } from "react";
import { Divider } from "zebpay-ui";

interface CoinProfilingProps {
  coinId: string;
}

const CoinProfiling: React.FC<CoinProfilingProps> = ({ coinId }) => {
  const [selectedTab, setSelectedTab] = useState<string>("overview");

  const renderTabContent = () => {
    switch (selectedTab) {
      case "overview":
        return <Overview coinId={coinId} />;
      case "pricePredictor":
        return <div>This is Tab 2</div>;
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
        <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} coinId={coinId} />
        <Divider color="#181837" spacing={0} />
      </div>
      {renderTabContent()}
    </div>
  );
};

export default CoinProfiling;






