import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const TransitionWrapper = ({ children }) => {
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    if (children.key !== displayChildren.key) {
      gsap.to(".animate-title", { opacity: 0, y: -50, duration: 1 });
      gsap.to(".animate-item", { opacity: 0, y: -50, duration: 1 }).then(() => {
        setDisplayChildren(children);
        gsap.to(".animate-title", { opacity: 1 });
      });
    }
  }, [children]);
  return <div>{displayChildren}</div>;
};

export default TransitionWrapper;
