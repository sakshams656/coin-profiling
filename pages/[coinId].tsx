import { useRouter } from "next/router";
import CoinProfiling from "@components/CoinProfiling";

const CoinProfilingPage = () => {
  const router = useRouter();
  const { coinId } = router.query;
  
  return <CoinProfiling coinId={coinId as string} />;
};

export default CoinProfilingPage;