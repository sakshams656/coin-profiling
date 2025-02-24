import { css } from "@emotion/react";
import { colors, typography} from "zebpay-ui"; 

export const cardContainerStyle = css({
    display: "flex",
    padding: "1rem",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.25rem",
    flex: "1 0 0",
    borderRadius: "0.5rem",
    background: "var(--Zeb_Solid-BG_Blue, #222245)",
    border: "1px solid var(--Zeb_Solid-BG_Blue, #222245)",
    "&:hover": {
      border: "1px solid var(--Zeb_Solid-Bright_Blue, #338fff)",
      boxShadow: "0px 8px 8px -4px #0c0c1d",
    },
  });
  
  export const insideFrameStyle = css({
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    width: "100%",
    alignSelf: "stretch",
  });
  
  export const cardImageStyle = css({
    display: "flex",
    width: "6.25rem",
    height: "6.5rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.25rem",
    alignSelf: "stretch",
    borderRadius: "0.25rem",
    border: "1px solid var(--grey-02-dark, #34345a)",
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "0.25rem",
    },
  });
  
  export const cardInfoStyle = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.75rem",
    flex: "1 0 0",
    alignSelf: "stretch",
  });
  
  export const infoHeaderStyle = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.25rem",
    alignSelf: "stretch",
  });
  
  export const domainNameStyle = (isZebpay) =>
    css({
      display: "flex",
      padding: "0.125rem 0.25rem",
      alignItems: "center",
      gap: "0.625rem",
      borderRadius: "0.25rem",
      background: isZebpay
        ? "rgba(51, 143, 255, 0.20)"
        : "var(--Shimmer-Zeb_BG-Light_Blue, rgba(192, 192, 238, 0.20))",
      color: isZebpay
        ? "var(--Shimmer-Zeb_Solid-Bright_Blue, #338FFF)"
        : "var(--Shimmer-Zeb_Solid-Grey, #C2C2DD)",
    });
  
  export const titleStyle = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    alignSelf: "stretch",
    width: "100%",
    padding: "0.125rem 0.25rem",
    borderRadius: "0.25rem",
    color: "var(--Zeb_Solid-White, #fff)",
    textDecoration: "none",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    lineHeight: 1.5,
  });
  
  export const infoFooterStyle = css({
    display: "flex",
    alignItems: "center",
    gap: "0.125rem",
    alignSelf: "stretch",
  });
  
  export const readingTimeStyle = css({
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    fontSize: "12px",
    fontWeight: 400,
  });
  
  export const readingTimeIcon = css({
    display: "flex",
    width: "0.75rem",
    height: "0.75rem",
    padding: "0.0375rem",
    justifyContent: "center",
    alignItems: "center",
    color: colors.Zeb_Solid_Light_Blue,
  });
  
  export const textReadingTime = css({
    color: "var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee))",
    ...typography["b5/12_regular"],
  });
  
  export const iconSeparatorStyle = css({
    width: "1rem",
    height: "1rem",
  });
  
  export const dateStyle = css({
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    fontSize: "12px",
    fontWeight: 400,
  });
  
  export const dateIconStyle = css({
    display: "flex",
    width: "0.75rem",
    height: "0.75rem",
    padding: "0.0375rem",
    justifyContent: "center",
    alignItems: "center",
    color: colors.Zeb_Solid_Light_Blue,
  });
  
  export const dateTextStyle = css({
    color: "var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee))",
    ...typography["b5/12_regular"],
  });
  