import React, { useState, useEffect, useRef } from "react";
import { colors, Input } from "zebpay-ui";
import SkeletonWrapper from "../SkeletonWrapper";
import { Field } from "../styles/emotionStyles";

const InvestmentAmount: React.FC<{ loading: boolean,loader:boolean; setInvestmentAmount: (amount: number) => void; }> = ({ loading,loader, setInvestmentAmount }) => {
  const [amount, setAmount] = useState("");
  const [showError, setShowError] = useState(false);
  const [focus,setFocus]=useState(false);

  return (
    <Field>
      {loading ? (
        <SkeletonWrapper isLoading={loading} height={22} width={130} />
      ) : (
        <div style={{ color: !showError ? (focus? "white":"#C0C0EE" ): "#EA6161" }}>
          Investment Amount
        </div>
      )}
      {loading ? (
        <SkeletonWrapper isLoading={loading} height={50} width={390} />
      ) : (
        <>
          <Input
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
            appendItem={"INR"}
            invalid={showError}
            placeholder="0"
            style={{
              name: "3s4yqf",
              styles: "width:95%",
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
              style={{
                color: "#EA6161",
                // position: "absolute",
                display:"block"
                
              }}
            >
              Please enter amount to proceed
            </span>
          )}
        </>
      )}
    </Field>
  );
};

export default InvestmentAmount;
