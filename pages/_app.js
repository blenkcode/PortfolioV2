import "../styles/globals.css";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { MainRefProvider } from "../MainRefContext";

function App({ Component, pageProps }) {
  const [mainRef, setMainRef] = useState(null);
  return (
    <MainRefProvider>
      <Head>
        <link rel="icon" href="/logovm.png" className="rounded-full" />
        <title>Valentin MOR</title>
      </Head>
      <Header mainRef={mainRef} />
      <Component {...pageProps} setMainRef={setMainRef} />{" "}
    </MainRefProvider>
  );
}

export default App;
