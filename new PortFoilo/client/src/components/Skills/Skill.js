import React from "react";
import { Element } from "react-scroll";
import "./skill.css";
import Details from "./SkillsDetails";
import Skillsui from "./skills-UI";
const Skill = () => {
  return (
    <div>
      <br />

      <Element id="skills">
        <h4 className="skill_heading" data-aos="fade-up">
          technical skills
        </h4>
      </Element>

      <br />
      <div className="skills_container" data-aos="fade-right">
        {Details.map((detail, i) => (
          <Skillsui
            key={i}
            skillName={detail.skillName}
            value={detail.value}
            textColor={detail.primaryColor}
            pathColor={detail.pathColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Skill;
