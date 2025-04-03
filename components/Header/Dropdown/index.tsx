import { Button, utils } from "zebpay-ui";
import * as styles from "./styles";
import Image from "next/image";
import AssetsImg from "@public/images";

interface ShareMenuProps {
  isOpen: boolean;
  onClose: () => void;
  shareMenuRef: React.RefObject<HTMLDivElement>;
}

const shareOptions = [
  { name: "WhatsApp", icon: AssetsImg.ic_whatsapp },
  { name: "Instagram", icon: AssetsImg.ic_instagram },
  { name: "Facebook", icon: AssetsImg.ic_facebook },
  { name: "Messenger", icon: AssetsImg.ic_messenger },
  { name: "Twitter", icon: AssetsImg.ic_twitter },
  { name: "LinkedIn", icon: AssetsImg.ic_linkedin },
  { name: "Telegram", icon: AssetsImg.ic_telegram },
];

const Dropdown = ({ isOpen, onClose, shareMenuRef }: ShareMenuProps) => {
  if (!isOpen) return null;

  return (
    <div css={styles.shareMenu} ref={shareMenuRef}>
      <div css={styles.shareMenuHeader}>
        <Image
          src={AssetsImg.ic_share_white}
          alt="Share"
          width={16}
          height={16}
        />
        <span css={styles.shareMenuHeaderSpan}>
          Share BTC Profile
        </span>
        <button
          onClick={onClose}
          css={styles.shareButton}
        >
          <Image src={AssetsImg.ic_cross} alt="cross" height={16} width={16} />
        </button>
      </div>
      <div css={styles.menuContainer}>
      {shareOptions.map((option) => (
        
        <button key={option.name} css={styles.shareMenuItem}>
          <Image
            src={option.icon}
            alt={`Share on ${option.name}`}
            width={20}
            height={20}
          />
          {option.name}
        </button>
        
      ))}
      </div>
      <div>
        <Button
          style={{
            maxHeight: utils.remConverter(26),
            marginLeft: utils.remConverter(0),
            borderRadius: utils.remConverter(4),
          }}
          onClick={function noRefCheck() {}}
          size="full-width"
          type="tertiary"
        >
          <Image
            src={AssetsImg.ic_copy_link}
            alt="copy"
            width={12}
            height={12}
            css={{ marginRight: utils.remConverter(4) }}
          />
          Copy Link
        </Button>
      </div>
    </div>
  );
};

export default Dropdown;