import { css } from "@emotion/react";

export const field = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  color: var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee));
  font-feature-settings: "liga" off, "clig" off;
  font-family: Lato;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.025rem;
  margin-bottom: 0.55rem;
`;

export const heading = (isDropDownOpen: boolean) => css`
  color: ${isDropDownOpen ? "white" : "#C0C0EE"};
`;