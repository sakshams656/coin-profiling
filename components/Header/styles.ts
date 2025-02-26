import { css } from "@emotion/react";
import { utils } from "zebpay-ui";

export const header = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  paddingTop: utils.remConverter(8), 
  paddingLeft: utils.remConverter(40), 
  marginBottom: utils.remConverter(-22.4), 
  boxSizing: "border-box",
});

export const tabs = css({
  width: "100%",
  marginBottom: utils.remConverter(0), 
  padding: utils.remConverter(0), 
});

export const headerButton = css({
  marginBottom: utils.remConverter(32), 
  marginRight: utils.remConverter(40), 
});