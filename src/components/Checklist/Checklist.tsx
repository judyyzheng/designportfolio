import React from "react";
import "./Checklist.scss";

export interface ChecklistProps {
  label: string;
}

const Checklist = (props: ChecklistProps) => {
    const [checked, setChecked] = React.useState(true);
  return (
    <div className="checklist">
        <div className="checklist-item">
            <label>
                <input type="checkbox" value="test1" name="test" defaultChecked={checked} onChange={() => setChecked(!checked)}/>
                <span className="checkbox"></span>
            </label>
            <p>{props.label}</p>
        </div>
    </div>
  )
};

export default Checklist;