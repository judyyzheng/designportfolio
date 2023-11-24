// App.js
import React from "react";
import Display from "./gallerycomponents/Display.tsx";
import "./Gallery.scss"; // Import your global styles

const Gallery = () => {
  // Sample artwork data
  const artwork = [
    {
      id: 1,
      title: "Artwork 1",
      image: "url_to_image_1.jpg",
      description: "Description for Artwork 1",
    },
    {
      id: 2,
      title: "Artwork 2",
      image: "url_to_image_2.jpg",
      description: "Description for Artwork 2",
    },
    // Add more artwork objects as needed
  ];

  return (
    <div className="app-container">
      <h1>Artwork Gallery</h1>
      <Display artwork={artwork} />
    </div>
  );
};

export default Gallery;
