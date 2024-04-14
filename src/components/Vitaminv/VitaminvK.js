import React,{useEffect} from "react";
import vitaminK_iconv from './assests/images/VitaminK_inner.webp'
import vitaminK_icon1v from "./assests/images/VitaminK_head.jpg";
import "./VitaminvK.css";
import { Link } from "react-router-dom";
const VitaminvK = () => {
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="vitaminK-container-v">
      <div className="vitaminK-inner-container-v">
        <p className="vitaminK-heading-v">Vitamin K</p>
        <div className="image-container-vitaminK-v">
          <img src={vitaminK_icon1v} alt="" className="image_vitaminK-v" />
        </div>
      </div>

      <div className="vitaminK-information-v">
      <h1 className="heading-vitaminK-v">Diseases Caused by Deficiency</h1>
        <p className="vitaminK-deficiency-text-v">
          Vitamin K deficiency can lead to:
          <br />
          <br />
          - Increased risk of bleeding: Without enough vitamin K, the blood may
          take longer to clot, leading to increased risk of bleeding.
          <br />
          <br />
          - Osteoporosis: Vitamin K is important for bone health, and deficiency
          may increase the risk of osteoporosis and fractures.
        </p>
        <br/>
        <br/>
        <h1 className="heading-vitaminK-v">Benefits</h1>
        <p className="vitaminK-benefits-text-v">
          Vitamin K is essential for blood clotting and bone health. It plays a
          key role in helping the blood to clot, which prevents excessive
          bleeding.
          <br />
          <br />
          Vitamin K also helps maintain strong, healthy bones and may reduce the
          risk of fractures and osteoporosis.
        </p>
        <br />
        <br />
       
        <h1 className="heading-vitaminK-v">Sources</h1>
        <div className="image-container-vitaminK-middle-v">
          <img src={vitaminK_iconv} alt="" className="image_vitaminK-v" />
        </div>
        <p className="vitaminK-sources-text-v">
          Vitamin K is found in a variety of foods, particularly leafy green
          vegetables, such as kale, spinach, and broccoli. Some food sources of
          vitamin K include:
          <br />
          <br />
          <ul className="vitamin_list-v">
            <li>Kale</li>
            <li>Spinach</li>
            <li>Broccoli</li>
            <li>Brussels sprouts</li>
            <li>Swiss chard</li>
            <li>Parsley</li>
            <li>Green tea</li>
            <li>Asparagus</li>
            <li>Green beans</li>
            <li>Spring onions</li>
            <li>Prunes</li>
            <li>Cabbage</li>
          </ul>
          <br />
          <br />
          Including vitamin K-rich foods in your diet can help ensure you're
          getting enough of this important nutrient.
        </p>
      </div>
      <div className="last-vitkv">
       <h2>Know more about Vitamin K intake<span className="span-last-k">&#8594;</span></h2> 
       <Link className="link-to-vitk" to="/vitaminK">Click Here</Link>
      </div>
    </div>
  );
};

export default VitaminvK;
