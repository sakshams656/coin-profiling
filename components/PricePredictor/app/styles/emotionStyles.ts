import { css } from "@emotion/react";

export const main = css`
  display: flex;
  gap: 1.25rem;
  width: 100%;
  height: 100%;
`;

export const graph = css`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  background: var(--blue-02-dark-blue, #181837);

  @media (min-width: 568px) {
    width: 75%;
    height: 100%;
  }
`;

export const innerWrapper=css`
  
`;

export const predictionCards = css`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  height: 100%;
  gap: 1.1rem;
  padding: 1rem;
  padding-bottom: 0.5rem;
  border-radius: 0.5rem;
  background: var(--Zeb_Solid-BG_Blue, #222245);
`;

export const heading = css`
  color: white;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;
`;

export const fieldRow = css`
  display: flex;
  width: 100%;
  height: 12vh;
  justify-content: space-between;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const buttonWrapper = css`
  padding-top: 1rem;
`;

export const component15 = css`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;
  background: var(--Zeb_Transparent/4);
  margin-top: 1.25rem;
`;

export const rightSideCards = css`
  display: flex;
  gap: 6rem;
  width: 25%;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const breakdown = css`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 0.5rem;
  background: var(--blue-02-dark-blue, #181837);
`;

export const currentValue = css`
  display: flex;
  padding: 0.5rem;
  height: 15%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  align-self: stretch;
  border-radius: 0.5rem;
  background: var(
    --Zeb_Gradient-Dark_Blue,
    linear-gradient(254deg, #4a62ca -43.42%, #1b264b 148.58%)
  );
`;

export const roww = css`
  display: flex;
`;

export const coll = css`
  display: flex;
  flex-direction: column;
  align-items: bottom;
  gap: 0.8rem;
`;

export const headerContent = css`
  color: var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee));
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-family: Lato;
  font-size: 0.875rem;
  font-style: normal;
  margin-right: 0.55rem;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.025rem;
`;

export const headerContent1 = css`
  display: flex;
  padding: 0rem 0.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  border-radius: 0.25rem;
  border: 1px solid var(--Shimmer-Zeb_Solid-Success, #1ecaa2);
  background: var(--Shimmer-Zeb_Transparent-Green, rgba(30, 202, 162, 0.2));
`;

export const up = css`
  display: flex;
  flex-direction: row;
  color: var(--Shimmer-Zeb_Solid-White, #fff);
  gap: 0.4rem;
`;

export const down = css`
  color: var(--Zeb_Solid-White, #fff);
  display: flex;
  flex-direction: row;
  color: var(--Shimmer-Zeb_Solid-White, #fff);
  letter-spacing: 0.06rem;
`;

export const cryptoSelect = css`
  color: var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee));
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-family: Lato;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.025rem;
`;

export const chart = css`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  border: 2px solid #338fff0a;
`;
