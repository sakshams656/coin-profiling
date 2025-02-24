/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { typography, colors, utils } from "zebpay-ui";
import { SidePanel } from "zebpay-ui";

export const StyledSidePanel = styled(SidePanel)`
  background-color: ${colors.Zeb_Solid_Dark_Blue};
  color: ${colors.Zeb_Solid_Black};
  border-radius: 8px;
  padding: 2rem;
  font-family: "Lato", Noto-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 80%;
    max-width: 400px;
    text-align: left;
  }
`;

export const InsidePanel = css({
  color: "white",
  fontSize: "12px",
  display: "flex",
  flexDirection: "column",
  gap: "3px",
  padding: "16px 16px 16px",
});

export const Title = (isDateRangeOpen: boolean) =>
  css({
    fontSize: "12px",
    lineHeight: "18px",
    letterSpacing: "0.4px",
    color: isDateRangeOpen ? "white" : colors.Zeb_Solid_Light_Blue,
    fontFamily: "'Lato', 'Noto-serif'",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

export const ButtonGroup = css({
  position: "absolute",
  bottom: "16px",
  right: "16px",
  display: "flex",
  gap: "12px",
  marginRight: "1rem",
});

export const Added = css({
  fontSize: "14px",
  color: "white",
  marginLeft: "8px",
});


export const filterAndUpdownFrame = css({
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",  // 20px
  "@media (max-width: 768px)": {
    gap: "0.5rem",  // 8px
  },
});



export const filter = css({
  color: colors.Zeb_Solid_White,
  display: "flex",
  padding: "0.5rem",  // 8px
  alignItems: "center",
  gap: "0.25rem",  // 4px
  borderRadius: "0.5rem",  // 8px
  background: colors.Zeb_Solid_BG_Blue,
});


export const updown = css({
  color: colors.Zeb_Solid_White,
  display: "flex",
  padding: "0.4rem",  // 8px
  alignItems: "center",
  gap: "0.25rem",  // 4px
  borderRadius: "0.5rem",  // 8px
  background: colors.Zeb_Solid_BG_Blue,
});