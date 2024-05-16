import React,{useEffect} from "react";
import vitaminD_iconv from "./assests/images/vitamin-d.webp";
import vitaminD_icon1v from "./assests/images/Vitamin-d-head.avif";
import "./VitaminvD.css";
import { Link } from "react-router-dom";
const VitaminvD = () => {
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);
 
  return (
    <><div className="vitaminD-container-v">
      <div className="vitaminD-inner-container-v">
        <p className="vitaminD-heading-v">Vitamin D </p>
        <div className="image-container-vitaminD-v">
          <img src={vitaminD_icon1v} alt="" className="image_vitaminD-v" />
        </div>
      </div>
      <div className="vitaminD-information-v">
        <h1 className="heading-vitaminD-v">Diseases Caused by Deficiency</h1>
        <p className="vitaminD-deficiency-text-v">
          Vitamin D deficiency can lead to a number of health issues, including:
          <br />
          <br />
          - Rickets: A condition that affects bone development in children,
          leading to soft, weak bones.
          <br />
          <br />
          - Osteomalacia: A condition in adults characterized by softening of
          the bones, which can lead to bone pain, muscle weakness, and an
          increased risk of fractures.
          <br />
          <br />
          - Increased risk of osteoporosis: Vitamin D deficiency can contribute
          to a loss of bone density, increasing the risk of fractures, especially
          in older adults.
        </p>
        <br />
        <br />
        <h1 className="heading-vitaminD-v">Benefits</h1>
        <p className="vitaminD-benefits-text-v">
          Vitamin D, often referred to as the "sunshine vitamin," plays a
          critical role in maintaining overall health. It is essential for
          promoting calcium absorption in the gut, which is necessary for
          maintaining healthy bones and teeth.
          <br />
          <br />
          Vitamin D also helps regulate immune function and reduce inflammation,
          and may play a role in protecting against chronic diseases such as
          diabetes, heart disease, and cancer.
        </p>
        <br />
        <br />
        <h1 className="heading-vitaminD-v">Sources</h1>
        <div className="image-container-vitaminD-middle-v">
          <img src={vitaminD_iconv} alt="" className="image_vitaminD-v" />
        </div>
        <p className="vitaminD-sources-text-v">
          The primary source of vitamin D is sunlight exposure, as the body can
          synthesize vitamin D when the skin is exposed to UV rays. However,
          vitamin D can also be obtained from certain foods and supplements.
          <br />
          <br />
          Some food sources of vitamin D include:
        </p>
        <ul className="vitamin_list-v">
          <li>Fatty fish (such as salmon, mackerel, and tuna)</li>
          <li>Beef liver</li>
          <li>Cheese</li>
          <li>Egg yolks</li>
          <li>Mushrooms</li>
          <li>Fortified foods (such as milk, orange juice, and cereal)</li>
        </ul>
        <br />
        <br />
        <p className="vitaminD-sources-text-v">
          It's important to note that vitamin D deficiency is common, especially
          in regions with limited sunlight exposure or in individuals who have
          darker skin, are older, or are obese.
        </p>
      </div>
      <div className="last-vitdv">
        <h2>Know more about Vitamin D intake<span className="span-last-d">&#8594;</span></h2>
        <Link className="link-to-vitd" to="/vitaminD">Click Here</Link>
      </div>
    </div></>
  );
};

export default VitaminvD;
