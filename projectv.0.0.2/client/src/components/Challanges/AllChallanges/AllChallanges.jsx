import Accordion from "../../HOC/Accordion/Accordion";
import Navbar from "../../Navbar/Navbar";
import classes from "./AllChallanges.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AllChallanges = () => {
  console.log("ssss");

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <>
      <Navbar bckC="#060506" />
      <div className={classes.allChallanges}>
        <h1 className={classes.allChallangesTitle}>TURNIRLƏR</h1>
        <div className={classes.allChallangesMain}>
          <div className={classes.allChallangesMainFilter}>
            <h2>Çeşidlə</h2>
            <Accordion />
          </div>
          <div className={classes.allChallangesMainItems}>
            <div className={classes.allChallangesMainItemsSort}>
              <select type="select">
                <option value="Sırala">Sırala</option>
                <option value="Ən Yeni">Ən Yeni</option>
                <option value="Qiymət (aşağıdan yuxarıya)">
                  Qiymət (aşağıdan yuxarıya)
                </option>
                <option value="Qiymət (yuxarıdan aşağıya)">
                  Qiymət (yuxarıdan aşağıya)
                </option>
              </select>
            </div>
            <div className={classes.allChallangesMainItemsList}>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllChallanges;
