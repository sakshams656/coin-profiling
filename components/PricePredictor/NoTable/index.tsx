import React from "react";
import NoData from "../app/images/NoData.svg";
import { heading,subHeading,image,container } from "./style";

const NoDataDisplay: React.FC = () => {
  return (
    <div
      css={container}
    >
      <img
        src={NoData.src}
        alt="No Data"
        css={image}
      />

      <h2 css={heading}>No data to display</h2>

      <p css={subHeading}>
        Input values in the calculator to display your coin projections here.
      </p>
    </div>
  );
};

export default NoDataDisplay;
