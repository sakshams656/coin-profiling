import "chart.js/auto";
import React from "react";

import { Icon, Divider, Tags } from "zebpay-ui"; 

import SkeletonWrapper from "../SkeletonWrapper";

import {
  Frame461,
  Component15a,
  History,
  Cols,
  Row,
} from "../styles/TableStyle";

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
      isUp: change > 0, // true if price increased, false if decreased
    };
  };

  return (
    <>
      {loading ? (
        <SkeletonWrapper isLoading={loading} height={40} width={320} />
      ) : (
        <Frame461>
          <Icon name="icon icon-max-supply" />
          Future Price Estimates
        </Frame461>
      )}
      {loading ? (
        <SkeletonWrapper isLoading={loading} height={302} width={320} />
      ) : (
        <Component15a>
          <History>
            <Cols>TimeFrame</Cols> <Cols>Price</Cols> <Cols>% Change</Cols>
          </History>
          {dummyData.slice(1).map((item, index) => {
            const currentPrice = parsePrice(item.price);
            const previousPrice = parsePrice(dummyData[index].price);
            const { value, isUp } = calculateChange(currentPrice, previousPrice);

            return (
              <React.Fragment key={index + 1}>
                <Row>
                  <Cols>{item.timeFrame}</Cols>
                  <Cols>₹{item.price}</Cols>
                  <Cols>
                    <Tags
                      size="medium"
                      type={isUp === null ? "default" : isUp ? "success" : "error"}
                      // style={{
                      //   display: "flex",
                      //   // padding:"0.1rem",
                      //   alignItems: "center",
                      //   // gap: "4px",
                      //   // width: "100px",
                      //   justifyContent: "center",
                      // }}
                    >
                      {isUp === null ? (
                        value
                      ) : !isUp ? (
                        <>
                          <Icon name="icon icon-downwards" /> {value}
                        </>
                      ) : (
                        <>
                          <Icon name="icon icon-upwards" /> {value}
                        </>
                      )}
                    </Tags>
                  </Cols>
                </Row>
                {/* {index < dummyData.length - 2 && <Divider spacing={1} />} */}
              </React.Fragment>
            );
          })}
        </Component15a>
      )}
    </>
  );
};

export default Table;
