import React, { useState, useEffect, useRef } from "react";
import { colors, Input, Shimmer } from "zebpay-ui";
import {field,text,warning} from "./style"

const InvestmentAmount: React.FC<{
  loading: boolean;
  loader: boolean;
  investmentAmount: number | null;
  setInvestmentAmount: (amount: number) => void;
}> = ({ loading, loader,investmentAmount, setInvestmentAmount }) => {
  const [amount, setAmount] = useState("");
  const [showError, setShowError] = useState(false);
  const [focus, setFocus] = useState(false);

  const [displayValue, setDisplayValue] = useState(
    investmentAmount ? investmentAmount.toString() : ""
  );

  useEffect(() => {
    if (investmentAmount !== null) {
      setDisplayValue(investmentAmount.toString());
    }
  }, [investmentAmount]);

  return (
    <div css={field}>
      {loading ? (
        <Shimmer height={22} width={130} />
      ) : (
        <div
          css={text(showError)}
        >
          Investment Amount
        </div>
      )}
      {loading ? (
        <Shimmer height={50} width={420} />
      ) : (
        <>
          <Input
          value={displayValue}
            onChange={(e) => {
              const value = parseFloat(e.value);
              setAmount(e.value);
              setShowError(!value || value <= 0);
              setInvestmentAmount(value > 0 ? value : 0);
            }}
            onFocus={() => {
              if (!amount || amount === "0") setShowError(true);
              setFocus(true);
            }}
            appendItem={
              <span
              >
                INR
              </span>
            }
            invalid={showError}
            placeholder="0"
            style={{
              styles: "width:95% ",
              
            }}
            disabled={loader}
            onBlur={() => {
              setShowError(false);
              setFocus(false);
            }}
            type="number"
          />
          {showError && (
            <span
              css={warning}
            >
              Please enter amount to proceed
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default InvestmentAmount;
