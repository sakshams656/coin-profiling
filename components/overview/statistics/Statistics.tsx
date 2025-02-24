/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { utils, colors, Divider, Tooltip } from "zebpay-ui";
import AssetsImg from "@public/images";
import Image from "next/image";
import { dummyCoinData } from "../../../Data/DummyCoinData";
import styles from "./styles";

/* 🔥 Component */
const Statistics: React.FC = () => {
  const [animationDone, setAnimationDone] = useState(false);
  const coinData = dummyCoinData;

  useEffect(() => {
    setTimeout(() => {
      setAnimationDone(true);
    }, 1500);
  }, []);

  return (
    <div css={styles.statisticsContainer}>
      <span css={styles.title}>Statistics</span>

      {/* Upper Section */}
      <div css={styles.upperSection}>
        <div css={[styles.statsCard, styles.largeCard]}>
          <div css={styles.statsTitle}>Performance (LTP - {coinData.performance.ltp})</div>
          <div css={styles.statsSubRow}>
            <div css={styles.statsLabel}>24H Low</div>
            <div css={styles.statsLabel}>24H High</div>
          </div>
          <div css={styles.statsProgress}>
            <div css={styles.progressBar}></div>
            <Image
              src={AssetsImg.ic_btc_coin}
              alt={coinData.name}
              width={24}
              height={24}
              css={[styles.bitcoinIconBase, styles.bitcoinIconAnimated]} // Apply animation
            />
          </div>
          <div css={styles.statsSubRow}>
            <div css={styles.statsValue} style={{ color: colors.Zeb_Solid_Red }}>
              {coinData.performance.low24h}
            </div>
            <div css={styles.statsValue} style={{ color: colors.Zeb_Solid_Green }}>
              {coinData.performance.high24h}
            </div>
          </div>
        </div>

        <div css={[styles.statsCard, styles.smallCard]}>
          <div css={{ backgroundColor: colors.Zeb_Solid_Dark_Blue, padding: "0.625rem", borderRadius: "0.5rem", width: utils.remConverter(42), height: utils.remConverter(42) }}>
            <Image src={AssetsImg.ic_SL_new} alt={"Active Buyers"} width={20} height={20} />
          </div>
          <div css={styles.statsTitle}>Active Buyers</div>
          <div css={styles.statsValue}>{coinData.trading.activeBuyers}</div>
        </div>

        <div css={[styles.statsCard, styles.smallCard]}>
          <div css={{ backgroundColor: colors.Zeb_Solid_Dark_Blue, padding: "0.75rem", borderRadius: "0.5rem", width: utils.remConverter(42), height: utils.remConverter(42) }}>
            <Image src={AssetsImg.ic_TP_new} alt={"Active Sellers"} width={20} height={20} />
          </div>
          <div css={styles.statsTitle}>Active Sellers</div>
          <div css={styles.statsValue}>{coinData.trading.activeSellers}</div>
        </div>
      </div>

      {/* Lower Section */}
      <div css={styles.lowerSection}>
        <div css={styles.statsRow}>
          <div css={styles.statsCard1}>
            <div css={styles.statsTitle}>
              Market Cap
              <Tooltip
                content="The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market. Market cap = Current price x Circulating supply"
                position="bottom-start"
                isStroke
              >
                <Image src={AssetsImg.ic_info} alt="info" width={12} height={12}/>
              </Tooltip>
            </div>
            <div css={styles.statsValue}>{coinData.marketStats.marketCap}</div>
          </div>

          <div css={styles.statsCard1}>
            <div css={styles.statsTitle}>
              Fully Diluted Market Cap
              <Tooltip content="The value of the asset assuming all possible coins are in circulation." position="bottom-start" isStroke>
              <Image src={AssetsImg.ic_info} alt="info" width={12} height={12}/>
              </Tooltip>
            </div>
            <div css={styles.statsValue}>{coinData.marketStats.fullyDilutedCap}</div>
          </div>

          <div css={styles.statsCard1}>
            <div css={styles.statsTitle}>
              Volume 24H
              <Tooltip content="The total value of the asset traded in the last 24 hours." position="bottom-start" isStroke>
              <Image src={AssetsImg.ic_info} alt="info" width={12} height={12}/>
              </Tooltip>
            </div>
            <div css={styles.statsValue}>{coinData.marketStats.volume24h}</div>
          </div>
        </div>

        {/* Divider */}
        <div css={{ padding: "0 1rem" }}>
          <Divider color={colors.Zeb_Solid_Dark_Grey} spacing={0} />
        </div>

        <div css={styles.statsRow}>
          <div css={styles.statsCard1}>
            <div css={styles.statsTitle}>
              Max Supply
              <Tooltip content="The maximum number of coins that will ever exist." position="bottom-start" isStroke>
                <Image src={AssetsImg.ic_info} alt="info" width={12} height={12}/>
              </Tooltip>
            </div>
            <div css={styles.statsValue}>{coinData.marketStats.maxSupply}</div>
          </div>

          <div css={styles.statsCard1}>
            <div css={styles.statsTitle}>
              Total Coin Supply
              <Tooltip content="The total number of coins mined so far." position="bottom-start" isStroke>
              <Image src={AssetsImg.ic_info} alt="info" width={12} height={12}/>
              </Tooltip>
            </div>
            <div css={styles.statsValue}>{coinData.marketStats.totalSupply}</div>
          </div>

          <div css={styles.statsCard1}>
            <div css={styles.statsTitle}>
              Circulating Supply
              <Tooltip content="The number of coins currently available in the market." position="bottom-start" isStroke>
              <Image src={AssetsImg.ic_info} alt="info" width={12} height={12}/>
              </Tooltip>
            </div>
            <div css={styles.statsValue}>{coinData.marketStats.circulatingSupply}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;