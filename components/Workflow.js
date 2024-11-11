import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import AnimatedButton from "../components/ModularButton";
const About = ({ mainRef }) => {
  const line1ref = useRef(null);
  const line2ref = useRef(null);
  const line3ref = useRef(null);
  const line4ref = useRef(null);
  const line5ref = useRef(null);
  const line6ref = useRef(null);
  const line7ref = useRef(null);
  const line8ref = useRef(null);

  const [isMounted, setIsMounted] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      // Nettoyage des animations existantes
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // Effet pour les animations
  useEffect(() => {
    if (!isMounted || typeof window === "undefined") return;

    // Configuration de la timeline
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef,
          start: "5% top",
          toggleActions: "play none none none",
          markers: true,
          once: false,
        },
      });

      // Animation sequence
      tl.from(line1ref.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .from(
          line2ref.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.7"
        )
        .from(
          line3ref.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.7"
        )
        .from(
          line4ref.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.7"
        )
        .from(
          line5ref.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.7"
        )
        .from(
          line6ref.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.7"
        )
        .from(
          line7ref.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.7"
        )
        .from(
          line8ref.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.7"
        )
        .from(
          imgRef.current,
          {
            x: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.7"
        );
    });

    // Cleanup function
    return () => {
      ctx.revert();
    };
  }, [isMounted, mainRef]);
  return (
    <div className="text-neutral-800 py-28 items-center justify-start text-[3.8vw] flex w-full font-Satoshi font-bold  px-10 relative flex-col">
      <div>Developper</div>
      <div>Create</div>
      <div>Passionate</div>
      <div>Websites</div>
    </div>
  );
};

export default About;
