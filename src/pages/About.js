import React from "react";
import "./about.css";
import students from "../images/students.jpg";
import activities from "../images/activities.jpg";
import avst from "../images/avst.jpg";
import ratio from "../images/ratio.jpg";
import campus from "../images/back2.jpg";
import flags from "../images/flags.jpg";
import about_content from "../images/main.jpg";
import history from "../images/history.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="main_about">
      <div className="header_about">
        <h3 className="school_div">SCHOOL-14</h3>
        <h1 className="head_div_main">About Our School</h1>
      </div>

      <div className="about_content">
        <div className="real_cont">
          <h1 className="main_about_head">ABOUT SCHOOL-14</h1>
          <p className="paragraph_about_head">
            Welcome to School-14, a thriving educational institution with 1500+
            students and 100+ passionate teachers. Our two campuses cater to
            secondary and high school students on one, and primary students on
            the other. With a diverse curriculum covering over 20 subjects, we
            provide a nurturing environment for academic excellence and personal
            growth.
          </p>
        </div>
        <div className="img_about_div">
          <img className="img_about" src={about_content} alt="" />
        </div>
      </div>

      <div className="content_cards">
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
          <h3 className="card_content">4-languages for learn</h3>
        </div>
      </div>

      <div className="about_other">
        <div className="others">
          <div className="other_content">
            <h1 className="left">HISTORY</h1>
            <p>
              School-14 was established in 1965 by the USSR. Since then, it has
              been striving to provide quality education for all students.
            </p>
            <Link className="btn_other" to="/">LEARN MORE</Link>
          </div>
          <img src={history} alt="" />
        </div>
        <div className="others">
          <img src={avst  } alt="" />

          <div className="other_content">
            <h1 className="right">VISION AND VALUES</h1>
            <p>
              At School-14, our vision is to foster academic excellence, while
              nurturing creativity, diversity, and a passion for lifelong
              learning.
            </p>
            <Link className="btn_other" to="/">LEARN MORE</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
