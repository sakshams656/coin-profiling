import { css } from "@emotion/react";
import { utils } from "zebpay-ui";

export const frame461 = css({
  display: "flex",
  width: "100%",
  height: "3vh",
  alignItems: "center",
  gap: utils.remConverter(4),
  borderRadius: utils.remConverter(4),
  color: "var(--Shimmer-Zeb_Solid-White, #fff)",
  fontFeatureSettings: "'liga' off, 'clig' off",
  fontFamily: "Lato",
  fontSize: utils.remConverter(16),
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: utils.remConverter(28),
  letterSpacing: utils.remConverter(0.4),
});

export const component15a = css({
  display: "flex",
  height: "100%",
  flexDirection: "column",
  alignSelf: "stretch",
  borderRadius: utils.remConverter(8),
  border: "1px solid var(--Shimmer-Zeb_BG-Light_Blue, rgba(192, 192, 238, 0.2))",
  background: "var(--Shimmer-Zeb_Solid-Dark_Blue, #181837)",
});

export const history = css({
  height: utils.remConverter(36),
  background: "var(--Shimmer-Zeb_Solid-BG_Blue, #222245)",
  fontSize: utils.remConverter(12),
  fontWeight: 400,
  lineHeight: utils.remConverter(18),
  letterSpacing: utils.remConverter(0.4),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: utils.remConverter(14),
  borderTopLeftRadius: utils.remConverter(8),
  borderTopRightRadius: utils.remConverter(8),
  color: "#C0C0EE",
});

export const row = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${utils.remConverter(8)} ${utils.remConverter(14)}`,
  fontSize: utils.remConverter(14),
  color: "#ffffff",
});

export const tags = css({
  display: "flex",
  flexDirection: "row",
  gap: utils.remConverter(5),
});

export const tags_text=css({
  fontSize:`${utils.remConverter(13)}`,
  fontWeight:"600"
})
