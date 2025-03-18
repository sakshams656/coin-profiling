import { css, keyframes } from "@emotion/react";
import { utils, colors } from "zebpay-ui";

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
    gap: utils.remConverter(16),
    padding: utils.remConverter(24),
    background: colors.Zeb_Solid_Dark_Blue,
    borderRadius: utils.remConverter(8),
    width: "100%",
    boxShadow: `0 ${utils.remConverter(4)} ${utils.remConverter(8)} 0 rgba(0, 0, 0, 0.1)`,
    "@media (max-width: 48rem)": {
      padding: utils.remConverter(16),
      gap: utils.remConverter(12),
    },
  }),

  title: css({
    fontSize: utils.remConverter(18),
    fontWeight: 700,
    color: colors.Zeb_Solid_White,
    marginBottom: utils.remConverter(16),
  }),

  /*  Upper Section */
  upperSection: css({
    display: "flex",
    gap: utils.remConverter(16),
    width: "100%",
    "@media (max-width: 48rem)": {
      flexDirection: "column",
    },
  }),
  largeCard: css({  width: "66.8%",}),smallCard: css({  width: "15%",}),

  /*  Lower Section */
  lowerSection: css({
    display: "flex",
    flexDirection: "column",
    gap: utils.remConverter(16),
    width: "100%",
    background: colors.Zeb_Solid_BG_Blue,
    borderRadius: utils.remConverter(8),
  }),

  statsRow: css({
    display: "flex",
    gap: utils.remConverter(16),
    width: "100%",
    "@media (max-width: 48rem)": {
      flexDirection: "column",
    },
  }),

  statsCard: css({
    padding: utils.remConverter(16),
    background: colors.Zeb_Solid_BG_Blue,
    borderRadius: utils.remConverter(8),
    display: "flex",
    flexDirection: "column",
    gap: utils.remConverter(8),
    minWidth: 0,
  }),

  statsCard1: css({
    flex: 1,
    padding: utils.remConverter(16),
    borderRadius: utils.remConverter(8),
    display: "flex",
    flexDirection: "column",
    gap: utils.remConverter(8),
    minWidth: 0,
  }),

  statsTitle: css({
    color: colors.Zeb_Solid_Light_Blue,
    fontSize: utils.remConverter(14),
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
    gap: utils.remConverter(4),
  }),

  performanceTitle: css({
    color: colors.Zeb_Solid_White,
    fontSize: utils.remConverter(14),
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
    gap: utils.remConverter(4),
  }),

  statsSubRow: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: utils.remConverter(8),
  }),

  statsLabel: css({
    color: colors.Zeb_Solid_Light_Blue,
    fontSize: utils.remConverter(12),
    fontWeight: 400,
    marginBottom: "1rem"
  }),

  statsValue: css({
    color: colors.Zeb_Solid_White,
    fontSize: utils.remConverter(16),
    fontWeight: 400,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginTop: utils.remConverter(16)
  }),

  /* 🚀 Bitcoin Animation */
  bitcoinIconBase: css({
    position: "absolute",
    bottom: "-80%",
    width: utils.remConverter(24),
    height: utils.remConverter(24),
    transform: "translateX(-50%)",
  }),

  bitcoinIconAnimated: css({
    animation: `${moveBitcoin} 1.5s ease-in-out forwards`,
  }),

  statsProgress: css({
    width: "100%",
    height: utils.remConverter(8),
    background: colors.Zeb_Solid_BG_Blue,
    borderRadius: utils.remConverter(4),
    position: "relative",
  }),

  progressBar: css({
    height: "100%",
    width: "100%",
    background: colors.Zeb_Solid_Bright_Blue,
    borderRadius: utils.remConverter(4),
  }),

  statsIcon: css({
    width: utils.remConverter(20),
    height: utils.remConverter(20),
  }),

  coinInfoSpan: css({
    color: colors.Zeb_Solid_White,
    fontsize: utils.remConverter(14),
    fontWeight: 600,
    marginLeft: utils.remConverter(8)
  }),

  coinInfoHoverContainer: css({
    display: "flex", 
    marginBottom: utils.remConverter(8)
  }),

  statsInner: css({
    backgroundColor: colors.Zeb_Solid_Dark_Blue,
    padding: utils.remConverter(12), 
    borderRadius: utils.remConverter(8),
    width: utils.remConverter(42),
    height: utils.remConverter(42) 
  }) 
};

export default styles;