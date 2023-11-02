import React from "react";
import "./about.css";
import students from "../images/students.jpg";
import activities from "../images/activities.jpg";
import avst from "../images/avst.jpg";
import ratio from "../images/ratio.jpg";
import campus from "../images/back2.jpg";
import flags from "../images/flags.jpg";

function About() {
  return (
    <div className="main">
      <div className="header_about">
        <h1>About Our School</h1>
      </div>

      <div className="content">
        <div className="card_about">
          <div className="card_div">
            <img className="card_img" src={students} alt="" />
          </div>
          <h3 className="card_content">1500+ students</h3>
        </div>
        <div className="card_about">
          <div className="card_div">
            <img src={activities} alt="" className="card_img" />
          </div>
          <h3 className="card_content">15+ activities</h3>
        </div>
        <div className="card_about">
          <div className="card_div">
            <img src={avst} alt="" className="card_img" />
          </div>
          <h3 className="card_content">600+ students in avvarage class</h3>
        </div>
        <div className="card_about">
          <div className="card_div">
            <img src={ratio} alt="" className="card_img" />
          </div>
          <h3 className="card_content">7:1 students to teacher ratio </h3>
        </div>
        <div className="card_about">
          <div className="card_div">
            <img src={campus} alt="" className="card_img" />
          </div>
          <h3 className="card_content">3 campuses in north and east</h3>
        </div>
        <div className="card_about">
          <div className="card_div">
            <img src={flags} alt="" className="card_img" />
          </div>
          <h3 className="card_content">4languages for learn</h3>
        </div>
      </div>
    </div>
  );
}

export default About;
