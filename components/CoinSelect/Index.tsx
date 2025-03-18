import { useState } from "react";
import { useRouter } from "next/router";
import { Input, Button, utils, colors } from "zebpay-ui";
import { css } from "@emotion/react";
import { InputTargetProps } from "zebpay-ui/dist/cjs/components/Input/typings";
import * as styles from "./styles"

const CoinSelect = () => {
  const [coinId, setCoinId] = useState("");
  const [errorText, setErrorText] = useState<string | undefined>(undefined);
  const router = useRouter();

  const handleInputChange = (target: InputTargetProps) => {
    const value = target.value.toString();
    if (/^\d*$/.test(value)) {
      setCoinId(value);
      setErrorText(undefined);
    } else {
      setErrorText("Please enter a valid numeric Coin ID");
    }
  };

  const handleButtonClick = () => {
    if (coinId.trim() && !errorText) {
      router.push(`/${coinId}`); 
    } else if (!coinId.trim()) {
      setErrorText("Coin ID cannot be empty");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !errorText) {
      handleButtonClick();
    }
  };

  return (
    <div
      css={styles.container}
    >
      <span css={styles.title}>
        Enter Coin ID
      </span>
      <div css={css({ gap: utils.remConverter(16) })}>
        <Input
          label="Coin ID"
          placeholder="Enter Coin ID "
          value={coinId}
          onChange={handleInputChange}
          type="text"
          errorText={errorText}
          style={css({ width: utils.remConverter(300) })}
          onKeyDown={handleKeyDown}
        />
        <div css={{marginTop: utils.remConverter(16)}}>
        <Button
          type="primary"
          size="medium"
          onClick={handleButtonClick}
          disabled={!!errorText}
          width={300}
        >
          View Profile
        </Button>
        </div>
      </div>
    </div>
  );
};

export default CoinSelect;