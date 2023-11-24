import React from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { Link } from 'react-router-dom';

import "./Card.scss";

import Arrow from "../../assets/icons/arrow.svg";
import Tag from "../Tag/Tag.tsx";

export interface CardProps {
  image: string;
  title: string;
  description: string[];
  date: string;
  tags: string[];
  link: string
}

export interface Date {
  date: string;
}

const Card = (props: CardProps) => {
  const description = props.description ? props.description : [];

  const descriptionItems = description.map((str) => <li>{str}</li>);

  return (
    <>
      <div className="card">
        <Link to={props.link}><button
          className="background"
          style={{ backgroundImage: `url(${props.image})` }}
        >
          <div className="text-background">
            <div className="text">
              <div className="title">{props.title}</div>
              <ul className="description">{descriptionItems}</ul>
              <Tag tags={props.tags} />
            </div>
            <img src={Arrow}></img>
          </div>
        </button>
        </Link>
        <CardTimeline date={props.date} />
      </div>
    </>
  );
};

const CardTimeline = (props: Date) => {
  return (
    <>
      <div className="timeline">
        <div className="line"></div>
        <div className="timeline-text">{props.date}</div>
        <div className="line"></div>
      </div>
    </>
  );
};

export default Card;
