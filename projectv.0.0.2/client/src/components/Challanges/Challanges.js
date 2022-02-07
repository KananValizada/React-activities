import React from "react";
import classes from "./Challanges.module.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${classes.slickNext}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${classes.slickPrev}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const Challanges = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={classes.challanges}>
      <div className={classes.challangesHeader}>
        <h1>AKTİV TURNİRLƏR</h1>
        <button>Hamısına bax</button>
      </div>
      <Slider {...settings}>
        <div className={classes.challengeSlideItem}>
          <div className={classes.challengeSlideImgBack}>
            <div className={classes.challengeSlideImg}></div>
          </div>
          <div className={classes.challengeSlideContent}>
            <h2>STOL ÜSTÜ TENNİS</h2>
            <h4>
              1 Fevral 2020 - 15 Fevral 2020
              <br />
              <br />
              <span>10 AZN</span>
            </h4>
            <Link to="/challanges/1">Daha ətraflı</Link>
          </div>
        </div>
        <div className={classes.challengeSlideItem}>
          <div className={classes.challengeSlideImgBack}>
            <div className={classes.challengeSlideImg2}></div>
          </div>
          <div className={classes.challengeSlideContent}>
            <h2>ŞAHMAT</h2>
            <h4>
              1 Fevral 2020 - 07 Fevral 2020
              <br />
              <br />
              <span>5 AZN</span>
            </h4>
            <button>Daha ətraflı</button>
          </div>
        </div>
        <div className={classes.challengeSlideItem}>
          <div className={classes.challengeSlideImgBack}>
            <div className={classes.challengeSlideImg3}></div>
          </div>
          <div className={classes.challengeSlideContent}>
            <h2>FOTO MÜSABİQƏ</h2>
            <h4>
              12 Fevral 2020 - 28 Fevral 2020
              <br />
              <br />
              <span>10 AZN</span>
            </h4>
            <button>Daha ətraflı</button>
          </div>
        </div>
        <div className={classes.challengeSlideItem}>
          <div className={classes.challengeSlideImgBack}>
            <div className={classes.challengeSlideImg}></div>
          </div>
          <div className={classes.challengeSlideContent}>
            <h2>MOCK</h2>
            <h4>
              1 Fevral 2020 - 15.02.2020
              <br />
              <br />
              <span>10 AZN</span>
            </h4>
            <button>Daha ətraflı</button>
          </div>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Challanges;
