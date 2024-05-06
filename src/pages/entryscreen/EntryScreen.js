// App.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EntryScreen.scss"; // Import your global styles

import Computer from './components/Computer.tsx';
import PowerOn from './components/PowerOn.tsx';

const EntryScreen = () => {
  // State to track whether the screen is bright or not
  const [computerVariant, setComputerVariant] = useState("off");
  const [showEntryScreen, setShowEntryScreen] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  // Function to handle setting the computer variant and fading the entry screen away
  const handleSetComputerVariant = (variant) => {
    setComputerVariant(variant);
    setTimeout(() => {
      setFadeOut(true); // Start the fade-out animation after the delay
      setTimeout(() => {
        setShowEntryScreen(false); // Hide the entry screen after the fade-out animation
        navigate("/home");
      }, 1000); // Hide the entry screen after 1 second (same duration as the fade-out animation)
    }, 1500); // Wait for 3 seconds before starting the fade-out animation
  };

  return showEntryScreen ? (
    <div className="entryscreen-container">
      <div className={`entry-screen ${fadeOut ? "fade-out" : ""}`}>
        <PowerOn message="Hello" setComputerVariant={handleSetComputerVariant}/>
        <Computer variant={computerVariant}/>
        {fadeOut && <div className="fade-out-overlay"></div>}
      </div>
    </div>
  ) : null;
};

export default EntryScreen;
