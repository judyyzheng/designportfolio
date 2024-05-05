// App.js
import React from "react";
import Display from "./gallerycomponents/Display.tsx";
import "./Gallery.scss"; // Import your global styles

// Assets
import RunningHorse1 from '../../assets/projects/Gallery/running-horse-1.jpg';
import RunningHorse2 from '../../assets/projects/Gallery/running-horse-2.jpg';
import StampedeHorse from '../../assets/projects/Gallery/stampede-horse.jpg';
import StampedeHorseClose from '../../assets/projects/Gallery/stampede-horse-close.jpg';
import TwoHorse1 from '../../assets/projects/Gallery/two-horse-1.jpg';
import TwoHorse2 from '../../assets/projects/Gallery/two-horse-2.jpg';
import FirstStampede from '../../assets/projects/Gallery/first-stampede.jpg';

const Gallery = () => {
  // Sample artwork data
  const artwork = [
    {
      id: 1,
      image: RunningHorse1,
      variant: "secondary"
    },
    {
      id: 2,
      title: "she's a runner, she's a trackstar",
      image: RunningHorse2,
      description: "the final piece",
      variant: "primary"
    },
    {
      id: 3,
      title: "a stampede poster",
      image: StampedeHorse,
      description: "$10K comission piece",
      variant: "primary"
    },
    {
      id: 4,
      image: StampedeHorseClose,
      variant: "secondary"
    },
    {
      id: 5,
      title: "partners in crime pt. I",
      image: TwoHorse1,
      description: "",
      variant: "primary"
    },
    {
      id: 6,
      title: "another horse comission",
      image: FirstStampede,
      description: "circa 2019",
      variant: "primary"
    },
    {
      id: 7,
      title: "partners in crime pt. II",
      image: TwoHorse2,
      description: "",
      variant: "primary"
    },
    // Add more artwork objects as needed
  ];

  return (
    <div className="gallery-container">
      <h1>howdy - 🐴</h1>
      <Display artwork={artwork} />
    </div>
  );
};

export default Gallery;
