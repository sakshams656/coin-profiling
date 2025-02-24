/** @jsxImportSource @emotion/react */
import Image from "next/image";
import { 
  container, 
  coinBanner, 
  coinInfo, 
  statsContainer, 
  statCard, 
  priceInfo, 
  tag, 
  positiveChange, 
  statInfo, 
  statValue, 
  contentWrapper, 
  leftContainer, 
  rightContainer, 
  returnsTitle,
  formContainer,
  pastButton,
  investmentBox,
  IBlabel,
  IBvalue,
  percentageBox,
} from "./styles";
import { dummyCoinData } from "../../Data/DummyCoinData";
import { Button, colors, Divider, Input, InputDropDown, utils } from "zebpay-ui";
import Statistics from "./statistics/Statistics";
import AssetsImg from "@public/images";

const Overview = () => {
  return (
    <div css={container}>
      {/* Coin Banner */}
      <div css={coinBanner}>
        <div css={coinInfo}>
          <Image src={AssetsImg.ic_btc_coin} alt="coin" width={56} height={56} />
          <div>
            <h3>{dummyCoinData.name}</h3>
            <div css={priceInfo}>
              <span>{dummyCoinData.price}</span>
              <span css={positiveChange}>{dummyCoinData.change}</span>
              <span css={tag}>{dummyCoinData.rank}</span>
            </div>
          </div>
        </div>

        <div css={statsContainer}>
          {dummyCoinData.stats.map((stat, index) => (
            <div css={statCard} key={index}>
              <Image src={stat.icon} alt={stat.label} width={44} height={44} />
              <div css={statInfo}>
                <span>{stat.label}</span>
                <span css={statValue}>{stat.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Below Coin Banner - Two Columns */}
      <div css={contentWrapper}>
        <div css={leftContainer}>
          <Statistics/>
        </div>
        <div css={rightContainer}>
          <div css={returnsTitle}>
            Returns Calculator
          </div>
          <div css={formContainer}>
            {/* Amount Invested Input */}
              <Input
                  label="Amount Invested"
                  onBlur={() => {}}
                  onChange={() => {}}
                  onFocus={() => {}}
                  onKeyDown={() => {}}
                  onPaste={() => {}}
                  onWheel={() => {}}
                  placeholder="Enter Amount"
                  type="number"
                  value={undefined} 
                  style={{
                    'margin-bottom': "1rem"
                  }}
              />

              <span css={{ fontSize: utils.remConverter(14), color: colors.Zeb_Solid_Light_Blue}}>Investment Frequency</span>

            {/* Coin Selection Dropdown */}
              <InputDropDown
                onChange={() => { } }
                onDropdownClick={() => { } }
                options={[
                  { label: "Daily", value: "Daily" },
                  { label: "Weekly", value: "Weekly" },
                  { label: "Monthly", value: "Monthly" },
                  { label: "Yearly", value: "Yearly" }
                ]}
                placeholder="Select Frequency"
                rowHeight={44}
                search={{
                  onChange: () => { },
                  onClear: () => { },
                  placeholder: 'Search',
                  value: ''
                }}
                selected="" maxRows={4}            />
                <div css={{marginTop: "1rem"}}>
                <span css={{fontSize: utils.remConverter(14), color: colors.Zeb_Solid_Light_Blue}}>Over the Past</span>
                <div css={{display: "flex", justifyContent: "space-between"}}>
                  <button css={pastButton}>6M</button>
                  <button css={pastButton}>1Y</button>
                  <button css={pastButton}>2Y</button>
                  <button css={pastButton}>3Y</button>
                </div>
                </div>
                
          </div>
          <div css={investmentBox}>
                  <div css={{display: "flex", justifyContent: "space-between", maxHeight: utils.remConverter(106)}}>
                    <Image src={AssetsImg.ic_investmentIcon} alt="Investment Icon" width={63} height={63} />
                    <div>
                      <p css={IBlabel}>Current Value</p>
                      <p css={IBvalue}>₹0.00</p>
                    </div>
                    <div css={percentageBox}>- 0.00%</div>
                  </div>
                  <Divider spacing={2} />
                  <p css={IBlabel}>Invested Amount: <span css={IBvalue}>₹0.00</span></p>
                </div>

                <Button
                  onClick={function noRefCheck(){}}
                  size="full-width"
                  type="primary"
                >
                  CALCULATE RETURNS
                </Button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
