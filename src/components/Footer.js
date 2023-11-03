import React from "react";
import "./footer.css";
import {BsFacebook, BsTwitter, BsLinkedin, BsGithub} from 'react-icons/bs'
function Footer() {
  return (
    <div>

      <footer class="footer-distributed">
        <div class="footer-right">
          <a href="#">
            <BsFacebook class="fa fa-facebook"></BsFacebook>
          </a>
          <a href="#">
            <BsTwitter class="fa fa-twitter"></BsTwitter>
          </a>
          <a href="#">
            <BsLinkedin class="fa fa-linkedin"></BsLinkedin>
          </a>
          <a href="#">
            <BsGithub class="fa fa-github"></BsGithub>
          </a>
        </div>

        <div class="footer-left">
          <p class="footer-links">
            <a class="link-1" href="#">
              Home
            </a>
                <h2>SCHOOL-14</h2>
          </p>

          <p>Affilifyx &copy; 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
