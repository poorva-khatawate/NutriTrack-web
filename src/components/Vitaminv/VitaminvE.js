import React,{useEffect} from "react";
import vitaminE_iconv from "./assests/images/vitaminE_inner.avif";
import vitaminE_icon1v from "./assests/images/vitamin_e_head.webp";
import "./VitaminvE.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const VitaminvE = () => {
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <><Navbar /><div className="vitaminE-container-v">
      <div className="vitaminE-inner-container-v">
        <p className="vitaminE-heading-v">Vitamin E </p>
        <div className="image-container-vitaminE-v">
          <img src={vitaminE_icon1v} alt="" className="image_vitaminE-v" />
        </div>
      </div>

      <div className="vitaminE-information-v">
        <h1 className="heading-vitaminE-v">Diseases Caused by Deficiency</h1>
        <p className="vitaminE-deficiency-text-v">
          Vitamin E deficiency is rare but can lead to several health issues,
          including:
          <br />
          <br />
          - Muscle weakness: Vitamin E is essential for maintaining muscle
          health, and deficiency can lead to weakness and coordination problems.
          <br />
          <br />
          - Vision problems: Vitamin E is important for eye health, and
          deficiency may contribute to vision problems, such as retinal
          degeneration.
          <br />
          <br />
          - Impaired immune function: Vitamin E deficiency can weaken the immune
          system, making the body more susceptible to infections.
          <br />
          <br />
          - Nerve damage: Severe vitamin E deficiency can lead to nerve damage,
          which can cause pain, numbness, and muscle weakness.
        </p>
        <br />
        <br />

        <h1 className="heading-vitaminE-v">Benefits</h1>
        <p className="vitaminE-benefits-text-v">
          Vitamin E is a powerful antioxidant that helps protect cells from
          damage. It plays a crucial role in immune function, skin health, and
          vision.
          <br />
          <br />
          Vitamin E also has anti-inflammatory properties and may help protect
          against chronic diseases such as heart disease, cancer, and cognitive
          decline.
        </p>
        <br />
        <br />

        <h1 className="heading-vitaminE-v">Sources</h1>
        <div className="image-container-vitaminE-middle-v">
          <img src={vitaminE_iconv} alt="" className="image_vitaminE-v" />
        </div>
        <p className="vitaminE-sources-text-v">
          Vitamin E is found in a variety of foods, particularly nuts, seeds,
          and vegetable oils. Some food sources of vitamin E include:
          <br />
          <br />
          <ul className="vitamin_list-v">
            <li>Almonds</li>
            <li>Sunflower seeds</li>
            <li>Hazelnuts</li>
            <li>Spinach</li>
            <li>Broccoli</li>
            <li>Avocado</li>
            <li>Wheat germ oil</li>
            <li>Sunflower oil</li>
            <li>Safflower oil</li>
            <li>Peanut butter</li>
          </ul>
          <br />
          <br />
          It's important to include vitamin E-rich foods in your diet to ensure
          you're getting enough of this important nutrient.
        </p>
      </div>
      <div className="last-vitev">
        <h2>Know more about Vitamin E intake<span className="span-last-e">&#8594;</span></h2>
        <Link className="link-to-vite" to="/vitaminE">Click Here</Link>
      </div>
    </div></>
  );
};

export default VitaminvE;
