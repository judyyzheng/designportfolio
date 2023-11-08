import React from "react";
import "./Tag.scss";

export interface Tag {
  tags: string[];
}

const Tag = (props: Tag) => {

  const tags = props.tags.map(str => <li className="tag">{str}</li>);
  return (<ul className="tags">{tags}</ul>)
};

export default Tag;