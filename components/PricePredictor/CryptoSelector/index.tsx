import React from "react";
import { InputDropDown } from "zebpay-ui";
import { css } from "@emotion/react";
import { cryptoIcon,cryptoOption,cryptoText } from "./style";

const cryptoOptions = [
  {
    value: "bitcoin",
    label: "Bitcoin",
    symbol: "BTC",
    iconImage: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
  },
  {
    value: "ethereum",
    label: "Ethereum",
    symbol: "ETH",
    iconImage: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  },
  {
    value: "litecoin",
    label: "Litecoin",
    symbol: "LTC",
    iconImage: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
  },
  {
    value: "ripple",
    label: "Ripple",
    symbol: "XRP",
    iconImage: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
  },
];

interface CryptoSelectorProps {
  crypto: string;
  setCrypto: (crypto: string) => void;
  loader: boolean;
}

const CryptoSelector: React.FC<CryptoSelectorProps> = ({
  loader,
  crypto,
  setCrypto,
}) => {
  const selectedCrypto = cryptoOptions.find((option) => option.value === crypto);

  const handleDropdownChange = (selectedValue: string) => {
    setCrypto(selectedValue);
  };

  const options = cryptoOptions.map((option) => ({
    label: (
      <div css={cryptoOption} key={option.value}>
        <img css={cryptoIcon} src={option.iconImage} alt={option.label} />
        <div css={cryptoText}>{`${option.symbol} | ${option.label}`}</div>
      </div>
    ),
    value: option.value,
  }));

  return (
    <div>
      {selectedCrypto && (
        <InputDropDown
          onClear={() => setCrypto("")}
          onChange={handleDropdownChange}
          options={options}
          placeholder="Select Cryptocurrency"
          rowHeight={40}
          search={{
            onChange: () => {},
            onClear: () => {},
            placeholder: "Search",
            value: "",
          }}
          selected={crypto}
          maxRows={4}
          disabled={loader}
        />
      )}
    </div>
  );
};

export default CryptoSelector;
