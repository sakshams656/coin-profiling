import { BASE_PATH } from "@constants/basePath";
import { css } from "@emotion/react";

const fontPath = `${BASE_PATH}/fonts/`;

export const globalStyles = css`
  :root {
    background: #222245;
  }
  @font-face {
    font-family: Lato;
    src: url("${fontPath}Lato-Bold.woff") format("woff");
    font-weight: "bold";
    font-display: swap;
  }
  @font-face {
    font-family: Lato;
    src: url("${fontPath}Lato-Semibold.woff") format("woff");
    font-weight: 600;
    font-display: swap;
  }
  @font-face {
    font-family: Lato;
    src: url("${fontPath}Lato-Regular.woff") format("woff");
    font-weight: normal;
    font-display: swap;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  *,
  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  article,
  aside,
  figcaption,
  figure {
    margin: 0;
    padding: 0;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  @media only screen and (min-width: 1200px) {
    html {
      fontsize: 16px;
    }
  }
  @media only screen and (min-width: 1400px) {
    html {
      fontsize: 18px;
    }
  }
  @media only screen and (min-width: 1800px) {
    html {
      fontsize: 20px;
    }
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default global;
