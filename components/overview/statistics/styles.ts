import { css, keyframes } from "@emotion/react";
import { utils, colors } from "zebpay-ui";

// Define keyframes separately
const moveBitcoin = keyframes({
  from: {
    left: "0%",
  },
  to: {
    left: "70%",
  },
});

const styles = {
  statisticsContainer: css({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1.5rem",
    background: colors.Zeb_Solid_Dark_Blue,
    borderRadius: "0.5rem",
    width: "100%",
    boxShadow: "0rem 0.25rem 0.5rem 0rem rgba(0, 0, 0, 0.1)",
    "@media (max-width: 48rem)": {
      padding: "1rem",
      gap: "0.75rem",
    },
  }),

  title: css({
    fontSize: utils.remConverter(18),
    fontWeight: 700,
    color: colors.Zeb_Solid_White,
    marginBottom: "1rem",
  }),

  /* 🔹 Upper Section */
  upperSection: css({
    display: "flex",
    gap: "1rem",
    width: "100%",
    "@media (max-width: 48rem)": {
      flexDirection: "column",
    },
  }),

  largeCard: css({
    flex: "0 0 66.8%",
  }),

  smallCard: css({
    flex: "0 0 15%",
  }),

  /* 🔵 Lower Section */
  lowerSection: css({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
    background: colors.Zeb_Solid_BG_Blue,
    borderRadius: "0.5rem",
  }),

  statsRow: css({
    display: "flex",
    gap: "1rem",
    width: "100%",
    "@media (max-width: 48rem)": {
      flexDirection: "column",
    },
  }),

  statsCard: css({
    padding: "1rem",
    background: colors.Zeb_Solid_BG_Blue,
    borderRadius: "0.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    minWidth: 0,
  }),

  statsCard1: css({
    flex: 1,
    padding: "1rem",
    borderRadius: "0.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    minWidth: 0,
  }),

  statsTitle: css({
    color: colors.Zeb_Solid_White,
    fontSize: "0.875rem",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
  }),

  statsSubRow: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.5rem",
  }),

  statsLabel: css({
    color: colors.Zeb_Solid_Light_Blue,
    fontSize: "0.75rem",
    fontWeight: 400,
  }),

  statsValue: css({
    color: colors.Zeb_Solid_White,
    fontSize: "1rem",
    fontWeight: 700,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),

  /* 🚀 Bitcoin Animation */
  bitcoinIconBase: css({
    position: "absolute",
    bottom: "-80%",
    width: "1.5rem",
    height: "1.5rem",
    transform: "translateX(-50%)",
  }),

  bitcoinIconAnimated: css({
    animation: `${moveBitcoin} 1.5s ease-in-out forwards`,
  }),

  statsProgress: css({
    width: "100%",
    height: "0.5rem",
    background: colors.Zeb_Solid_BG_Blue,
    borderRadius: "0.25rem",
    position: "relative",
  }),

  progressBar: css({
    height: "100%",
    width: "100%",
    background: colors.Zeb_Solid_Bright_Blue,
    borderRadius: "0.25rem",
  }),

  /* 🟢 Icons */
  statsIcon: css({
    width: "1.25rem",
    height: "1.25rem",
  }),

};

export default styles;