import React from "react";
import "../../styles/shared/global.ts";
import HeaderPage from "./HeaderPage";

interface HeaderProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  coinSymbol: string;
}

const Header: React.FC<HeaderProps> = ({ selectedTab, setSelectedTab, coinSymbol }) => {
  return <HeaderPage selectedTab={selectedTab} setSelectedTab={setSelectedTab} coinSymbol={coinSymbol} />;
};

export default Header;
