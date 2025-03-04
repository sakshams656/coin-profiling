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
    marginLeft: "10px",
  });

  export const articleTitle = css({
    alignContent:"center",
    width:"20rem",
    fontSize: "1rem",
    color: "white",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  });

  export const articleFooter = css({
    display: "flex",
    fontSize: "14px",
    color: "#C0C0EE",
    alignItems:"center",
    gap: "7px",
  });

  export const articleImage = css({
    width: "50px",
    height: "50px",
    borderRadius: "6px",
  });

  export const articleHeader = css({
    display: "flex",
    width:"100%",
    justifyContent:"space-between",
  });
  
