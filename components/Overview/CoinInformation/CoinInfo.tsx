import React, { useEffect, useState } from "react";
import AssetsImg from "@public/images";
import Image from "next/image";
import * as styles from "./styles";
import ShimmerWrapper from "@components/Shared/ShimmerWrapper/ShimmerWrapper";
import { css } from "@emotion/react";
import { tabContent } from "../../../Data/CoinInfoData";

const CoinInfo: React.FC = () => {
  const [activeTab, setActiveTab] = useState("How BTC works");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div css={styles.coinInfoContainer}>
      <ShimmerWrapper width={150} height={24} isLoading={loading}>
        <span css={styles.title}>Coin Information</span>
        <span css={styles.launchInfo}>Launched : Jan 2009</span>
      </ShimmerWrapper>
      
      <div css={styles.dataContainer}>
        <div css={styles.leftSidebar}>
          <ShimmerWrapper height={200} width={200} isLoading={loading}>
            <div>
              <button
                css={styles.getTabStyle(activeTab === "About BTC")}
                onClick={() => setActiveTab("About BTC")}
              >
                <Image src={AssetsImg.ic_document} alt="About BTC" width={16} height={16} />
                <span>About BTC</span>
              </button>
              <button
                css={styles.getTabStyle(activeTab === "How BTC works")}
                onClick={() => setActiveTab("How BTC works")}
              >
                <Image src={AssetsImg.ic_settings} alt="How BTC works" width={16} height={16} />
                <span>How BTC works</span>
              </button>
              <button
                css={styles.getTabStyle(activeTab === "How to buy BTC")}
                onClick={() => setActiveTab("How to buy BTC")}
              >
                <Image src={AssetsImg.ic_wallet} alt="How to buy BTC" width={16} height={16} />
                <span>How to buy BTC</span>
              </button>
              <button
                css={styles.getTabStyle(activeTab === "Why to buy BTC")}
                onClick={() => setActiveTab("Why to buy BTC")}
              >
                <Image src={AssetsImg.ic_shield} alt="Why to buy BTC" width={16} height={16} />
                <span>Why to buy BTC</span>
              </button>
            </div>
          </ShimmerWrapper>
        </div>
        
        <div css={styles.contentArea}>
          <ShimmerWrapper height={30} width={90} isLoading={loading} style={css({ marginLeft: "1rem", marginTop: "1rem" })}>
            <div css={styles.contentHeader}>
              {activeTab.replace("BTC", "").trim()}
            </div>
          </ShimmerWrapper>
          
          <div css={styles.contentBody}>
            <ShimmerWrapper height={250} width={700} isLoading={loading}>
              <p>{tabContent[activeTab]}</p>
            </ShimmerWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinInfo;