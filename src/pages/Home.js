import React, { useEffect } from "react";
import "./home.css";
import Aos from "aos";
import "aos/dist/aos.css";

import boshliq from "../images/boshliq.jpg";
import chapqol from "../images/chap qol.jpg";
import ongqol from "../images/ong qol.jpg";
import dilmurod from "../images/dilmurod.jpg";
import sardor from "../images/sardor.jpg";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="home">
        <h1 className="hero_h1">Welcome to our School</h1>
        <Link className="explore" to="/about">
          Explore <div className="icn">&#x279A;</div>
        </Link>
      </div>
      <div className="teachers_main">
        <h1 className="heading" data-aos="fade-up">
          Teachers
        </h1>

        <div className="teachers" data-aos="fade-up">
          <div className="card">
            <img src={boshliq} alt="" />
            <div className="conent">
              <h1>Boshliq</h1>
              <h3>principal</h3>
              <h5>working for a 1years</h5>
            </div>
          </div>
          <div className="card">
            <img src={ongqol} alt="" />
            <div className="conent">
              <h1>OngQol</h1>
              <h3>councelor</h3>
              <h5>working for a 1years</h5>
            </div>
          </div>
          <div className="card">
            <img src={dilmurod} alt="" />
            <div className="conent">
              <h1>Dilmurod </h1>
              <h3>councelor</h3>
              <h5>working for a 1years</h5>
            </div>
          </div>
          <div className="card">
            <img src={sardor} alt="" />
            <div className="conent">
              <h1>Sardor gangster </h1>
              <h3>dean</h3>
              <h5>working for a 1years</h5>
            </div>
          </div>
          <div className="card">
            <img src={chapqol} alt="" />
            <div className="conent">
              <h1>chap qol</h1>
              <h3>councelor</h3>
              <h5>working for a 1years</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
