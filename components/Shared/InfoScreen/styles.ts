import { css } from "@emotion/react";
import AssetsImg from "@public/images";
import { colors, utils, typography, mixins } from "zebpay-ui";
import { InfoScreenType } from ".";
import { hideScrollCSS } from "@styles/shared/scroll";

export const mainWrapper = (type: InfoScreenType) =>
  css({
    backgroundImage: `url(${AssetsImg[type === InfoScreenType.NotFound ? "i_404_bg" : "i_blocker_background"].src})`,
    backgroundColor: colors.Zeb_Solid_BG_Blue,
    backgroundSize: "cover",
    height: "100vh",
    overflow: "auto",
    objectFit: "cover",
    ...hideScrollCSS,
  });

export const logoContainer = css([
  mixins.flexAlignCenter,
  mixins.flexJustifiedCenter,
  {
    padding: `${utils.remConverter(8)} ${utils.remConverter(40)}`,
  },
]);
export const logo = css({
  width: utils.remConverter(170),
  height: utils.remConverter(45),
});

export const content = css([
  mixins.flexColumn,
  mixins.flexAlignCenter,
  mixins.flexJustifiedCenter,
  {
    height: `calc(100vh - ${utils.remConverter(71)})`,
  },
]);
