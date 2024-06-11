import React ,{ useEffect }from "react";
import "./Vitaminv.css";
import vitaminvA from "./assests/images/VitaminAMain.png";
import vitamin_icon1v from "./assests/images/Vitamin.jpg";
import vitaminvB from "./assests/images/VitaminBMain.jpg";
import vitaminvC from "./assests/images/VitaminCMain.jpg";
import vitaminvD from "./assests/images/VitaminD_outerjpg.jpg";
import vitaminvE from "./assests/images/vitaminE_outer2.jpg";
import vitaminvK from "./assests/images/Vitamin-K-outer.jpg";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const Vitaminv = () => {
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <><Navbar /><div className="vitaminv-container">
      <div className="heading-v">Vitamins</div>
      <p className="header-text-v">
        Vitamin deficiency occurs when your body doesn't get enough of a particular vitamin to maintain proper health and function. Each vitamin plays a unique role in the body, such as supporting immune function, aiding in energy
        production, and promoting healthy skin and vision. When you lack certain vitamins,
        you may experience a range of symptoms depending on the specific deficiency. Vitamin deficiencies can arise due to poor dietary choices, underlying health conditions, or factors that impair nutrient absorption, such as certain medications or digestive disorders.
      </p>
      <div className="sub_title-v">
        <div className="image_container-v">
          <img src={vitamin_icon1v} alt="" className="image_top-v" />
        </div>
      </div>
      <div className="grid-container-v">
        <Link className="a-v" to="/vitaminvA">
          <div>
            <img className="sub_image-v" src={vitaminvA} alt="" />
            <p className="text-v">
              Understanding Vitamin A Deficiency
              <br /> Sources and Solutions
            </p>
          </div>
        </Link>
        <Link className="a-v" to="/vitaminvB">
          <div>
            <img className="sub_image-v" src={vitaminvB} alt="" />
            <p className="text-v">
              Understanding Vitamin B Deficiency
              <br /> Sources and Solutions
            </p>
          </div>
        </Link>

        <Link className="a-v" to="/vitaminvC">
         
          <div>
            <img className="sub_image-v" src={vitaminvC} alt="" />
            <p className="text-v">
              Understanding Vitamin C Deficiency
              <br /> Sources and Solutions
            </p>
          </div>
        </Link>

        <Link className="a-v" to="/vitaminvD">
          <div>
            <img className="sub_image-v" src={vitaminvD} alt="" />
            <p className="text-v">
              Understanding Vitamin D Deficiency
              <br /> Sources and Solutions
            </p>
          </div>
        </Link>

        <Link className="a-v" to="/vitaminvE">
          {" "}
          <div>
            <img className="sub_image-v" src={vitaminvE} alt="" />
            <p className="text-v">
              Understanding Vitamin E Deficiency
              <br /> Sources and Solutions
            </p>
          </div>
        </Link>

        <Link className="a-v" to="/vitaminvK">
          {" "}
          <div>
            <img className="sub_image-v" src={vitaminvK} alt="" />
            <p className="text-v">
              Understanding Vitamin K Deficiency
              <br /> Sources and Solutions
            </p>
          </div>
        </Link>
      </div>
    </div></>
  );
};

export default Vitaminv;
