import gsap from "gsap";

export const createExitTimeline = () => {
  const timeline = gsap.timeline();

  timeline

    .to(
      ".animate-itemRight",
      {
        opacity: 0,
        y: -30,
        duration: 0.3,

        ease: "power3.inOut",
      },
      "0"
    ) // Commence à 0
    .to(
      ".animate-button",
      {
        opacity: 0,
        duration: 0.3,

        ease: "power3.inOut",
      },
      "0"
    ) // Commence à 0
    .to(
      ".animate-bgg",
      {
        duration: 0.3,
        opacity: 0,
        ease: "power3.inOut",
      },
      "0"
    )
    .to(
      ".animate-itemLeft",
      {
        opacity: 0,
        y: -30,
        duration: 0.3,

        ease: "power3.inOut",
      },
      "0"
    ) // Commence à 0

    .to(
      ".animate-title",
      {
        opacity: 0,
        y: 30,
        duration: 0.3,

        ease: "power3.inOut",
      },
      "0"
    ) // Commence à 0
    .to(
      ".animate-item",
      {
        opacity: 0,
        y: 30,
        duration: 0.3,

        ease: "power2.inOut",
      },
      "0"
    ) // Commence à 0
    .to(
      ".animate-widget",
      {
        opacity: 0,

        duration: 0.3,

        ease: "power2.inOut",
      },
      "0"
    );

  return timeline;
};
