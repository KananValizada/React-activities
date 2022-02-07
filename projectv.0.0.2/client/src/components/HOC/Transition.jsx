import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  Link,
  useLocation,
} from "react-router-dom";
import "./Transition.css";

function Transition(props) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      {props.children}
    </div>
  );
}

export default Transition;
