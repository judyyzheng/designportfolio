// Display.tsx
import React from "react";
import "./Display.scss"; // Import your CSS file

interface Artwork {
  id: number;
  title: string;
  image: string;
  description: string;
  variant?: string;
}

interface DisplayProps {
  artwork: Artwork[];
}

const Display: React.FC<DisplayProps> = ({ artwork }) => {
  return (
    <div className="display-container">
      {artwork.map((artworkPiece) => (
        <div 
          key={artworkPiece.id} 
          className={artworkPiece.variant === "primary" ? "artwork-card" : "artwork-card-secondary"}
        >
          <img src={artworkPiece.image} alt={artworkPiece.title} />
          <h3>{artworkPiece.title}</h3>
          <p>{artworkPiece.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Display;
