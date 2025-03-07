import Header from "@components/Header/Header";
import NewsPage from "@components/News";
import Overview from "@components/Overview";
import Blogs from "@components/Blogs"
import { main } from "./style";
// import { main } from "@styles/styles";
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
        return <Blogs/>;
      default:
        return <div>Invalid Tab</div>;
    }
  };
  return (
    <div css={main}>
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Divider
        color="#181837"
        spacing={0}
      />
      {renderTabContent()}
    </div>
  );
}
export default CoinProfiling;






