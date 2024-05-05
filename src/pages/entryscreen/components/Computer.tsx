import React, { useState } from "react";
import "./Computer.scss";

import Box from '../assets/Computer.png';
import Screen from '../assets/Screen.png';
import ScreenBright from '../assets/ScreenBright.png';
import Keyboard from '../assets/Keyboard.png';

export interface ComputerProps {
  variant: string;
}

const Computer = (props: ComputerProps) => {
      // State to track whether the screen is bright or not
  const [isScreenBright, setIsScreenBright] = useState(false);

  // Toggle the screen brightness when variant changes
  React.useEffect(() => {
    setIsScreenBright(props.variant === "on");
  }, [props.variant]);

  return (
    <div className="computer-container">
        <div className="computer">
            <img src={ScreenBright} alt=""/>
            <img src={Box} alt="" />
            <img src={Keyboard} alt="" />
        </div>
        <div className="computer">
            <img src={Screen} alt="" className="screen" style={{ opacity: isScreenBright ? 0 : 1 }} />
            <img src={Box} alt="" style={{ opacity: isScreenBright ? 0 : 1 }}/>
            <img src={Keyboard} alt="" style={{ opacity: isScreenBright ? 0 : 1 }}/>
        </div>
        <div className="gradient"></div>
    </div>
  )
};

export default Computer;