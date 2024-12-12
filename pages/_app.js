import "../styles/globals.css";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Header from "../components/Header";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Backgroundtrue from "../components/Background";
import { MainRefProvider } from "../MainRefContext";
import TransitionWrapper from "../utils/TransitionWrapper";
import ShaderSceneCopy from "../components/ShaderSceneCopy";
import { Canvas } from "@react-three/fiber";
function App({ Component, pageProps, router }) {
  const [mainRef, setMainRef] = useState(null);
  const backgroundRef = useRef(null);

  return (
    <MainRefProvider>
      <Head>
        <link rel="icon" href="/logovm.png" className="rounded-full" />
        <title>Valentin MOR</title>
      </Head>
      <div
        ref={backgroundRef}
        className="fixed top-0 left-0 w-full h-[250vh] opacity-100 pointer-events-auto"
      >
        <Canvas>
          <ShaderSceneCopy />
        </Canvas>
        <div className="w-full h-full fixed top-0 backgroundd z-10 pointer-events-none"></div>
        <div className="w-full h-full fixed top-0 backgroundd2 z-10 pointer-events-none"></div>
      </div>
      <Header mainRef={mainRef} />
      <TransitionWrapper>
        <Backgroundtrue mainRef={mainRef}></Backgroundtrue>

        <Component key={router.route} {...pageProps} setMainRef={setMainRef} />
      </TransitionWrapper>
    </MainRefProvider>
  );
}

export default App;
