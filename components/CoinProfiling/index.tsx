import Header from "@components/Header";
import NewsPage from "@components/News";
import Overview from "@components/Overview";
import Blogs from "@components/Blogs"
import { main, headerWrapper } from "./styles";
import React, { useState } from "react";
import { Divider } from "zebpay-ui";

const CoinProfiling = () => {
  const [selectedTab, setSelectedTab] = useState<string>("overview");
  const renderTabContent = () => {
    switch (selectedTab) {
      case "overview":
        return <Overview />;
      case "pricePredictor":
        return <div>This is Tab 2</div>;
      case "news":
        return <NewsPage/>;
      case "blogs":
        return <div>You're viewing Tab 4</div>;
      default:
        return <div>Invalid Tab</div>;
    }
  };
  return (
    <div css={main}>
      <div css={headerWrapper}>
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Divider
        color="#181837"
        spacing={0}
      />
      </div>
      {renderTabContent()}
    </div>
  );
}
export default CoinProfiling;






