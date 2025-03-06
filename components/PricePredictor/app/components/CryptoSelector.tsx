import React from 'react';
import { css } from '@emotion/react';
import { InputDropDown } from "zebpay-ui";
import { CryptoOption, CryptoIcon, CryptoText } from "../styles/emotionStyles"; // Import Emotion styled components

const cryptoOptions = [
  { value: 'bitcoin', label: 'Bitcoin', symbol: 'BTC', iconImage: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
  { value: 'ethereum', label: 'Ethereum', symbol: 'ETH', iconImage: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
  { value: 'litecoin', label: 'Litecoin', symbol: 'LTC', iconImage: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png' },
  { value: 'ripple', label: 'Ripple', symbol: 'XRP', iconImage: 'https://cryptologos.cc/logos/xrp-xrp-logo.png' },
];

interface CryptoSelectorProps {
  crypto: string;
  setCrypto: (crypto: string) => void;
}

const CryptoSelector: React.FC<CryptoSelectorProps> = ({ crypto, setCrypto }) => {
  const selectedCrypto = cryptoOptions.find(option => option.value === crypto);

  const handleDropdownChange = (selectedValue: string) => {
    setCrypto(selectedValue);
  };

  const options = cryptoOptions.map(option => ({
    label: (
      <CryptoOption key={option.value}>
        <CryptoIcon src={option.iconImage} alt={option.label} />
        <CryptoText>
          {`${option.symbol} | ${option.label}`}
        </CryptoText>
      </CryptoOption>
    ),
    value: option.value,
  }));

  const dropdownStyles = css`
    // width: 460rem;
    // max-width: 60rem;
    // height: auto;
    // min-height: 2.375rem;

    // @media (max-width: 768px) {
    //   max-width: 90%;
    // }

    // @media (min-width: 769px) {
    //   max-width: 47rem;
    // }
  `;

  return (
    <div >
      {selectedCrypto && (
        <InputDropDown
         
          onClear={() => setCrypto('')} 
          // enableSearch
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
          // style={{height:"50px"}}
        />
      )}
    </div>
  );
};

export default CryptoSelector;
