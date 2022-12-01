import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button data-wipe={props.label}>{props.label}</button>;
};

export default Button;