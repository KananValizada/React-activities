import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [show, setShow] = useState(false);
  const [home, setHome] = useState(false);
  const [skills, setSkills] = useState(false);
  const [proj, setProj] = useState(false);
  const [contacts, setContact] = useState(false);
  const q = window.matchMedia("(max-width: 768px)").matches;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      var scrolls = window.scrollY;
      if (q) {
        if (scrolls > 0 && scrolls < 360) {
          navhome();
        } else if (scrolls > 361 && scrolls < 1330) {
          navskills();
        } else if (scrolls > 1331 && scrolls < 1954) {
          navproj();
        } else {
          navcontact();
        }
      } else {
        if (scrolls > 0 && scrolls < 98) {
          navhome();
        } else if (scrolls > 99 && scrolls < 445) {
          navskills();
        } else if (scrolls > 446 && scrolls < 1091) {
          navproj();
        } else {
          navcontact();
        }
      }
    });
  }, [q]);

  function showbtn() {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }
  function navhome() {
    setHome(true);
    setSkills(false);
    setProj(false);
    setContact(false);
    setShow(false);
  }
  function navskills() {
    setHome(false);
    setSkills(true);
    setProj(false);
    setContact(false);
    setShow(false);
  }
  function navproj() {
    setHome(false);
    setSkills(false);
    setProj(true);
    setContact(false);
    setShow(false);
  }
  function navcontact() {
    setHome(false);
    setSkills(false);
    setProj(false);
    setContact(true);
    setShow(false);
  }
  return (
    <div className="header">
      <div className="header_left">
        <h3>
          &lt; Kanan <span style={{ color: "#4070F4" }}>Vali</span>zada&gt;
        </h3>
      </div>

      <div className="header_right">
        <Link to="home" smooth={true} duration={900}>
          <h5 className={home ? "nav-active" : ""} onClick={() => navhome()}>
            home
          </h5>
        </Link>
        <Link to="skills" smooth={true} duration={900}>
          <h5
            className={skills ? "nav-active" : ""}
            onClick={() => navskills()}
          >
            skills
          </h5>
        </Link>
        <Link to="projects" smooth={true} duration={900}>
          <h5 className={proj ? "nav-active" : ""} onClick={() => navproj()}>
            projects
          </h5>
        </Link>
        <Link to="contact" smooth={true} duration={900}>
          <h5
            className={contacts ? "nav-active" : ""}
            onClick={() => navcontact()}
          >
            contact
          </h5>
        </Link>
      </div>

      <div className="toggleButton">
        <button
          className="toggleButton_bg"
          style={{ outline: "none", border: "none", background: "transparent" }}
          onClick={showbtn}
        >
          {show ? (
            <i
              className="fa fa-times"
              style={{ fontSize: "25px", color: "red" }}
            ></i>
          ) : (
            <i
              className="fa fa-bars"
              style={{ fontSize: "25px", color: "#4c75f2" }}
            ></i>
          )}
        </button>
      </div>

      <div className={show ? "show" : "mobile_view"}>
        <Link to="home" smooth={true} duration={900}>
          <h5 className={home ? "nav-active" : ""} onClick={() => navhome()}>
            home
          </h5>
        </Link>
        <Link to="skills" smooth={true} duration={900}>
          <h5
            className={skills ? "nav-active" : ""}
            onClick={() => navskills()}
          >
            skills
          </h5>
        </Link>
        <Link to="projects" smooth={true} duration={900}>
          <h5 className={proj ? "nav-active" : ""} onClick={() => navproj()}>
            projects
          </h5>
        </Link>
        <Link to="contact" smooth={true} duration={900}>
          <h5
            className={contacts ? "nav-active" : ""}
            onClick={() => navcontact()}
          >
            contact
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default Header;
