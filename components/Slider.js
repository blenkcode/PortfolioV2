import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Slider() {
  const data = [
    { url: "/mindscape1.png", id: 1 },
    { url: "/ms11.png", id: 2 },
    { url: "/mindscape3.png", id: 3 },
    { url: "/mindscape4.png", id: 4 },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="container mx-auto flex flex-col justify-center items-center ">
      <Carousel
        className="carousel"
        showThumbs={false} // Désactiver les vignettes par défaut
        selectedItem={selectedIndex}
        onChange={(index) => setSelectedIndex(index)}
      >
        {data.map((slide) => (
          <div key={slide.id}>
            <img
              src={slide.url}
              alt={`Slide ${slide.id}`}
              className="w-full "
            />
          </div>
        ))}
      </Carousel>
      <div className="grid grid-cols-4 gap-5 w-150 2xl:w-200 mt-20">
        {data.map((slide, index) => (
          <div className="flex justify-center items-center">
            {" "}
            <img
              key={slide.id}
              src={slide.url}
              alt={`Thumb ${slide.id}`}
              onClick={() => setSelectedIndex(index)}
              className={`w-60 h-auto  m-2 border-2 ${
                index === selectedIndex
                  ? "border-violet-400"
                  : "border-transparent"
              } cursor-pointer`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
