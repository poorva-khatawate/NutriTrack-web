import React from "react";
import "./Footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";


const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer_content">
        <div className="footer_left">
            <h1 className="footer_icon">Nutritrack</h1>
          <p>
          Nutritrack is a web application designed to help users 
          track their vitamin and mineral intake, manage their diet, and stay informed about the nutritional value of various foods. The platform also offers insights into vitamin deficiencies and provides recommendations for maintaining a balanced diet.
          </p>
          <div className="footer_social_icons">
            <FaXTwitter className="footer_image" alt="" />
            <FaFacebookSquare className="footer_image" alt="" />
            <GrInstagram className="footer_image" alt="" />
          </div>
        </div>
        <div className="footer_center">
          <h1>COMPANY</h1>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer_right">
          <h1>GET IN TOUCH</h1>
          <p>+91794528472</p>
          <p>contactNutritrack@gmail.com</p>
        </div>
      </div>
      <hr />
      <div className="footer_copyright">
        <p>COPYRIGT 2024 Nutritrack.com &#169;- All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
