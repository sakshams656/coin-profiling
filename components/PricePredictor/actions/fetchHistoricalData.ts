// actions/fetchHistoricalData.ts

export const fetchHistoricalData = async (crypto: string, days: string) => {
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=inr&days=${days}`);
    const data = await response.json();
    console.log(data);
    return data.prices;
  } catch (error) {
    console.error('Error fetching data from CoinGecko:', error);
    return [];
  }
};
