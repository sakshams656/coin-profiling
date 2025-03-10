import { css } from "@emotion/react";

export const text = (showError: boolean, focus: boolean) => css`
  color: ${showError ? "#EA6161" : focus ? "white" : "#C0C0EE"};
`;

export const warning = css`
  color: #ea6161;
  display: block;
`;

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
