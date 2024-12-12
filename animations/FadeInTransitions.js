import gsap from "gsap";

export const createEnterTimeline = () => {
  const timeline = gsap.timeline();

  // Animate title
  timeline.fromTo(
    ".animate-title",
    { visibility: "hidden", opacity: 0, y: 30 },
    {
      opacity: 1,
      visibility: "visible",
      y: 0,
      duration: 0.9,
      ease: "power1.inOut",
    },
    "0"
  );

  timeline.fromTo(
    ".animate-button",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.9,

      ease: "power3.inOut",
    },
    "0"
    // Start slightly before previous animation ends
  );
  // Animate items
  timeline.fromTo(
    ".animate-item",
    {
      visibility: "hidden",
      opacity: 0,

      y: 30,
    },
    {
      visibility: "visible",
      opacity: 1,
      y: 0,
      duration: 0.9,

      ease: "power3.inOut",
    },
    "0"
    // Start slightly before previous animation ends
  );
  timeline.fromTo(
    ".animate-widget",
    {
      visibility: "hidden",
      opacity: 0,
    },
    {
      visibility: "visible",
      opacity: 1,

      duration: 0.9,

      ease: "power3.inOut",
    },
    "0"
    // Start slightly before previous animation ends
  );
  timeline.fromTo(
    ".animate-item",
    {
      visibility: "hidden",
      opacity: 0,
    },
    {
      visibility: "visible",
      opacity: 1,

      duration: 0.9,

      ease: "power3.inOut",
    },
    "0"
    // Start slightly before previous animation ends
  );
  timeline.fromTo(
    ".animate-bgg",
    {
      visibility: "hidden",
      opacity: 0,
    },
    {
      visibility: "visible",
      opacity: 1,

      duration: 0.9,

      ease: "power3.inOut",
    },
    "0"
    // Start slightly before previous animation ends
  );
  timeline.fromTo(
    ".animate-itemLeft",
    {
      visibility: "hidden",
      opacity: 0,

      x: "-150",
    },
    {
      visibility: "visible",
      opacity: 1,
      x: 0,
      duration: 1.2,

      ease: "power3.inOut",
    },
    "0"
    // Start slightly before previous animation ends
  );
  timeline.fromTo(
    ".animate-itemRight",
    {
      visibility: "hidden",
      opacity: 0,

      x: "150",
    },
    {
      visibility: "visible",
      opacity: 1,
      x: 0,
      duration: 1.2,

      ease: "power3.inOut",
    },
    "0"
    // Start slightly before previous animation ends
  );

  return timeline;
};
