import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = ({ bckC }) => {
  return (
    <div className={classes.Navbar} style={{ backgroundColor: bckC }}>
      <Link to="/" className={classes.NavbarLogo}>
        <FontAwesomeIcon icon={faFire} /> Challange Me
      </Link>

      <ul className={classes.NavbarMenu}>
        <li>Yarışlar</li>
        <li>Haqqımızda</li>
        <li>Daxil ol</li>
      </ul>
    </div>
  );
};

export default Navbar;
