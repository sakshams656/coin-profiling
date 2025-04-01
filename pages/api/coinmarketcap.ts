import type { NextApiRequest, NextApiResponse } from 'next';

type CoinMarketCapResponse = {
    data?: any;
    error?: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<CoinMarketCapResponse>
) {
    try {
        const response = await fetch('https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?symbol=BTC', {
            headers: {
                'X-CMC_PRO_API_KEY': "001b370a-47bd-492e-8582-91e1e25128ae",
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        res.status(200).json({ data });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
