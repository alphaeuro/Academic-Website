import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  return (
    <div className="carousel-container">
      <div
        className={`carousel-image carousel-image-${
          currentImage === 0 ? "left" : "center"
        }`}
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      ></div>
      <div
        className={`carousel-image carousel-image-${
          currentImage === 1 ? "center" : "right"
        }`}
        style={{ backgroundImage: `url(${images[currentImage === 0 ? 1 : 0]})` }}
      ></div>
      <div
        className={`carousel-image carousel-image-${
          currentImage === 2 ? "center" : "left"
        }`}
        style={{ backgroundImage: `url(${images[currentImage === 1 ? 2 : 1]})` }}
      ></div>
      <div
        className={`carousel-image carousel-image-${
          currentImage === 3 ? "center" : "right"
        }`}
        style={{ backgroundImage: `url(${images[currentImage === 2 ? 3 : 2]})` }}
      ></div>
      <div
        className={`carousel-image carousel-image-${
          currentImage === 4 ? "center" : "left"
        }`}
        style={{ backgroundImage: `url(${images[currentImage === 3 ? 4 : 3]})` }}
      ></div>
      <div className="carousel-button carousel-button-left" onClick={prevImage}>
        ❮
      </div>
      <div className="carousel-button carousel-button-right" onClick={nextImage}>
        ❯
      </div>
    </div>
  );
};

export default Carousel;