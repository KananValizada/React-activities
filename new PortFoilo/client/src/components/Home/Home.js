import React from "react";
import Lottie from "react-lottie";
import hello from "../../assets/hello.svg";
import img from "../../assets/Kanan.jpg";
import animationData from "../../assets/dev.json";
import { Link, Element } from "react-scroll";
import "./Home.css";
const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Element className="container" id="home">
      <div className="row">
        <div className="homeTitle col-md-6 " data-aos="fade-right">
          <div className="titles">
            Hi &nbsp;
            <img src={hello} style={{ height: "20px" }} alt="" />
          </div>
          <div className="title-sub">
            I'm
            <span style={{ color: "#4070F4" }}>&nbsp;Kanan</span>
          </div>

          <h6>
            <span className="typewriter">web and bpm developer.</span>
          </h6>
          <br />
          <div className="btn_container">
            <a
              className="cv_link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1Gpm2mnJ2GSPqSkeoFBgAfC7k2Ob42Dqq/view?usp=sharing"
              style={{ textDecoration: "none" }}
            >
              <div class="snapLeftBtn">
                <span>Download CV</span>
              </div>
            </a>
            <Link to="contact" smooth={true} duration={900}>
              <div class="circleScaleBtn">
                <span>Hire me</span>
              </div>
            </Link>
          </div>
          <br />
          <br />
        </div>
        <div className="col-md-6 text-center" id="layout">
          <div className="img-fluid " data-aos="fade-up">
            <img src={img} alt="KananValizada" className="homeImage" />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Home;
