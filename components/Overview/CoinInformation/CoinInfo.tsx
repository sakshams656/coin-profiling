import React, { useEffect, useState } from "react";
import AssetsImg from "@public/images";
import Image from "next/image";
import * as styles from "./styles";
import ShimmerWrapper from "@components/Shared/ShimmerWrapper/ShimmerWrapper";
import { css } from "@emotion/react";
import { tabContent } from "../../../Data/CoinInfoData";

interface CoinInfoProps {
  launchDate: string | null;
  description: string;
  symbol: string;
}

const CoinInfo: React.FC<CoinInfoProps> = ({ launchDate, description, symbol }) => {
  const tabs = {
    about: `About ${symbol}`,
    howWorks: `How ${symbol} works`,
    howToBuy: `How to buy ${symbol}`,
    whyToBuy: `Why to buy ${symbol}`,
  };

  const [activeTab, setActiveTab] = useState(tabs.about); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setActiveTab(tabs.about);
  }, [symbol]); 

  const getContentKey = (tab: string) => {
    if (tab === tabs.about) return "About BTC";
    return tab.replace(symbol, "BTC");
  };

  return (
    <div css={styles.coinInfoContainer}>
      <ShimmerWrapper width={150} height={24} isLoading={loading}>
        <span css={styles.title}>Coin Information</span>
        {launchDate && <span css={styles.launchInfo}>{launchDate}</span>}
      </ShimmerWrapper>

      <div css={styles.dataContainer}>
        <div css={styles.leftSidebar}>
          <ShimmerWrapper height={200} width={200} isLoading={loading}>
            <div>
              <button
                css={styles.getTabStyle(activeTab === tabs.about)}
                onClick={() => setActiveTab(tabs.about)}
              >
                <Image src={AssetsImg.ic_document} alt={tabs.about} width={16} height={16} />
                <span>{tabs.about}</span>
              </button>
              <button
                css={styles.getTabStyle(activeTab === tabs.howWorks)}
                onClick={() => setActiveTab(tabs.howWorks)}
              >
                <Image src={AssetsImg.ic_settings} alt={tabs.howWorks} width={16} height={16} />
                <span>{tabs.howWorks}</span>
              </button>
              <button
                css={styles.getTabStyle(activeTab === tabs.howToBuy)}
                onClick={() => setActiveTab(tabs.howToBuy)}
              >
                <Image src={AssetsImg.ic_wallet} alt={tabs.howToBuy} width={16} height={16} />
                <span>{tabs.howToBuy}</span>
              </button>
              <button
                css={styles.getTabStyle(activeTab === tabs.whyToBuy)}
                onClick={() => setActiveTab(tabs.whyToBuy)}
              >
                <Image src={AssetsImg.ic_shield} alt={tabs.whyToBuy} width={16} height={16} />
                <span>{tabs.whyToBuy}</span>
              </button>
            </div>
          </ShimmerWrapper>
        </div>

        <div css={styles.contentArea}>
          <ShimmerWrapper
            height={30}
            width={90}
            isLoading={loading}
            style={css({ marginLeft: "1rem", marginTop: "1rem" })}
          >
            <div css={styles.contentHeader}>{activeTab}</div>
          </ShimmerWrapper>

          <div css={styles.contentBody}>
            <ShimmerWrapper height={250} width={700} isLoading={loading}>
              {activeTab === tabs.about ? (
                <p>{description}</p>
              ) : (
                <p>{tabContent[getContentKey(activeTab)] || "Content not available"}</p>
              )}
            </ShimmerWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinInfo;