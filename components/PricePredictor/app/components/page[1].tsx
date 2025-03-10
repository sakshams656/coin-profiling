import React, { useState } from "react";
import { fetchHistoricalData } from "../actions/fetchHistoricalData";
import "chart.js/auto";
import CryptoSelector from "../../CryptoSelector";
import { Toast ,Shimmer,Button} from "zebpay-ui";
import iconImage from "../images/iconImage.png";
import Image from "next/image";
import predict from "../images/calculator.svg";
import InvestmentAmount from "../../InvestAmount";
import TimeFrame from "../../Timeframe";
import Table from "../../Table";
import NoTable from "../../NoTable";
import {
  Main,
  Graph,
  PredictionCards,
  InnerWrapper,
  Heading,
  FieldRow,
  Cryptoselect,
  ButtonWrapper,
  Component15,
  Rightsidecards,
  Breakdown,
  CurrentValue,
  Roww,
  Coll,
  Headercontent,
  Headercontent1,
  Up,
  Down,
  Chart,
} from "../styles/emotionStyles";
import PriceChart from "../../Pricechart/PriceChart";

const BTCPricePredictor: React.FC = () => {
  const [historicalData, setHistoricalData] = useState<Array<number[]>>([]);
  const [investmentAmount, setInvestmentAmount] = useState<number | null>(null);
  const [timeframe, setTimeframe] = useState<string>("");
  const [crypto, setCrypto] = useState<string>("bitcoin");
  const [loading, setLoading] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [loader, setLoader] = useState(false);

  const isPredictButtonEnabled =
    investmentAmount !== null && investmentAmount > 0 && timeframe !== "";

  const fetchData = async () => {
    setLoading(true);
    const data = await fetchHistoricalData(crypto, timeframe);
    setHistoricalData(reduceDataPoints(data));
    setTimeout(()=>{
    setLoading(false);
    setLoader(false);},3000)
  };

  const handlePredictClick = () => {
    if (!isPredictButtonEnabled) return;
    setLoader(true);
    setTimeout(() => {
      fetchData();
      setShowTable(true);
      setLoader(false);
    }, 3000);
  };

  const reduceDataPoints = (data: Array<number[]>) => {
    const reductionFactor = Math.ceil(data.length / 2);
    return data.filter((_, index) => index % reductionFactor === 0);
  };

  return (
    <Main>
      <Graph>
        <PredictionCards>
          <Heading>
            {loading ? (
              <Shimmer height={30} width={250} mode="dark" />
            ) : (
              <>
                <Image src={predict.src} width={20} height={20} alt="image" />
                <h3>Predict BTC Price</h3>
              </>
            )}
          </Heading>
          <Cryptoselect>
            {loading ? (
              <Shimmer style={{"margin-bottom":"10px"}}  height={20} width={80} />
            ) : (
              <div style={{ paddingBottom: 6 }}>Crypto</div>
            )}
            {loading ? (
              <Shimmer  height={40} width={960} />
            ) : (
              <CryptoSelector loader={loader} crypto={crypto} setCrypto={setCrypto} />
            )}
          </Cryptoselect>
          <FieldRow>
            <InvestmentAmount
              loading={loading}
              loader={loader}
              investmentAmount={investmentAmount} 
              setInvestmentAmount={setInvestmentAmount}
            />
            <TimeFrame
              loading={loading}
              loader={loader}
              setTimeframe={setTimeframe}
            />
          </FieldRow>
          <ButtonWrapper>
            {loading ? (
              <Shimmer  height={40} width={960} />
            ) : (
              <Button
                onClick={handlePredictClick}
                size="full-width"
                type="primary"
                disabled={!isPredictButtonEnabled}
                loading={loader}
                style={{ height: "42px", width: "100%" }}
              >
                Predict {crypto} Future Price
              </Button>
            )}
          </ButtonWrapper>
        </PredictionCards>
        <Component15>
          {loading ? (
            <Shimmer  height={240} width={1000} />
          ) : (
            <Chart>
              <PriceChart showFutureData={showTable} />
            </Chart>
          )}
        </Component15>
      </Graph>
      <Rightsidecards>
        <Breakdown>
            <CurrentValue>
              <InnerWrapper>
                <Roww>
                  {loading?<Shimmer  height={68} width={68} typeLightdDark/>: <img
                    src={iconImage.src}
                    alt="Icon"
                    style={{
                      width: "4.5rem",
                      height: "4.5rem",
                      alignSelf: "end",
                    }}
                  />}
                  <Coll>
                    {loading?<Shimmer style={{"margin-left":"10px"}} height={25} width={210} typeLightdDark/>:<Up>
                      <Headercontent>Current Value</Headercontent>
                      <Headercontent1>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.58 0.63L2.14 3.09a.5.5 0 0 0 .71.71L4.45 2.09v6.95a.5.5 0 1 0 1 0V2.05l1.68 1.69a.5.5 0 1 0 .71-.71L5.24 0.63a.5.5 0 0 0-.66 0Z"
                            fill="white"
                          />
                        </svg>
                        100.31%
                      </Headercontent1>
                    </Up>}
                    {loading?<Shimmer style={{"margin-left":"10px"}} height={25} width={210} typeLightdDark/>:<Down>₹88,11,06,349.88</Down>}
                  </Coll>
                </Roww>
              </InnerWrapper>
            </CurrentValue>

          {!showTable ? <NoTable /> : <Table loading={loading} />}
          {loading ? (
            <Shimmer  height={120} width={320} />
          ) : (
            <Toast
              description="All price predictions are based on research model and is in continuous development. ZebPay does not hold responsible for any price prediction accuracy and is purely based for research purposes."
              style={{
                background: "#F9C85C29",
                // width: "100%",
              }}
              title=" Warning"
              type="info"
            />
          )}
        </Breakdown>
      </Rightsidecards>
    </Main>
  );
};

export default BTCPricePredictor;
