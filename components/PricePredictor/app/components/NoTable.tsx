import React from "react";
import NoData from "../images/NoData.svg";

const NoDataDisplay: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "1rem",
      }}
    >
      {/* NoData Image */}
      <img
        src={NoData.src}
        alt="No Data"
        style={{ width: "140px", height: "140px" }}
      />

      <h2 style={{ color: "#ffffff", margin: "0"}}>No data to display</h2>

      <p style={{ color: "#C0C0EE", margin: "0" ,gap:"3rem" }}>
        Input values in the calculator to display your coin projections here.
      </p>
    </div>
  );
};

export default NoDataDisplay;
