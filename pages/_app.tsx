import type { AppProps } from 'next/app';
import '../styles/home.module.css'; 
import '../styles/global.css'; 
import "zebpay-ui/dist/icons/icons.css"; 
import '../styles/font.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* You can add global layouts or context providers here */}
      <Component {...pageProps} /> {/* This renders the current page (e.g., index.tsx) */}
    </div>
  );
}