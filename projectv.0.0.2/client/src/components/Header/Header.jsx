import React from "react";
import { Parallax, Background } from "react-parallax";
import image1 from "../../assets/header2.jpg";
import image2 from "../../assets/pingpong2.jpg";
import classes from "./Header.module.css";

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const Header = () => {
  return (
    <div>
      <Parallax bgImage={image1} strength={500}>
        <div style={{ height: 600 }} className={classes.header}>
          <div className={classes.headerTitle}>
            <p>Yarış, Qazan, Əylən</p>
            <h1>STOLÜSTÜ TENNİS</h1>
            <p>Qeydiyyat başlayıb</p>
            <button className={classes.headerButton}>İndi Qoşul</button>
          </div>
        </div>
      </Parallax>
      <div className={classes.headerImg}></div>
    </div>
  );
};

export default Header;
