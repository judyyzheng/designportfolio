import React from "react";
import "./CircleGraph.scss";

import Circle from '../../assets/icons/circle-gap.svg';

export interface CircleGraphProps {
  label: string;
}

const CircleGraph = (props: CircleGraphProps) => {
  return (
    <div className="CircleGraph">
        <div className="circles">
            <div className="gradient">{props.label}</div>
            <img src={Circle} alt="" />
            <img src={Circle} alt="" />
            <img src={Circle} alt="" />
            <img src={Circle} alt="" />
            <div className="labels">
                <div className="number-label">1</div>
                <div className="number-label">2</div>
                <div className="number-label">3</div>
            </div>
        </div>

    </div>
  )
};

export default CircleGraph;