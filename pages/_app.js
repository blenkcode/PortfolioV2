import "../styles/globals.css";
import Head from "next/head";

import "@fortawesome/fontawesome-svg-core/styles.css"; // Charge FontAwesome après

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/VM.png" className="rounded-full" />
        <title>Valentin MOR</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
