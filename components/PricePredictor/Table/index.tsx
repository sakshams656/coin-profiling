import "chart.js/auto";
import React from "react";

import { Icon, Divider, Tags, Shimmer } from "zebpay-ui";

import {
  frame461,
  component15a,
  history,
  cols,
  row,
  tags
} from "./style";

const Table: React.FC<{ loading: boolean }> = ({ loading }) => {
  const dummyData = [
    { timeFrame: "02 July", price: "69,357,663.986" },
    { timeFrame: "03 July", price: "67,357,663.986" },
    { timeFrame: "04 July", price: "67,457,163.986" },
    { timeFrame: "05 July", price: "67,157,963.986" },
    { timeFrame: "06 July", price: "67,957,563.986" },
    { timeFrame: "07 July", price: "67,157,263.986" },
    { timeFrame: "08 July", price: "67,957,763.986" },
  ];

  const parsePrice = (price: string) => parseFloat(price.replace(/,/g, ""));

  const calculateChange = (current: number, previous: number) => {
    if (!previous || isNaN(previous)) return { value: "0%", isUp: null };
    const change = ((current - previous) / previous) * 100;
    return {
      value: `${Math.abs(change).toFixed(2)}%`,
      isUp: change > 0,
    };
  };

  return (
    <>
      {loading ? (
        <Shimmer height={30} width={240} />
      ) : (
        <div css={frame461}>
          <Icon name="icon icon-max-supply" />
          Future Price Estimates
        </div>
      )}
      {loading ? (
        <Shimmer height={290} width={320} />
      ) : (
        <div css={component15a}>
          <div css={history}>
            <div css={cols}>TimeFrame</div>
            <div css={cols}>Price</div>
            <div css={cols}>% Chg</div>
          </div>
          {dummyData.slice(1).map((item, index) => {
            const currentPrice = parsePrice(item.price);
            const previousPrice = parsePrice(dummyData[index].price);
            const { value, isUp } = calculateChange(
              currentPrice,
              previousPrice
            );

            return (
              <React.Fragment key={index + 1}>
                <div css={row}>
                  <div css={cols}>{item.timeFrame}</div>
                  <div css={cols}>₹{item.price}</div>
                  <div css={cols}>
                    <Tags
                      type={
                        isUp === null ? "default" : isUp ? "success" : "error"
                      }
                      style={{
                        name: "1pzk433",
                        styles: "width:200px",
                      }}
                    >
                      {isUp === null ? (
                        <span style={{ fontSize: "12px", fontWeight: "400" }}>
                          {value}
                        </span>
                      ) : !isUp ? (
                        <div css={tags}
                        >
                          <Icon name="icon icon-downwards" />
                          <span style={{ fontSize: "13px", fontWeight: "600" }}>
                            {value}
                          </span>
                        </div>
                      ) : (
                        <div
                          css={tags}
                        >
                          <Icon name="icon icon-upwards" />
                          <span style={{ fontSize: "13px", fontWeight: "600" }}>
                            {value}
                          </span>
                        </div>
                      )}
                    </Tags>
                  </div>
                </div>
                {index < dummyData.length - 2 && <Divider spacing={1} />}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Table;
