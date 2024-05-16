import React from "react";
import "./Footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
<<<<<<< HEAD
=======

>>>>>>> 258c8d009250ff0516ac7e760c1d686eed067c6d

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer_content">
        <div className="footer_left">
            <h1 className="footer_icon">Nutritrack</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            quo, omnis est dignissimos animi doloremque facere dolor debitis
            quibusdam libero at aspernatur repellendus. Numquam reiciendis eos
            tempore, consectetur quia commodi!
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
