import React from "react";
import "./contact.css";
function Contact() {
  const reload = () => {
    window.location.reload(false);
  };
  return (
    <div className="main_contact">
      <div className="contact_head">
        <div className="anti_bg">
          <h3 className="school_name">SCHOOL-14</h3>
          <h1 className="contact_head_h1">CONTACT WITH US</h1>
        </div>
      </div>

      <div className="form">
        <div className="form_head">
          <h3 className="enquiry">ENQUIRY FORM</h3>
          <h1 className="enquiry_h1">CONTACT OUR OFFICE</h1>
        </div>
        <div className="main_form">
          <div className="form_div">
            <div className="inp_div">
              <div className="name_inp">
                First Name<span className="star">*</span>
              </div>
              <input type="text" placeholder="First Name" />
            </div>
          </div>
          <div className="form_div">
            <div className="inp_div">
              <div className="name_inp">
                Second Name<span className="star">*</span>
              </div>
              <input type="text" placeholder="Second Name" />
            </div>
          </div>
          <div className="form_div">
            <div className="inp_div">
              <div className="name_inp">
                Email address<span className="star">*</span>
              </div>
              <input type="email" placeholder="Email Address" />
            </div>
          </div>
          <div className="form_div">
            <div className="inp_div">
              <div className="name_inp">
                Enquiry<span className="star">*</span>
              </div>
              <input type="text" placeholder="Enquiry" />
            </div>
          </div>
          <div className="btn_div">
            <button className="btn_send" onClick={reload}>
              SEND
            </button>
          </div>
        </div>
      </div>

      <div className="location">
        <div className="location_head">
          <h1>CONTACT US</h1>
        </div>
        <div className="contact_inf">
          <div className="inf">
            <h1>Location</h1>
            <h4>30 Avesto Mfy</h4>
            <h4>Balikchi City</h4>
          </div>
          <div className="inf">
            <h1>Contact Us</h1>
            <h4>&#x260F; +998 97 991 0380</h4>
            <h4 className="email_dir">&#9993; nurmatovashaxnoza.school14@gmail.com</h4>
          </div>
          <div className="inf">
            <h1>Reception Hours</h1>
            <h4>8:15am – 4:15pm Monday – Friday</h4>
          </div>
        </div>
      </div>

      <div className="newsletter">
        <h1>Subscribe to Our Newsletter</h1>
        <input type="email" placeholder="Your Email" />
        <div className="btn_div">
          <button className="btn_send" onClick={reload}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
