import { AppProps } from "next/app";
import Head from "next/head";

import "semantic-ui-css/semantic.min.css";

export default ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>go-next.js-playground</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};
