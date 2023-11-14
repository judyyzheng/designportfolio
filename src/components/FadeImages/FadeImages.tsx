import React, { useState, useEffect } from 'react';
import './FadeImages.scss'; // Import your CSS file

const FadeImages = ({ images }) => {
  const [isImage1Visible, setIsImage1Visible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsImage1Visible((prev) => !prev);
    }, 2000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-container">
      <img
        className={`fade-img ${isImage1Visible ? 'visible' : 'hidden'}`}
        src={images[0]}
        alt="Image 1"
      />
      <img
        className={`fade-img ${isImage1Visible ? 'hidden' : 'visible'}`}
        src={images[1]}
        alt="Image 2"
      />
    </div>
  );
};

export default FadeImages;
