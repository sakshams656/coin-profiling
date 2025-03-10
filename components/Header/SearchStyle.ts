import { css } from "@emotion/react";
import { colors, utils } from "zebpay-ui";

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
    alignContent:"center",
    width: utils.remConverter(320),
    fontSize: utils.remConverter(16),
    color: "white",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  });

  export const articleFooter = css({
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    fontSize: utils.remConverter(14),
    color: colors.Zeb_Solid_Light_Blue,
    gap: utils.remConverter(4),
    fontWeight: 400
  });

  export const articleFooterSpan = css({
    display: "flex",
    gap: utils.remConverter(4),
    alignItems: "center"
  });

  export const articleImage = css({
    width: utils.remConverter(50),
    height: utils.remConverter(50),
    borderRadius: utils.remConverter(4),
  });

  export const articleHeader = css({
    display: "flex",
    width:"100%",
    justifyContent:"space-between",
  });