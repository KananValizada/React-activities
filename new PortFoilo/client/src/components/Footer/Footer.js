import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";
import gmail from "../../assets/social/gmail.svg";
import facebook from "../../assets/social/facebook.svg";
import instagram from "../../assets/social/instagram.svg";
import github from "../../assets/social/github.svg";
import linkedin from "../../assets/social/linkedin.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media">
        <a
          classsName="socia-icon"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:kenan.veli@yahoo.com"
        >
          <img src={gmail} alt="" />
        </a>
        <a
          classsName="socia-icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/kenan-velizade-561a94132/"
        >
          <img src={linkedin} alt="" />
        </a>
        <a
          classsName="socia-icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/KananValizada/"
        >
          <img src={github} alt="" />
        </a>
        <a
          classsName="socia-icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/kenan.velizade.399/"
        >
          <img src={facebook} alt="" />
        </a>
        <a
          classsName="socia-icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/k.v.zadeh/"
        >
          <img src={instagram} alt="" />
        </a>
      </div>
      <div className="footer-mail">kenan.veli@yahoo.com</div>
      <div className="footer-nav">
        <Link to="home" smooth={true} duration={900}>
          <h5 className="footer-link">home</h5>
        </Link>
        <Link to="skills" smooth={true} duration={900}>
          <h5 className="footer-link">skills</h5>
        </Link>
        <Link to="projects" smooth={true} duration={900}>
          <h5 className="footer-link">projects</h5>
        </Link>
        <Link to="contact" smooth={true} duration={900}>
          <h5 className="footer-link">contact</h5>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
