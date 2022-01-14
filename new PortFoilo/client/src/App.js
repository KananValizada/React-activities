import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skill from "./components/Skills/Skill";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SimpleReactLightbox from "simple-react-lightbox";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    isLoading(false);
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []);

  return loading ? (
    <>
      <div class="loader-wrapper">
        <span class="loader">
          <span class="loader-inner"></span>
        </span>
      </div>
      <div class="area">
        <ul class="circles">
          <li
            style={{ background: "rgba(76, 117, 242, 0.13174509803921569)" }}
          ></li>
          <li
            style={{ background: "rgba(76, 117, 242, 0.13174509803921569)" }}
          ></li>
          <li
            style={{ background: "rgba(76, 117, 242, 0.13174509803921569)" }}
          ></li>
          <li
            style={{ background: "rgba(76, 117, 242, 0.13174509803921569)" }}
          ></li>
          <li
            style={{ background: "rgba(76, 117, 242, 0.13174509803921569)" }}
          ></li>
          <li
            style={{ background: "rgba(76, 117, 242, 0.13174509803921569)" }}
          ></li>
          <li
            style={{ background: "rgba(76, 117, 242, 0.13174509803921569)" }}
          ></li>
          <li
            style={{ background: "rgba(76, 117, 242, 0.13174509803921569)" }}
          ></li>
          <li
            style={{ background: "rgba(76, 117, 242, 0.13174509803921569)" }}
          ></li>
          <li
            style={{ background: "rgba(76, 117, 242, 0.13174509803921569)" }}
          ></li>
        </ul>
      </div>
    </>
  ) : (
    <SimpleReactLightbox>
      <div className="App">
        <div class="area">
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Header />
        <Home />
        <Skill />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </SimpleReactLightbox>
  );
}
