import React, { useState, useEffect } from "react";
import { Tabs, Tags, utils } from "zebpay-ui";
import Image from "next/image";
import * as styles from "./styles";
import ShimmerWrapper from "@components/Shared/ShimmerWrapper/ShimmerWrapper"; 
import { css } from "@emotion/react";
import { cryptoData } from "../../../Data/CoinCategoriesData";
import AssetsImg from "@public/images";

const CryptoCategories: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("TRENDING");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div css={styles.cryptoCategoriesContainer}>
      <ShimmerWrapper isLoading={loading} height={28} width={200} mode="dark" style={css({ marginBottom: "1rem" })}>
        <span css={styles.title}>Other Categories</span>
      </ShimmerWrapper>
      <ShimmerWrapper isLoading={loading} height={28} width={800} mode="dark" style={css({ marginBottom: "1rem" })}>
        <div css={styles.categoryButtons}>
          <Tabs
            onChange={(tab) => setActiveCategory(tab)}
            selectedTab={activeCategory}
            tabsList={[
              { tab: "TRENDING", title: <>TRENDING</> },
              { tab: "WATCHLIST", title: "WATCHLIST" },
              { tab: "TOP GAINERS", title: "TOP GAINERS" },
              { tab: "TOP LOSERS", title: "TOP LOSERS" },
            ]}
            type="secondary"
          />
        </div>
      </ShimmerWrapper>
      <div css={styles.cryptoCardsContainer}>
        {cryptoData.map((crypto, index) => (
          <ShimmerWrapper key={index} isLoading={loading} height={120} width={300} mode="dark">
            <div css={styles.cryptoCard}>
              <div css={{ display: "flex", justifyContent: "space-between" }}>
                <div css={{ display: "flex", flexDirection: "column" }}>
                  <ShimmerWrapper isLoading={loading} height={20} width={80} mode="dark">
                    <span css={{ fontSize: utils.remConverter(16), fontWeight: 700 }}>{crypto.name}</span>
                  </ShimmerWrapper>
                  <ShimmerWrapper isLoading={loading} height={16} width={150} mode="dark">
                    <span css={styles.cryptoName}>{crypto.fullName}</span>
                  </ShimmerWrapper>
                </div>
                <ShimmerWrapper isLoading={loading} height={40} width={40} mode="dark">
                  <Image src={crypto.icon} alt={crypto.name} width={40} height={40} />
                </ShimmerWrapper>
              </div>
              <div css={{ display: "flex", justifyContent: "space-between", marginTop: utils.remConverter(16) }}>
                <div css={{ display: "flex", flexDirection: "column" }}>
                  <ShimmerWrapper isLoading={loading} height={20} width={200} mode="dark">
                    <span css={styles.cryptoPrice}>{crypto.price}</span>
                  </ShimmerWrapper>
                  <ShimmerWrapper isLoading={loading} height={20} width={100} mode="dark">
                    <span css={[styles.cryptoChange, crypto.isPositive ? "positive" : "negative"]}>
                      <Tags
                        size="medium"
                        style={{
                          name: "1pzk433",
                          styles: "width:100px",
                        }}
                        type="success"
                      >
                        {crypto.isPositive ? "↑" : "↓"} {Math.abs(crypto.change)}
                      </Tags>
                    </span>
                  </ShimmerWrapper>
                </div>
                <ShimmerWrapper isLoading={loading} height={20} width={40} mode="dark">
                  <button css={styles.viewMoreButton}>
                    <Image src={AssetsImg.ic_arrow_right} alt="arrow right" width={18} height={18} />
                  </button>
                </ShimmerWrapper>
              </div>
            </div>
          </ShimmerWrapper>
        ))}
      </div>
    </div>
  );
};

export default CryptoCategories;