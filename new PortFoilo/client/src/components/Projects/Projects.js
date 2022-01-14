import React, { useState } from "react";
import { Link, Element } from "react-scroll";
import WebProjects from "./WebProjects";
import MobileProjects from "./MobileProjects";
import ProjectUI from "./ProjectUI";
import "./Projects.css";

const Projects = () => {
  const [choosen, setChoosen] = useState(true);

  return (
    <Element id="projects" style={{ position: "relative" }}>
      <br />
      <br />
      <div class="d-flex justify-content-center">
        <h4 data-aos="fade-up" data-aos-delay="50">
          projects
        </h4>
      </div>
      <br />
      <div class="d-flex justify-content-center">
        <div className="project_button">
          <Link to="project_scroll" smooth={true} duration={500}>
            <h4
              className={
                choosen ? "projectContainer__title--active" : undefined
              }
              onClick={() => setChoosen(true)}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              web Projects
            </h4>
          </Link>
          <Link to="project_scroll" smooth={true} duration={500}>
            <h4
              className={
                !choosen ? "projectContainer__title--active" : undefined
              }
              onClick={() => setChoosen(false)}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              mobile Projects
            </h4>
          </Link>
        </div>
      </div>

      <div className="projects_container">
        {choosen
          ? WebProjects.map((project, index) => (
              <ProjectUI
                title={project.title}
                img={project.img}
                desc={project.desc}
                path={project.path}
                lang={project.lang}
                list={project.list}
                key={index}
              />
            ))
          : MobileProjects.map((project, index) => (
              <ProjectUI
                title={project.title}
                img={project.img}
                desc={project.desc}
                path={project.path}
                lang={project.lang}
                list={project.list}
                key={index}
              />
            ))}
      </div>
    </Element>
  );
};

export default Projects;
