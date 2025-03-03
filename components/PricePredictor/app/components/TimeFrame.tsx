import React, { useState, useEffect, useRef } from "react";

// import styles from "../styles/BTCPricePredictor.module.css";

import { InputDropDown, typography } from "zebpay-ui";
import SkeletonWrapper from "../SkeletonWrapper";

import { Field } from "../styles/emotionStyles";

const TimeFrame: React.FC<{ loading: boolean;loader:boolean; setTimeframe: (timeframe: string) => void; }> = ({ loading,loader, setTimeframe }) => {

  const [selectedTimeFrame, setSelectedTimeFrame] = useState("");
  const [isDropDownOpen,setIsDropDownOpen]=useState(false);

  const options=[
    { label: "1 Day", value: "1_day" },
    { label: "1 Week", value: "1_week" },
    { label: "1 Month", value: "1_month" },
    { label: "3 Months", value: "3_months" },
    { label: "6 Months", value: "6_months" },
    { label: "1 Year", value: "1_year" },
  ];

  return (
    <Field>
      {loading ? (
        <SkeletonWrapper isLoading={loading} height={22} width={130} />
      ) : (
        <div style={{color: isDropDownOpen ? "white":"#C0C0EE"}}>Timeframe</div>
      )}
 
      {loading ? (
        <SkeletonWrapper isLoading={loading} height={50} width={370} />
      ) : (
        <InputDropDown
          onDropdownClick={()=>setIsDropDownOpen(!isDropDownOpen)}
          
          onChange={(value) => {
            const selectedOption = options.find((option) => option.value === value);
            setSelectedTimeFrame(selectedOption ? selectedOption.label : "");
            setIsDropDownOpen(false);
            setTimeframe(value);
          }}
          style={{ width: "100%", alignItems: 3,color:"white" }}
          options={options}
          placeholder={selectedTimeFrame||"Select TimeFrame"}
          placeholderStyle={{ color: selectedTimeFrame ? "white" : "#C0C0EE" }} 
          rowHeight={44}
          search={{
            onChange: function noRefCheck() {},
            onClear: function noRefCheck() {},
            placeholder: "Search",
            value: "",
          }}
          disabled={loader}
          selected=""
          
          
        />
      )}
    </Field>
  );
};

export default TimeFrame;
