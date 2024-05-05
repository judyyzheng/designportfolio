import React from "react";
import "./PowerOn.scss";

export interface PowerOnProps {
  setComputerVariant: (variant: string) => void;
}

const PowerOn = ({setComputerVariant}: PowerOnProps) => {
  return (
    <div className="poweron-container" onClick={() => setComputerVariant("on")}>
        <div className="poweron">
        ⏻
        </div>
        <div className="poweron-text">
        power on
        </div>
    </div>
  )
};

export default PowerOn;