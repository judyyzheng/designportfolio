import React from "react";

import "./ExperienceCard.scss";

import Tag from "../Tag/Tag.tsx";

export interface ExperienceCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string[];
  date: string;
  tags: string[];
  link: string
}

export interface Date {
  date: string;
}

const ExperienceCard = (props: ExperienceCardProps) => {
  const description = props.description ? props.description : [];

  const descriptionItems = description.map((str) => <li>{str}</li>);

  return (
    <>
      <div className="experience-card">
            <div className="experience-text">
              <div className="title">{props.title}</div>
              <div className="subtitle">{props.subtitle}</div>
              <ul className="description">{descriptionItems}</ul>
              <Tag tags={props.tags} />
            </div>
        <ExperienceCardTimeline date={props.date} />
      </div>
    </>
  );
};

const ExperienceCardTimeline = (props: Date) => {
  return (
    <>
      <div className="experience-timeline">
        <div className="line"></div>
        <div className="timeline-experience-text">{props.date}</div>
      </div>
    </>
  );
};

export default ExperienceCard;
