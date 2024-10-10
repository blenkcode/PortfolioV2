import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Slider({ data }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <Carousel
        className="carousel"
        showThumbs={false} // Désactiver les vignettes par défaut
        selectedItem={selectedIndex}
        onChange={(index) => setSelectedIndex(index)}
      >
        {data.map((slide) => (
          <div key={slide.id}>
            <img src={slide.url} alt={`Slide ${slide.id}`} className="w-full" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
