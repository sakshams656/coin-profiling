import Image from "next/image";
import * as styles from "./styles";
import { dummyCoinData } from "../../Data/DummyCoinData";
import { Button, Divider, Input, InputDropDown, Tabs, utils } from "zebpay-ui";
import Statistics from "./Statistics/Statistics";
import AssetsImg from "@public/images";
import CoinInfo from "./CoinInformation/CoinInfo";
import PerformanceGraph from "./Graph/PerformanceGraph";
import CryptoCategories from "./Categories/CryptoCategories";
import NOOB from "@constants/noob";
import ShimmerWrapper from "@components/Shared/ShimmerWrapper/ShimmerWrapper";
import { useEffect, useState, useRef } from "react";
import { css } from "@emotion/react";

interface InputTargetProps {
  value: string | number;
  name?: string;
}

const Overview = () => {
  const [loading, setLoading] = useState(true);
  const [amountInvested, setAmountInvested] = useState<string | number>("");
  const [investmentFrequency, setInvestmentFrequency] = useState<string>("");
  const [timePeriod, setTimePeriod] = useState<string>("6M");
  const containerRef = useRef<HTMLDivElement>(null); // Add ref for the container

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        if (container.scrollTop > 0) {
          container.classList.add("scrolled");
        } else {
          container.classList.remove("scrolled");
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleAmountChange = (target: InputTargetProps) => {
    setAmountInvested(target.value);
  };

  const handleFrequencyChange = (value: string) => {
    setInvestmentFrequency(value);
  };

  const handleTimePeriodChange = (tab: string) => {
    setTimePeriod(tab);
  };

  return (
    <div css={styles.container} ref={containerRef}>
      <div css={styles.coinBanner}>
        <ShimmerWrapper height={60} width={340} isLoading={loading} typeLightdDark>
          <div css={styles.coinInfo}>
            <Image src={AssetsImg.ic_btc_coin} alt="coin" width={56} height={56} />
            <div>
              <h3>{dummyCoinData.name}</h3>
              <div css={styles.priceInfo}>
                <span>{dummyCoinData.price}</span>
                <span css={styles.positiveChange}>{dummyCoinData.change}</span>
                <span css={styles.tag}>{dummyCoinData.rank}</span>
              </div>
            </div>
          </div>
        </ShimmerWrapper>

        <div css={styles.statsContainer}>
          {dummyCoinData.stats.map((stat, index) => (
            <ShimmerWrapper height={70} width={166} isLoading={loading} typeLightdDark key={index}>
              <div css={styles.statCard}>
                <Image src={stat.icon} alt={stat.label} width={44} height={44} />
                <div css={styles.statInfo}>
                  <span>{stat.label}</span>
                  <span css={styles.statValue}>{stat.value}</span>
                </div>
              </div>
            </ShimmerWrapper>
          ))}
        </div>
      </div>

      <div css={styles.contentWrapper}>
        <div css={styles.leftContainer}>
          <PerformanceGraph />
          <Statistics />
          <CoinInfo />
          <CryptoCategories />
        </div>
        <div css={styles.rightContainer}>
          <div>
            <ShimmerWrapper height={24} width={150} isLoading={loading}>
              <div css={styles.returnsTitle}>Returns Calculator</div>
            </ShimmerWrapper>
            <div css={styles.formContainer}>
              <ShimmerWrapper height={40} width={245} isLoading={loading} style={styles.inputMarginBottom}>
                <Input
                  label="Amount Invested"
                  placeholder="Enter Amount"
                  type="number"
                  value={amountInvested}
                  onChange={handleAmountChange}
                  appendItem="INR"
                  style={css({ marginBottom: utils.remConverter(16) })}
                />
              </ShimmerWrapper>

              <ShimmerWrapper height={24} width={140} isLoading={loading} style={styles.labelMarginBottom}>
                <span css={styles.investmentFrequencyLabel}>Investment Frequency</span>
              </ShimmerWrapper>

              <ShimmerWrapper height={40} width={245} isLoading={loading} style={styles.labelMarginBottom}>
                <InputDropDown
                  placeholder="Select Frequency"
                  options={[
                    { label: "Daily", value: "Daily" },
                    { label: "Weekly", value: "Weekly" },
                    { label: "Monthly", value: "Monthly" },
                    { label: "Yearly", value: "Yearly" },
                  ]}
                  selected={investmentFrequency}
                  onChange={handleFrequencyChange}
                  rowHeight={40}
                  maxRows={4}
                  enableSearch={false}
                  search={{ placeholder: "", value: "", onChange: () => {} }}
                  style={styles.dropdownMargin}
                />
              </ShimmerWrapper>

              <div css={{ marginTop: utils.remConverter(16) }}>
                <ShimmerWrapper height={24} width={140} isLoading={loading} style={styles.labelMarginBottom}>
                  <span css={styles.overThePastLabel}>Over the Past</span>
                </ShimmerWrapper>

                <ShimmerWrapper height={26} width={245} isLoading={loading}>
                  <Tabs
                    onChange={handleTimePeriodChange}
                    selectedTab={timePeriod}
                    tabsList={[
                      { tab: "6M", title: <>6M</> },
                      { tab: "1Y", title: "1Y" },
                      { tab: "2Y", title: "2Y" },
                      { tab: "3Y", title: "3Y" },
                    ]}
                    type="secondary"
                    style={styles.tabsMargin}
                  />
                </ShimmerWrapper>
              </div>
            </div>

            <ShimmerWrapper height={106} width={280} isLoading={loading} style={styles.labelMarginBottom}>
              <div css={styles.investmentBox}>
                <div css={styles.investmentBoxContent}>
                  <Image src={AssetsImg.ic_investmentIcon} alt="Investment Icon" width={63} height={63} />
                  <div>
                    <p css={styles.IBlabel}>Current Value</p>
                    <p css={styles.IBvalue}>₹0.00</p>
                  </div>
                  <div css={styles.percentageBox}>- 0.00%</div>
                </div>
                <Divider spacing={2} />
                <p css={styles.investedAmountText}>
                  Invested Amount: <span css={styles.investedAmountValue}>₹0.00</span>
                </p>
              </div>
            </ShimmerWrapper>
          </div>
          <div css={styles.returnsButton}>
            <ShimmerWrapper height={34} width={280} isLoading={loading}>
              <Button onClick={NOOB} size="full-width" type="primary">
                CALCULATE RETURNS
              </Button>
            </ShimmerWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;