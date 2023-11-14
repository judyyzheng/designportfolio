import React, { useState, useEffect } from "react";
import "./Slideshow.scss"; // Import your CSS file

const Slideshow = ({ images, duration }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const restart = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? prevSlide : 0));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, duration); // Change the interval time as needed

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <img src={image.src} alt={`Slide ${index + 1}`} />
          <div className="p4">{image.text}</div>
        </div>
      ))}

      {/* Navigation buttons */}
      <div className="navigation-buttons">
        <button onClick={prevSlide}>&larr;</button>
        <button onClick={nextSlide}>&rarr;</button>
      </div>
      <div className="reset-buttons">
        <button onClick={restart}>start again</button>
      </div>
    </div>
  );
};

export default Slideshow;
