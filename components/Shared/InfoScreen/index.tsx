import React from "react";
import * as styles from "./styles";
import { mixins, utils } from "zebpay-ui";
import AssetsImg from "@public/images";

export enum InfoScreenType {
  Blocker = "Blocker",
  NotFound = "NotFound",
}

interface InfoScreenProps {
  children: React.ReactNode;
  type?: InfoScreenType;
}

const InfoScreen: React.FC<InfoScreenProps> = ({
  type = InfoScreenType.NotFound,
  children,
}) => {
  return (
    <div css={styles.mainWrapper(type)}>
      <header css={utils.pt(10)}>
        <div css={styles.logoContainer}>
          <img src={AssetsImg.i_zebpay_logo.src} alt="logo" css={styles.logo} />
        </div>
        <div css={styles.content}>{children}</div>
      </header>
    </div>
  );
};

export default InfoScreen;
