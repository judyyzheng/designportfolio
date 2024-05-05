import React from "react";
import "./FunkyTag.scss";

export interface FunkyTagProps {
  tags: string[];
}

const FunkyTag = (props: FunkyTagProps) => {
  const FunkyTags = props.tags.map((str, idx) => <li key={idx} className="funky-tag">{str}</li>);
  return (<ul className="funky-tags">{FunkyTags}</ul>)
};

export default FunkyTag;