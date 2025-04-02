
import { css } from "@emotion/react";
import { utils } from "zebpay-ui";


export const dropdownContainer = css({
  position: "absolute",
  top: `calc(100% + ${utils.remConverter(15)})`,
  right: utils.remConverter(-8),
  zIndex: 1000,
  backgroundColor: "#181837",
  padding: utils.remConverter(12.8),
  borderRadius: utils.remConverter(8),
  border: `${utils.remConverter(1)} solid #338FFF`,
});

export const optionStyle = (isSelected) =>
  css({
    backgroundColor: isSelected ? "#222245" : "#181837",
    color: isSelected ? "white" : "#C0C0EE",
    border: "none",
    height: utils.remConverter(32),
    padding: `${utils.remConverter(19.2)} ${utils.remConverter(8)}`,
    borderRadius: utils.remConverter(8),
    width: utils.remConverter(176),
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  });

  export const icon=css({
    color:"#C0C0EE",
  })


