import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <div className={classes.NavbarLogo}>
        <FontAwesomeIcon icon={faFire} /> Challange Me
      </div>
      <ul className={classes.NavbarMenu}>
        <li>Yarışlar</li>
        <li>Haqqımızda</li>
        <li>Daxil ol</li>
      </ul>
    </div>
  );
};

export default Navbar;
