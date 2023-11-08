import React, {Component} from "react";
import "./Slide.scss";
import Label from './Label/Label.tsx';

export interface SlideProps {
  label: string;
  elements: SlideElement[];
}

class Slide extends Component {
    constructor(props) {
        super(props);
    }
  const items = this.props.elements.map((e) =>  <div className="el">{e}</div>)
  return (
    <>
        <Label label={props.label}/>
    </>
  )
};

class SlideElement extends Component {
    render() {
        return (
        <div>
            "hi"
        </div>
        )
    }
};

export default Slide;