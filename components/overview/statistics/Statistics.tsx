/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { utils, colors, Divider, Tooltip } from "zebpay-ui";
import AssetsImg from "@public/images";
import Image from "next/image";
import { dummyCoinData } from "../../../Data/DummyCoinData";
import styles from "./styles"
import ShimmerWrapper from "@components/Shared/ShimmerWrapper/ShimmerWrapper";
import { css } from "@emotion/react";

const Statistics: React.FC = () => {
  const [animationDone, setAnimationDone] = useState(false);
  const coinData = dummyCoinData;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimationDone(true);
    }, 1500);
  }, []);

    useEffect(() => {
          const timer = setTimeout(() => {
            setLoading(false);
          }, 2000);
          return () => clearTimeout(timer); 
        }, []);

  return (
    <div css={styles.statisticsContainer}>
      <ShimmerWrapper height={24} width={102} isLoading={loading}>
      <span css={styles.title}>Statistics</span>
      </ShimmerWrapper>

      {/* Upper Section */}
      <div css={styles.upperSection}>
          <div css={[styles.statsCard, styles.largeCard]}>
            <ShimmerWrapper height={24} width={300} isLoading={loading}>
              <div css={styles.statsTitle}>Performance (LTP - {coinData.performance.ltp})</div>
            </ShimmerWrapper>
            <ShimmerWrapper height={67} width={600} isLoading={loading}>
            <div>
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
                  css={[styles.bitcoinIconBase, styles.bitcoinIconAnimated]} 
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
            </ShimmerWrapper>
          </div>

          <div css={[styles.statsCard, styles.smallCard]}>
            <ShimmerWrapper height={42} width={42} isLoading={loading}>
              <div css={styles.statsInner}>
                <Image src={AssetsImg.ic_SL_new} alt={"Active Buyers"} width={20} height={20} />
              </div>
            </ShimmerWrapper>
            
            <ShimmerWrapper height={46} width={80} isLoading={loading}>
              <div css={styles.statsTitle}>Active Buyers</div>
              <div css={styles.statsValue}>{coinData.trading.activeBuyers}</div>
            </ShimmerWrapper>
          </div>

        
        <div css={[styles.statsCard, styles.smallCard]}>
          <ShimmerWrapper height={42} width={42} isLoading={loading}>
            <div css={styles.statsInner}>
              <Image src={AssetsImg.ic_TP_new} alt={"Active Sellers"} width={20} height={20} />
            </div>
          </ShimmerWrapper>

          <ShimmerWrapper height={46} width={80} isLoading={loading}>
            <div css={styles.statsTitle}>Active Sellers</div>
            <div css={styles.statsValue}>{coinData.trading.activeSellers}</div>
          </ShimmerWrapper>
        </div>
        
      </div>

      {/* Lower Section */}
      <div css={styles.lowerSection}>
        <div css={styles.statsRow}>
          <ShimmerWrapper  height={46} width={300} isLoading={loading} style={css({marginLeft: "1rem" ,marginTop: "1rem",marginBottom: "1rem"})}>
            <div css={styles.statsCard1}>
              <div css={styles.statsTitle}>
                Market Cap
                <Tooltip
                content={
                  <>
                    <div>
                      <div css={styles.coinInfoHoverContainer}>
                        <Image src={AssetsImg.ic_info_white} alt="info" height={16} width={16} />
                        <span css={styles.coinInfoSpan}>Market Cap</span>
                      </div>
                      <span>The total value of the asset traded in the last 24 hours.</span>
                    </div>
                  </>
                }
                position="bottom-start"
                isStroke
              >
                <Image src={AssetsImg.ic_info} alt="info" width={12} height={12}/>
              </Tooltip>
              </div>
              <div css={styles.statsValue}>{coinData.marketStats.marketCap}</div>
            </div>
          </ShimmerWrapper>

          <ShimmerWrapper  height={46} width={300} isLoading={loading} style={css({ marginTop: "1rem",marginBottom: "1rem"})}>
          <div css={styles.statsCard1}>
            <div css={styles.statsTitle}>
              Fully Diluted Market Cap
              <Tooltip
                content={
                  <>
                    <div>
                      <div css={styles.coinInfoHoverContainer}>
                        <Image src={AssetsImg.ic_info_white} alt="info" height={16} width={16} />
                        <span css={styles.coinInfoSpan}>Fully Diluted Market Cap</span>
                      </div>
                      <span>The total value of the asset traded in the last 24 hours.</span>
                    </div>
                  </>
                }
                position="bottom-start"
                isStroke
              >
                <Image src={AssetsImg.ic_info} alt="info" width={12} height={12}/>
              </Tooltip>
            </div>
            <div css={styles.statsValue}>{coinData.marketStats.fullyDilutedCap}</div>
          </div>
          </ShimmerWrapper>

          <ShimmerWrapper  height={46} width={300} isLoading={loading} style={css({ marginTop: "1rem",marginBottom: "1rem"})}>
          <div css={styles.statsCard1}>
            <div css={styles.statsTitle}>
              Volume 24H
              <Tooltip
                content={
                  <>
                    <div>
                      <div css={styles.coinInfoHoverContainer}>
                        <Image src={AssetsImg.ic_info_white} alt="info" height={16} width={16} />
                        <span css={styles.coinInfoSpan}>Volume 24H</span>
                      </div>
                      <span>The total value of the asset traded in the last 24 hours.</span>
                    </div>
                  </>
                }
                position="bottom-start"
                isStroke
              >
                <Image src={AssetsImg.ic_info} alt="info" width={12} height={12}/>
              </Tooltip>
            </div>
            <div css={styles.statsValue}>{coinData.marketStats.volume24h}</div>
          </div>
          </ShimmerWrapper>
        </div>

        {/* Divider */}
        <div css={{ padding: "0 1rem" }}>
          <Divider color={colors.Zeb_Solid_Dark_Grey} spacing={0} />
        </div>

        <div css={styles.statsRow}>
        <ShimmerWrapper height={46} width={300} isLoading={loading} style={css({marginLeft: "1rem", marginTop: "1rem",marginBottom: "1rem"})}>
          <div css={styles.statsCard1}>
            <div css={styles.statsTitle}>
              Max Supply
              <Tooltip
                content={
                  <>
                    <div>
                      <div css={styles.coinInfoHoverContainer}>
                        <Image src={AssetsImg.ic_info_white} alt="info" height={16} width={16} />
                        <span css={styles.coinInfoSpan}>Max Supply</span>
                      </div>
                      <span>The total value of the asset traded in the last 24 hours.</span>
                    </div>
                  </>
                }
                position="bottom-start"
                isStroke
              >
                <Image src={AssetsImg.ic_info} alt="info" width={12} height={12}/>
              </Tooltip>
            </div>
            <div css={styles.statsValue}>{coinData.marketStats.maxSupply}</div>
          </div>
        </ShimmerWrapper>

        <ShimmerWrapper height={46} width={300} isLoading={loading} style={css({ marginTop: "1rem",marginBottom: "1rem"})}>
          <div css={styles.statsCard1}>
            <div css={styles.statsTitle}>
              Total Coin Supply
              <Tooltip
                content={
                  <>
                    <div>
                      <div css={styles.coinInfoHoverContainer}>
                        <Image src={AssetsImg.ic_info_white} alt="info" height={16} width={16} />
                        <span css={styles.coinInfoSpan}>Total Coin supply</span>
                      </div>
                      <span>The total value of the asset traded in the last 24 hours.</span>
                    </div>
                  </>
                }
                position="bottom-start"
                isStroke
              >
                <Image src={AssetsImg.ic_info} alt="info" width={12} height={12}/>
              </Tooltip>
            </div>
            <div css={styles.statsValue}>{coinData.marketStats.totalSupply}</div>
          </div>
        </ShimmerWrapper>

        <ShimmerWrapper height={46} width={300} isLoading={loading} style={css({ marginTop: "1rem",marginBottom: "1rem"})}>
          <div css={styles.statsCard1}>
            <div css={styles.statsTitle}>
              Circulating Supply
              <Tooltip
                content={
                  <>
                    <div>
                      <div css={styles.coinInfoHoverContainer}>
                        <Image src={AssetsImg.ic_info_white} alt="info" height={16} width={16} />
                        <span css={styles.coinInfoSpan}>Ciculating Supply</span>
                      </div>
                      <span>The total value of the asset traded in the last 24 hours.</span>
                    </div>
                  </>
                }
                position="bottom-start"
                isStroke
              >
                <Image src={AssetsImg.ic_info} alt="info" width={12} height={12}/>
              </Tooltip>
            </div>
            <div css={styles.statsValue}>{coinData.marketStats.circulatingSupply}</div>
          </div>
        </ShimmerWrapper>
        </div>
      </div>
    </div>
  );
};

export default Statistics;