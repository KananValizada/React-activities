import React from "react";
import classes from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGooglePlusSquare,
  faInstagram,
  faYoutubeSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Typical from "react-typical";
import Particles from "react-particles-js";

export default function Profile() {
  return (
    <div className={classes.profileContainer}>
      <div className={classes.profileParent}>
        <div className={classes.profileDetails}>
          <div className={classes.colz}>
            <div className={classes.colzIcon}>
              <a href="#">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faGooglePlusSquare} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faYoutubeSquare} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
          <div className={classes.profileDetailsName}>Hello I am Kanan</div>
          <div className={classes.profileDetailsRole}>
            <span className={classes.primaryText}>
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev ",
                    1000,
                    "React/Redux Dev",
                    1000,
                    "Front-End Developer",
                    1000,
                    "MERN Stack Dev",
                    1000,
                  ]}
                />
              </h1>
              <span className={classes.profileRoleTagline}>
                Knack of building applications with front end operations.
              </span>
            </span>
          </div>
          <div className={classes.profileOptions}>
            <button className={classes.btn}> Hire me</button>
            <a href="#">
              <button className={classes.btn}>Get Resume</button>
            </a>
          </div>
        </div>
        <div className={classes.profilePicture}>
          <div className={classes.profilePictureBack}></div>
        </div>
      </div>
    </div>
  );
}
