import React from "react";
import "./Label.scss";

export interface LabelProps {
  label: string;
}

const Label = (props: LabelProps) => {
  return (
    <div className="label">
        {props.label}
    </div>
  )
};

export default Label;