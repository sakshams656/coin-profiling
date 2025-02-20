import { Button } from "zebpay-ui";
import { typography, utils, mixins } from "zebpay-ui";
import Link from "next/link";
import AssetsImg from "../public/images";
import InfoScreen from "@components/Shared/InfoScreen";
import { logo_404 } from "@styles/404";
import NOOB from "@constants/noob";

const PageNotFound: React.FC = () => {
  return (
    <InfoScreen>
      <img src={AssetsImg.i_404.src} alt="404" css={logo_404} />
      <h4 css={[typography.H5_20_semibold, mixins.textFaded, utils.mb(20)]}>
        We Cant Find the Page You&apos;re Looking For
      </h4>
      <Link href={"/"} css={{ zIndex: 1 }}>
        <Button type="primary" size="large" onClick={NOOB}>
          BACK TO HOMEPAGE
        </Button>
      </Link>
    </InfoScreen>
  );
};

export default PageNotFound;
