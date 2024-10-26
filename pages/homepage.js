import React from "react";
import NewTitle from "../components/NewTitle";
import { useEffect, useRef } from "react";

import Stack from "../components/Stack";
const homepage = () => {
  const mainRef = useRef(null);
  return (
    <main
      ref={mainRef}
      className="w-full min-h-lvh
     bg-black"
    >
      <div className="flex items-start pt-32 justify-center ">
        {/* <NewTitle mainRef={mainRef} /> */}
      </div>
      <div className="w-full bg-slate-100">
        <ul>
          <li>hello</li>
        </ul>
      </div>
      <Stack />
      <Stack />
      <Stack />
      <Stack />
    </main>
  );
};

export default homepage;
