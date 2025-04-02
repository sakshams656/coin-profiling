/// <reference types="@emotion/react/types/css-prop" />
import "zebpay-ui/dist/icons/icons.css";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import * as styles from "@styles/shared/global";
import { toastifyToastStyle } from "@styles/shared/toast";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { getOrCreateStore } from "@utils/redux/createStore";

import store from '../Store';

// const store = getOrCreateStore();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div css={toastifyToastStyle}>
        <ToastContainer limit={3} />
      </div>
      <Global styles={styles.globalStyles} />
      <Component {...pageProps} />
    </Provider>
  );
}
