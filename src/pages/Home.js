import React, { useEffect } from "react";
import "./home.css";

import boshliq from "../images/boshliq.jpg";
import chapqol from "../images/chap qol.jpg";
import ongqol from "../images/ong qol.jpg";
import dilmurod from "../images/dilmurod.jpg";
import sardor from "../images/sardor.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="home">
        <h1 className="hero_h1">Welcome to our School</h1>
        <Link className="explore" to="/about">
          Explore <div className="icn">&#x279A;</div>
        </Link>
      </div>
      <div className="teachers_main">
        <h1 className="heading">Teachers</h1>

        <div className="teachers">
          <div className="card">
            <img src={boshliq} alt="" />
            <div className="conent">
              <h1>Nurmatova Shakhnoza Kodirovna</h1>
              <h3>principal</h3>
              <h5>working for a 1years</h5>
            </div>
          </div>
          <div className="card">
            <img src={ongqol} alt="" />
            <div className="conent">
              <h1>Atakulova Rushana Rafikovna</h1>
              <h3>councelor</h3>
              <h5>working for a 1years</h5>
            </div>
          </div>
          <div className="card">
            <img src={dilmurod} alt="" />
            <div className="conent">
              <h1>Xojimurodov Dilmurod Obidjonovich</h1>
              <h3>councelor</h3>
              <h5>working for a 1years</h5>
            </div>
          </div>
          <div className="card">
            <img src={sardor} alt="" />
            <div className="conent">
              <h1>Sulaymanov Sardor Abdurashid o'gli</h1>
              <h3>dean</h3>
              <h5>working for a 1years</h5>
            </div>
          </div>
          <div className="card">
            <img src={chapqol} alt="" />
            <div className="conent">
              <h1>Achilova Barno Alijanova</h1>
              <h3>councelor</h3>
              <h5>working for a 1years</h5>
            </div>
          </div>
        </div>
        <div className="learning_enviroment">
          <div className="content_enviroment">
            <h1 className="head_learn">LEARNING ENVIROMENT</h1>
            <p className="paragraph_learn">
              14-School, endowed with a singular infrastructure of campuses, is
              situated in a pastoral environment deeply connected to both nature
              and the world’s cultural and economic center, Balikchi city.
            </p>
          </div>
        </div>

        <div className="map">
          <h1 className="map_h1">OUR LOCATION</h1>
          <div className="frame_div">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d753.8710819493141!2d71.8524869008026!3d40.90512530400094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb5a2b7e770683%3A0xae514522837f78a3!2sSecondary%20school%20%E2%84%9614!5e0!3m2!1suz!2s!4v1699018946445!5m2!1suz!2s"
              width={1000}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map_frame"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
