import "../styles/globals.css";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ThemeProvider } from "../ThemeContext"; // Charge FontAwesome après
import { MainRefProvider } from "../MainRefContext";
function App({ Component, pageProps }) {
  const [mainRef, setMainRef] = useState(null);
  return (
    <MainRefProvider>
      <ThemeProvider>
        <Head>
          <link rel="icon" href="/logovm.png" className="rounded-full" />
          <title>Valentin MOR</title>
        </Head>
        <Header mainRef={mainRef} />
        <Component {...pageProps} setMainRef={setMainRef} />{" "}
      </ThemeProvider>
    </MainRefProvider>
  );
}

export default App;
