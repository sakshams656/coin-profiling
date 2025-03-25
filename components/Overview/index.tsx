/** @jsxImportSource @emotion/react */
import Image from "next/image";
import * as styles from "./styles"; 
import { dummyCoinData ,real_data} from "../../Data/DummyCoinData";
import { Button, colors, Divider, Input, InputDropDown, Tabs, utils } from "zebpay-ui";
import Statistics from "./Statistics/Statistics";
import AssetsImg from "@public/images";
import CoinInfo from "./CoinInformation/CoinInfo";
import PerformanceGraph from "./Graph/PerformanceGraph";
import CryptoCategories from "./Categories/CryptoCategories";
import NOOB from "@constants/noob";
import ShimmerWrapper from "@components/Shared/ShimmerWrapper/ShimmerWrapper";
import { useEffect, useState } from "react";

interface InputTargetProps {
  value: string | number;
  name?: string;
}

const Overview = () => {
  const [loading, setLoading] = useState(true);
  const [amountInvested, setAmountInvested] = useState<string | number>("");
  const [investmentFrequency, setInvestmentFrequency] = useState<string>("");
  const [timePeriod, setTimePeriod] = useState<string>("6M");
  const [data,setData]=useState(dummyCoinData);
  const symbol="btc";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await real_data(symbol);
        setData(data);

      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };
    fetchData(); 
  }, []); 

  
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
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
    <div css={styles.container}>
      <div css={styles.coinBanner}>
        <ShimmerWrapper height={60} width={340} isLoading={loading} typeLightdDark>
          <div css={styles.coinInfo}>
            <Image src={AssetsImg.ic_btc_coin} alt="coin" width={56} height={56} />
            <div>
              <h3>{data?.name}</h3>
              <div css={styles.priceInfo}>
                <span>{data?.price}</span>
                <span css={styles.positiveChange}>{data?.change}</span>
                <span css={styles.tag}>{data?.rank}</span>
              </div>
            </div>
          </div>
        </ShimmerWrapper>

        <div css={styles.statsContainer}>
          {data?.stats.map((stat, index) => (
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
                //appendItem="INR"
                style={{marginBottom: utils.remConverter(16) }}
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

          <ShimmerWrapper height={106} width={280} isLoading={loading}>
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

          <ShimmerWrapper height={34} width={280} isLoading={loading} style={styles.buttonMarginTop}>
            <Button onClick={NOOB} size="full-width" type="primary">
              CALCULATE RETURNS
            </Button>
          </ShimmerWrapper>
        </div>
      </div>
    </div>
  );
};

export default Overview;