import "../styles/globals.css";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Background from "../components/Background";
import { MainRefProvider } from "../MainRefContext";
import TransitionWrapper from "../utils/TransitionWrapper";

function App({ Component, pageProps, router }) {
  const [mainRef, setMainRef] = useState(null);

  return (
    <MainRefProvider>
      <Head>
        <link rel="icon" href="/logovm.png" className="rounded-full" />
        <title>Valentin MOR</title>
      </Head>

      <Header mainRef={mainRef} />
      <TransitionWrapper>
        <Background mainRef={mainRef}></Background>

        <Component key={router.route} {...pageProps} setMainRef={setMainRef} />
      </TransitionWrapper>
    </MainRefProvider>
  );
}

export default App;
