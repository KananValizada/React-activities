import React, { useState } from "react";
import { Element } from "react-scroll";
import ProjectView from "./ProjectView";
const ProjectUI = (props) => {
  const [view, setView] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [lang, setLang] = useState("");
  const [path, setPath] = useState("");
  const [list, setList] = useState([]);

  function setData(title, lang, desc, path, list) {
    setTitle(title);
    setLang(lang);
    setDesc(desc);
    setPath(path);
    setList(list);
    handleChange();
  }
  function handleChange() {
    setView(!view);
  }

  return (
    <>
      {view ? (
        <ProjectView
          display={view}
          handleChange={handleChange}
          title={title}
          lang={lang}
          desc={desc}
          path={path}
          list={list}
        />
      ) : (
        ""
      )}
      <div
        data-aos="fade-up"
        class="project_width"
        onClick={() =>
          setData(props.title, props.lang, props.desc, props.path, props.list)
        }
      >
        <Element id="project_scroll">
          <div className="project_box">
            <div className="project_img">
              <div className="blackdrop"></div>
              <img src={props.img} alt={props.title} />
            </div>
            <h6>{props.title}</h6>
          </div>
        </Element>
      </div>
    </>
  );
};

export default ProjectUI;
