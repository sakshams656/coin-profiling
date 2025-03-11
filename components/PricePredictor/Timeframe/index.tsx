import React, { useState, useEffect, useRef } from "react";
import { InputDropDown, Shimmer, typography } from "zebpay-ui";
import { heading, field } from "./style";

const TimeFrame: React.FC<{
  loading: boolean;
  loader: boolean;
  setTimeframe: (timeframe: string) => void;
}> = ({ loading, loader, setTimeframe }) => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const options = [
    { label: "1 Day", value: "1_day" },
    { label: "1 Week", value: "1_week" },
    { label: "1 Month", value: "1_month" },
    { label: "3 Months", value: "3_months" },
    { label: "6 Months", value: "6_months" },
    { label: "1 Year", value: "1_year" },
  ];

  return (
    <div css={field}>
      {loading ? (
        <Shimmer height={22} width={130} />
      ) : (
        <div css={heading(isDropDownOpen)}>Timeframe</div>
      )}

      {loading ? (
        <Shimmer height={50} width={420} />
      ) : (
        <InputDropDown
          onDropdownClick={() => setIsDropDownOpen(!isDropDownOpen)}
          disableTick={false}
          onChange={(value) => {
            const selectedOption = options.find(
              (option) => option.value === value
            );
            setSelectedTimeFrame(selectedOption ? selectedOption.label : "");
            setIsDropDownOpen(false);
            setTimeframe(value);
          }}
          options={options}
          placeholder={selectedTimeFrame || "Select TimeFrame"}
          placeholderStyle={{ color: selectedTimeFrame ? "white" : "#C0C0EE" }}
          rowHeight={44}
          search={{
            onChange: function noRefCheck() {},
            onClear: function noRefCheck() {},
            placeholder: "Search",
            value: "",
          }}

          disabled={loader}
          selected={
            selectedTimeFrame
              ? options.find((option) => option.label === selectedTimeFrame)
                  ?.value
              : ""
          }
        />
      )}
    </div>
  );
};

export default TimeFrame;
