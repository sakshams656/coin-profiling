import AssetsImg from "@public/images";

export const cryptoData = [
  { name: "PEPE", fullName: "Pepe", price: "₹1,21,29,05,59,875...", change: 90.31, icon: AssetsImg.ic_pepe, isPositive: true },
  { name: "PSG", fullName: "Paris Saint Germain Fan Token", price: "₹1,21,298.88", change: -12.66, icon: AssetsImg.ic_pepe, isPositive: false },
  { name: "ETH", fullName: "Ethereum", price: "₹1,89,613.00", change: 14.31, icon: AssetsImg.ic_pepe, isPositive: true },
  { name: "AAVE", fullName: "Aave", price: "₹1,21,298.88", change: 100.31, icon: AssetsImg.ic_pepe, isPositive: true },
  { name: "BNB", fullName: "Binance", price: "₹1,21,298.88", change: 0.31, icon: AssetsImg.ic_pepe, isPositive: true },
  { name: "USDT", fullName: "Tether", price: "₹313.26", change: -1.66, icon: AssetsImg.ic_pepe, isPositive: false },
];

export interface CryptoItem {
  name: string;
  fullName: string;
  price: string;
  change: number;
  icon: string;
  isPositive: boolean;
}