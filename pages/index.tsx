import Blogs from "@components/Blogs";
import Header from "@components/Header/Header";
import NewsPage from "@components/News";
import Overview from "@components/Overview";
import { main } from "@styles/index";
import React, { useState } from "react";
import { Divider } from "zebpay-ui";
import PricePredictor from "@components/PricePredictor"
export default function Home() {
  const [selectedTab, setSelectedTab] = useState<string>("overview");
  const renderTabContent = () => {
    switch (selectedTab) {
      case "overview":
        return <Overview />;
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
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Divider
        color="#181837"
        spacing={0}
      />
      {renderTabContent()}
    </div>
  );
}











