import { useRouter } from "next/router";
import CoinProfiling from "@components/CoinProfiling";

const CoinProfilingPage = () => {
  const router = useRouter();
  const { coinSymbol } = router.query; 
  
  return <CoinProfiling coinSymbol={coinSymbol as string} />; 
};

export default CoinProfilingPage;