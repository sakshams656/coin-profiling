import { useState } from "react";
import { useRouter } from "next/router";
import { Input, Button, utils, colors } from "zebpay-ui";
import { css } from "@emotion/react";
import { InputTargetProps } from "zebpay-ui/dist/cjs/components/Input/typings";
import * as styles from "./styles";

const CoinSelect = () => {
  const [coinSymbol, setCoinSymbol] = useState(""); 
  const [errorText, setErrorText] = useState<string | undefined>(undefined);
  const router = useRouter();

  const handleInputChange = (target: InputTargetProps) => {
    const value = target.value.toString().toUpperCase();

    if (/^[A-Za-z0-9]*$/.test(value)) {
      setCoinSymbol(value);
      setErrorText(undefined);
    } else {
      setErrorText("Please enter a valid Coin Symbol (alphanumeric characters only)");
    }
  };

  const handleButtonClick = () => {
    if (coinSymbol.trim() && !errorText) {
      router.push(`/${coinSymbol}`); 
    } else if (!coinSymbol.trim()) {
      setErrorText("Coin Symbol cannot be empty");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !errorText) {
      handleButtonClick();
    }
  };

  return (
    <div css={styles.container}>
      <span css={styles.title}>Enter Coin Symbol</span> 
      <div css={css({ gap: utils.remConverter(16) })}>
        <Input
          label="Coin Symbol" 
          placeholder="Enter Coin Symbol (e.g., BTC)" 
          value={coinSymbol} 
          onChange={handleInputChange}
          type="text"
          errorText={errorText}
          style={css({ width: utils.remConverter(300) })}
          onKeyDown={handleKeyDown}
        />
        <div css={{ marginTop: utils.remConverter(16) }}>
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