import Blogs from "@components/Blogs";
import News from "@components/News";
import Overview from "@components/Overview";
import PricePredictor from "@components/PricePredictor";
import React, { useMemo, useState } from "react";
import { Tabs, utils } from "zebpay-ui";
import { TabItem } from "zebpay-ui/dist/cjs/components/Tabs/typings";

const TABS_LIST: TabItem[] = [
  {
    title: "OVERVIEW",
    tab: "OVERVIEW",
  },
  {
    title: "PRICE PREDICTOR",
    tab: "PRICE_PREDICTOR",
  },
  {
    title: "NEWS",
    tab: "NEWS",
  },
  {
    title: "BLOGS",
    tab: "BLOGS",
  },
];

const CoinProfiling = () => {
  const [selectedTab, setSelectedTab] = useState<string>(TABS_LIST[0].tab);

  const renderContent = useMemo(() => {
    switch (selectedTab) {
      case "OVERVIEW":
        return <Overview />;
      case "PRICE_PREDICTOR":
        return <PricePredictor />;
      case "NEWS":
        return <News />;
      case "BLOGS":
        return <Blogs />;
    }
  }, [selectedTab]);

  return (
    <div css={utils.p(20)}>
      <Tabs
        selectedTab={selectedTab}
        tabsList={TABS_LIST}
        onChange={(value) => setSelectedTab(value)}
        type={"primary"}
      />

      <div css={utils.mt(20)}>{renderContent}</div>
    </div>
  );
};

export default CoinProfiling;
