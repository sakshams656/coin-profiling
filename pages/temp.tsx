import { useEffect, useState } from 'react';
import { typography } from 'zebpay-ui';

type CoinData = {
    name: string;
    symbol: string;
};

export default function CryptoPrices() {
    const [cryptoData, setCryptoData] = useState<CoinData[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log("runss-1");
        fetch("/coin-profiling/api/coinmarketcap")
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setError(data.error);
                } else {
                    const formattedData = data.data.data["BTC"].map((coin: any) => ({
                        name: coin.name,
                        symbol: coin.symbol,
                    }));
                    setCryptoData(formattedData);
                }
            })
            .catch(err => setError(err.message));
    }, []);

    if (error) return <p>Error: {error}</p>;

    return (
        <div css={[typography.B5_12_regular]}>
            <h1>Crypto Prices</h1>
            <ul>
                {cryptoData.map((coin, index) => (
                    <li key={index}>
                        {coin.name} ({coin.symbol})
                    </li>
                ))}
            </ul>
        </div>
    );
}