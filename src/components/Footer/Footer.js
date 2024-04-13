import React from "react";
import "./Footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="flex-container-footer">
        <div>
          <h1>FoodWeb</h1>
        </div>
        <div>
          <h1>Product</h1>
          <ul>
            <li className="footer1">About</li>
            <li className="footer1">Food</li>
            <li className="footer1">Exercise</li>
            <li className="footer1">Apps</li>
            <li className="footer1">Premium</li>
          </ul>
        </div>
        <div>
          <h1>Resources</h1>
          <ul>
            <li className="footer1">Blog</li>
            <li className="footer1">Community</li>
            <li className="footer1">Contact us</li>
            <li className="footer1">Support Center</li>
          </ul>
        </div>
        <div>
          <h1>Company</h1>
          <ul>
            <li className="footer1">Carrers</li>
            <li className="footer1">Peer</li>
          </ul>
        </div>
      </div>
      <div className="flex-box-footer">
        <span>Copyright © 2024 FoodWeb®. All rights reserved. &#124; </span>
        <span> Community Guidlines &#124; </span>
        <span> Privacy Policies &#124; </span>
        <span> Terms of Use</span>
      </div>
      <div className="icons-footer">
        <FaXTwitter />
        <FaYoutube />
        <FaFacebookSquare />
        <GrInstagram />
      </div>
    </div>
  );
};

export default Footer;
