import React from "react";
import { Parallax } from "react-parallax";
import classes from "./Suggest.module.css";

const insideStyles = {
  padding: 10,
  color: "white",
  fontSize: "50px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const Suggest = () => {
  return (
    <Parallax
      bgImage="https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      strength={200}
      renderLayer={(percentage) => (
        <div>
          <img
            src="https://images.pexels.com/photos/9069197/pexels-photo-9069197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            style={{
              position: "absolute",
              background: `rgba(0, 0, 0, ${1.5 - percentage})`,
              opacity: 1 - percentage / 1.5,
              right: 0,
              bottom: 0,
              top: 0,
              width: "100%",
              height: "100%",
              transform: `scale(${1 + percentage / 1.3}`,
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
          <div>
            <b>NÖVBƏTİ TURNİRİ SƏN SEÇ</b>
            <br />
            <span className={classes.sugestText}>
              <i>
                Özünə əmin olduğun bacarığın varsa, bacarığını yarışmada sına.
              </i>
              <br />
              <i>Bizə təklifini yaz oyun başlasın</i>
            </span>
          </div>
          <button className={classes.suggestBtn}>Təklif et</button>
        </div>
      </div>
    </Parallax>
  );
};

export default Suggest;
