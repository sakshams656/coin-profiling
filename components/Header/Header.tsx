/** @jsxImportSource @emotion/react */
import { Button, Tabs, utils } from "zebpay-ui";
import { css } from "@emotion/react";
import { useState } from "react";
import { header, headerButton, tabs } from "./styles";

interface HeaderProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const Header = ({ selectedTab, setSelectedTab }: HeaderProps) => {
  return (
    <div css={header}>
      <div css={tabs}>
        <Tabs
          dropdownPlaceHolder="Select a Tab"
          hideTick
          loadingParam={{ height: 26, width: 220 }}
          onChange={(tab: string) => setSelectedTab(tab)}
          selectedTab={selectedTab}
          tabsCount={4}
          tabsList={[
            { tab: "overview", title: "OVERVIEW" },
            { tab: "pricePredictor", title: "PRICE PREDICTOR" },
            { tab: "news", title: "NEWS" },
            { tab: "blogs", title: "BLOGS" },
          ]}
          theme="dark"
          type="primary"
        />
      </div>
      <div css={headerButton}>
        <Button
          onClick={function noRefCheck() {}}
          size="medium"
          type="primary"
        >
          TRADE COIN_NAME
        </Button>
      </div>
    </div>
  );
};

export default Header;
