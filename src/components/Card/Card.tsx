import React from "react";
import "./Card.scss";

import Arrow from '../../assets/icons/arrow.svg';

export interface CardProps {
  image: string;
  title: string;
  description: string[];
}

const Card = (props: CardProps) => {
  return (
    <>
    <div className="card">
      <button className="background" style={{backgroundImage: `url(${props.image})`}}>
          <div className="text-background">
              <div className="text">
                  <div className="title">{props.title}</div>
                  <ul className="desription">
                      {
                      props.description?.map(str =>
                          <li>{str}</li>)
                      }
                  </ul>
              </div>
              <img src={Arrow}></img>
          </div>
        </button>
        <CardTimeline />
      </div>
    </>
  )
};

const CardTimeline = () => {

  return (
    <>
    <div className="timeline">
      <div className="line"></div>
      <div className="timeline-text">benchmark</div>
      <div className="line"></div>
    </div>
    </>
  )

}

export default Card;