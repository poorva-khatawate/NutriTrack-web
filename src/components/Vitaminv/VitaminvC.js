import React,{useEffect} from "react";
import vitaminC_iconv from "./assests/images/VitaminC.jpg";
import vitaminC_icon1v from "./assests/images/VitaminC_head_cleanup.jpg";
import "./VitaminvC.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const VitaminvC = () => {
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <><Navbar /><div className="vitaminC-container-v">
      <div className="vitaminC-inner-container-v">
        <p className="vitaminC-heading-v">Vitamin C </p>
        <div className="image-container-vitaminC-v">
          <img src={vitaminC_icon1v} alt="" className="image_vitaminC-v" />
        </div>
      </div>

      <div className="vitaminC-information-v">
        <h1 className="heading-vitaminC-v">
          Diseases Caused by Vitamin C Deficiency
        </h1>
        <p className="vitaminC-deficiency-text-v">
          Vitamin C deficiency can lead to scurvy, a disease characterized by
          fatigue, inflammation of the gums, joint pain, and poor wound healing.
          <br />
          <br />
          Severe vitamin C deficiency can result in anemia, a condition in which
          the body lacks enough healthy red blood cells to carry adequate oxygen
          to the body's tissues.
        </p>
        <br />
        <br />
        scurvy most commonly affects babies, children and older adults who don’t
        get enough vitamin C in their diet. Risk factors for developing the
        condition include:
        <br />
        <br />
        <ul className="vitamin_list-v">
          <li>Not having access to fresh fruits or vegetables.</li>
          <li>
            Eating very little due to medical treatments that make you feel sick
            (such as ) or an eating disorder (such as anorexia ).
          </li>
          <li>
            Smoking , which reduces the amount of vitamin C your body absorbs
            from food.
          </li>
          <li>Having a drug or alcohol dependency that affects your diet.</li>
          <li>
            Having a poor diet during your pregnancy or while breastfeeding
            (chestfeeding).
          </li>
          <li>Having a restrictive diet or food allergies</li>
          <li>type 1 diabetes inflammatory bowel disease</li>
        </ul>
        <br />
        <br />

        <h1 className="heading-vitaminC-v">Benefits</h1>
        <p className="vitaminC-benefits-text-v">
          Vitamin C, also known as ascorbic acid, is a water-soluble vitamin
          that plays a crucial role in many bodily functions. It is essential
          for the growth, development, and repair of all body tissues.
          <br />
          <br />
          Vitamin C is an antioxidant that helps protect cells from damage and
          supports the immune system.
          <br />
          <br />
          It is also necessary for the synthesis of collagen, a protein that is
          vital for wound healing and maintaining the health of your skin,
          bones, and joints.
          <br />
          <br />
          Other benefits of vitamin C include its ability to enhance the
          absorption of iron from plant-based foods and its potential role in
          reducing the risk of chronic diseases such as heart disease and
          certain cancers.
          <br />
          <br />
          Vitamin C deficiency can lead to scurvy, a disease characterized by
          fatigue, inflammation of the gums, joint pain, and poor wound healing.
          <br />
          <br />
          Severe vitamin C deficiency can result in anemia, a condition in which
          the body lacks enough healthy red blood cells to carry adequate oxygen
          to the body's tissues.
        </p>
        <br />
        <br />
        <h1 className="heading-vitaminC-v">Sources</h1>
        <div className="image-container-vitaminC-middle-v">
          <img src={vitaminC_iconv} alt="" className="image_vitaminC" />
        </div>

        <p className="vitaminC-sources-text-v">
          Vitamin C is found in a variety of foods, particularly fruits and
          vegetables. Some of the best food sources of vitamin C include:
          <br />
          <br />
          <ul className="vitamin_list-v">
            <li>Oranges</li>
            <li>Strawberries</li>
            <li>Kiwifruit</li>
            <li>Bell peppers</li>
            <li>Broccoli</li>
            <li>Tomatoes</li>
            <li>Spinach</li>
            <li>Kale</li>
            <li>Guava</li>
            <li>Papaya</li>
            <li>Mango</li>
            <li>Pineapple</li>
            <li>Watermelon</li>
          </ul>
          <br />
          <br />
          It's important to note that vitamin C is sensitive to light, air, and
          heat, so it's best to consume vitamin C-rich foods raw or minimally
          cooked to retain their nutritional value.
        </p>
      </div>
      <div className="last-vitcv">
        <h2>Know more about Vitamin C intake<span className="span-last-c">&#8594;</span></h2>
        <Link className="link-to-vitc" to="/vitaminC">Click Here</Link>
      </div>
    </div></>
  );
};

export default VitaminvC;
