import { css } from "@emotion/react";
import { utils } from "zebpay-ui";

export const toastifyToastStyle = css({
  ".Toastify__toast-container": {
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: utils.remConverter(12),
    width: "484px",
  },
  ".Toastify__toast-container--bottom-center": {
    bottom: utils.remConverter(24),
  },
  ".Toastify__toast-theme--light": {
    background: "none",
  },
  ".Toastify__toast": {
    padding: 0,
    marginBottom: 0,
    boxShadow: "none",
  },
  ".Toastify__toast-body": {
    padding: 0,
  },
  ".Toastify__close-button": {
    position: "absolute",
    width: "18px",
    right: "17px",
    top: "13px",
    opacity: 0,
  },
});
