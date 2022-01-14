import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./skill.css";
const Skillsui = (props) => {
  return (
    <div class="circular_container">
      <div className="progress_container">
        <CircularProgressbar
          value={props.value}
          text={`${props.value}%`}
          styles={buildStyles({
            textColor: props.textColor,
            pathColor: props.pathColor
          })}
        />
        <h6>{props.skillName}</h6>
      </div>
    </div>
  );
};

export default Skillsui;
