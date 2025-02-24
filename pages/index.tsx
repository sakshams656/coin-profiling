import CoinProfiling from "@components/CoinProfiling";
import Header from "@components/Header/Header";
import NewsPage from "@components/News";
import Overview from "@components/overview";
import { main } from "@styles/styles";
import React, { useState } from "react";
import { Divider } from "zebpay-ui";

export default function Home() {
  // Set default selectedTab to "overview" to make it the default tab
  const [selectedTab, setSelectedTab] = useState<string>("overview");

  // Tab content to render based on the selected tab
  const renderTabContent = () => {
    switch (selectedTab) {
      case "overview":
        return <Overview />;
      case "pricePredictor":
        return <div>This is Tab 2</div>;
      case "news":
        return <NewsPage />;
      case "blogs":
        return <div>You're viewing Tab 4</div>;
      default:
        return <div>Invalid Tab</div>;
    }
  };

  return (
    <div css={main}>
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Divider
        color="#181837"
        spacing={-2}
        style={{
          margin: 0,
          padding: 0,
          width: "100%", // Ensures full width of the screen
        }}
      />
      {/* Render the tab content based on the selected tab */}
      {renderTabContent()}
    </div>
  );
}

