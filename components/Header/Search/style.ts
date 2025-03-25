import { css } from "@emotion/react";
import { utils } from "zebpay-ui";

export const Card = css({
  display: "flex",
  alignItems: "center",
});

export const articleInfo = css({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  marginLeft: utils.remConverter(10),
});

export const articleTitle = css({
  alignContent: "center",
  width: utils.remConverter(320),
  fontSize: "1rem",
  color: "white",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontWeight: 600,
});

export const articleFooter = css({
  display: "flex",
  fontSize: utils.remConverter(14),
  fontWeight: 400,
  color: "#c0c0ee",
  alignItems: "center",
  gap: utils.remConverter(7),
});

export const articleImage = css({
  width: utils.remConverter(50),
  height: utils.remConverter(50),
  borderRadius: utils.remConverter(4),
});

export const articleHeader = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items:center;
`;

export const articleHeader = css({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
});