/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css, keyframes } from "@emotion/react";
import { utils, colors, Divider, Tooltip } from "zebpay-ui";

/* 🔵 Container */
const statisticsContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: ${colors.Zeb_Solid_Dark_Blue};
  border-radius: 0.5rem;
  width: 100%;
  box-shadow: 0rem 0.25rem 0.5rem 0rem rgba(0, 0, 0, 0.1);

  @media (max-width: 48rem) {
    padding: 1rem;
    gap: 0.75rem;
  }
`;

const title = css`
  font-size: ${utils.remConverter(18)};
  font-weight: 700;
  color: ${colors.Zeb_Solid_White};
  margin-bottom: 1rem;
`;

/* 🔹 Upper Section */
const upperSection = css`
  display: flex;
  gap: 1rem;
  width: 100%;

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;

const largeCard = css`
  flex: 0 0 66.8%;
`;

const smallCard = css`
  flex: 0 0 15%;
`;

/* 🔵 Lower Section */
const lowerSection = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  background: ${colors.Zeb_Solid_BG_Blue};
  border-radius: 0.5rem;
`;

const statsRow = css`
  display: flex;
  gap: 1rem;
  width: 100%;

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;

const statsCard = css`
  padding: 1rem;
  background: ${colors.Zeb_Solid_BG_Blue};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
`;

const statsCard1 = css`
  flex: 1;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
`;

const statsTitle = css`
  color: ${colors.Zeb_Solid_White};
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const statsSubRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

const statsLabel = css`
  color: ${colors.Zeb_Solid_Light_Blue};
  font-size: 0.75rem;
  font-weight: 400;
`;

const statsValue = css`
  color: ${colors.Zeb_Solid_White};
  font-size: 1rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/* 🚀 Bitcoin Animation */
const moveBitcoin = keyframes`
  from {
    left: 0%;
  }
  to {
    left: 70%;
  }
`;

const bitcoinIconBase = css`
  position: absolute;
  bottom: -80%;
  width: 1.5rem;
  height: 1.5rem;
  transform: translateX(-50%);
`;

const bitcoinIconAnimated = css`
  animation: ${moveBitcoin} 1.5s ease-in-out forwards;
`;

const statsProgress = css`
  width: 100%;
  height: 0.5rem;
  background: ${colors.Zeb_Solid_BG_Blue};
  border-radius: 0.25rem;
  position: relative;
`;

const progressBar = css`
  height: 100%;
  width: 100%;
  background: ${colors.Zeb_Solid_Bright_Blue};
  border-radius: 0.25rem;
`;

/* 🟢 Icons */
const statsIcon = css`
  width: 1.25rem;
  height: 1.25rem;
`;

const infoIcon = css`
  width: 0.75rem;
  height: 0.75rem;
  opacity: 0.7;
`;

/* 🔥 Component */
const Statistics: React.FC = () => {
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimationDone(true);
    }, 1500);
  }, []);

  return (
    <div css={statisticsContainer}>
      <span css={title}>Statistics</span>

      {/* Upper Section */}
      <div css={upperSection}>
        <div css={[statsCard, largeCard]}>
          <div css={statsTitle}>Performance (LTP - ₹51,18,683.57)</div>
          <div css={statsSubRow}>
            <div css={statsLabel}>24H Low</div>
            <div css={statsLabel}>24H High</div>
          </div>
          <div css={statsProgress}>
            <div css={progressBar}></div>
            <img
              src="/icons/btc_coin.svg"
              alt="Bitcoin"
              css={[bitcoinIconBase, animationDone ? { left: "70%" } : bitcoinIconAnimated]}
            />
          </div>
          <div css={statsSubRow}>
            <div css={statsValue} style={{ color: colors.Zeb_Solid_Red }}>₹48,64,887.52</div>
            <div css={statsValue} style={{ color: colors.Zeb_Solid_Green_02 }}>₹51,18,683.57</div>
          </div>
        </div>

        <div css={[statsCard, smallCard]}>
            <div css={{backgroundColor: colors.Zeb_Solid_Dark_Blue, padding: "0.75rem", borderRadius: "0.5rem", width: "max-content"}}>
                <img src="/icons/SL-new.png" alt="Green Arrow Down" css={statsIcon} />
            </div>
          <div css={statsTitle}>Active Buyers</div>
          <div css={statsValue}>77%</div>
        </div>

        <div css={[statsCard, smallCard]}>
            <div css={{backgroundColor: colors.Zeb_Solid_Dark_Blue, padding: "0.75rem", borderRadius: "0.5rem", width: "max-content"}}>
            <img src="/icons/TP-new.png" alt="Red Arrow Up" css={statsIcon} />
            </div>
          <div css={statsTitle}>Active Sellers</div>
          <div css={statsValue}>23%</div>
        </div>
      </div>

      {/* Lower Section */}
      <div css={lowerSection}>
        <div css={statsRow}>
          <div css={statsCard1}>
            <div css={statsTitle}>
              Market Cap
              <Tooltip content="The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market.
                    Market cap = Current price x Circulating supply" position="bottom-start" isStroke>
                <img src="/icons/infoicon/info@3x.png" alt="Info" css={infoIcon} />
              </Tooltip>
            </div>
            <div css={statsValue}>₹99,849,937,003,394.05</div>
          </div>

          <div css={statsCard1}>
            <div css={statsTitle}>
              Fully Diluted Market Cap
              <Tooltip content="The value of the asset assuming all possible coins are in circulation." position="bottom-start" isStroke>
                <img src="/icons/infoicon/info@3x.png" alt="Info" css={infoIcon} />
              </Tooltip>
            </div>
            <div css={statsValue}>₹106,349,404,921,298.88</div>
          </div>

          <div css={statsCard1}>
            <div css={statsTitle}>
              Volume 24H
              <Tooltip content="The total value of the asset traded in the last 24 hours." position="bottom-start" isStroke>
                <img src="/icons/infoicon/info@3x.png" alt="Info" css={infoIcon} />
              </Tooltip>
            </div>
            <div css={statsValue}>₹3,081,127,262,578.43</div>
          </div>
        </div>

        {/* Divider */}
        <div css={{ padding: "0 1rem" }}>
          <Divider color={colors.Zeb_Solid_Dark_Grey} spacing={0} />
        </div>

        <div css={statsRow}>
          <div css={statsCard1}>
            <div css={statsTitle}>
              Max Supply
              <Tooltip content="The maximum number of coins that will ever exist." position="bottom-start" isStroke>
                <img src="/icons/infoicon/info@3x.png" alt="info" css={infoIcon} />
              </Tooltip>
            </div>
            <div css={statsValue}>21,000,000 BTC</div>
          </div>

          <div css={statsCard1}>
            <div css={statsTitle}>
              Total Coin Supply
              <Tooltip content="The total number of coins mined so far." position="bottom-start" isStroke>
                <img src="/icons/infoicon/info@3x.png" alt="Info" css={infoIcon} />
              </Tooltip>
            </div>
            <div css={statsValue}>19,716,600 BTC</div>
          </div>

          <div css={statsCard1}>
            <div css={statsTitle}>
              Circulating Supply
              <Tooltip content="The number of coins currently available in the market." position="bottom-start" isStroke>
                <img src="/icons/infoicon/info@3x.png" alt="Info" css={infoIcon} />
              </Tooltip>
            </div>
            <div css={statsValue}>19,716,600 BTC</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

