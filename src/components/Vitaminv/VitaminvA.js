import React,{useEffect} from "react";
import vitaminvA_iconv from "./assests/images/vitaminA.webp";
import vitaminvA_icon1v from "./assests/images/VitaminA_head.jpg";
import { Link } from "react-router-dom";
import "./VitaminvA.css";
import Navbar from "../Navbar/Navbar";
const VitaminvA = () => {
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <><Navbar /><div className="vitaminA-container-v">
      <div className="vitaminA-inner-container-v">
        <p className="vitaminA-heading-v">Vitamin A Deficiency</p>
        <div className="image-container-vitaminA-v">
          <img src={vitaminvA_icon1v} alt="" className="image_vitaminA-v" />
        </div>
      </div>

      <div className="vitaminA-information-v">
        <h1 className="heading-vitaminA-v">Deficiency</h1>
        <p className="vitaminA-deficiency-text-v">
          Though vitamin A deficiency is rare in developed countries such as the
          United States, it’s common in developing countries, where populations
          may have limited access to food sources of preformed vitamin A and
          provitamin A carotenoids.
          <br />
          <br />
          Vitamin A deficiency can lead to severe health complications.
          <br />
          <br />
          According to the World Health Organization, vitamin A deficiency is
          the leading cause of preventable blindness in children worldwide
          <br />
          <br />
          Vitamin A deficiency also increases the severity and risk of dying
          from infections like measles and diarrhea .<br />
          <br />
          Additionally, research has found that vitamin A deficiency raises the
          risk of anemia and death in pregnant women and negatively impacts the
          fetus by slowing growth and development.
          <br />
          <br />
          Less severe symptoms of vitamin A deficiency include skin issues such
          as hyperkeratosis and acne.
          <br />
          <br />
          Certain groups — such as premature infants, people with cystic
          fibrosis, and pregnant or breastfeeding people in developing countries
          — are more at risk of vitamin A deficiency <br />
          <br />
        </p>
        <h1 className="heading-vitaminA-v">Food Sources</h1>
        <div className="image-container-vitaminA-middle-v">
          <img src={vitaminvA_iconv} alt="" className="image_vitaminA-v" />
        </div>
        <p className="vitaminA-deficiency-text-v">
          There are many dietary sources of both preformed vitamin A and
          provitamin A carotenoids.
          <br />
          <br />
          Preformed vitamin A is more readily absorbed and utilized by your body
          than plant-based sources of provitamin A carotenoids.
          <br />
          <br />
          Your body’s ability to effectively convert carotenoids, such as beta
          carotene, into active vitamin A depends on many factors — including
          genetics, diet, overall health, and medications
          <br />
          <br />
          For this reason, those who follow plant-based diets — especially
          vegans — should be vigilant about getting enough carotenoid-rich
          foods.
          <br />
          <br />
          Foods highest in preformed vitamin A include:
          <br />
          <br />
          <ul className="vitamin_list-v">
            <li>egg yolks</li>
            <li>beef liver</li>
            <li>liverwurst</li>
            <li>butter</li>
            <li>cod liver oil</li>
            <li>chicken liver</li>
            <li>salmon</li>
            <li>cheddar cheese</li>
            <li>liver sausage</li>
            <li>king mackerel</li>
            <li>king mackerel</li>
            <li>trout</li>
          </ul>
          <br />
          <br />
          Foods high in provitamin A carotenoids like beta carotene include:
          <br />
          <br />
          <ul className="vitamin_list-v">
            <li>sweet potatoes</li>
            <li>pumpkin</li>
            <li>liverwurst</li>
            <li>carrots</li>
            <li>kale</li>
            <li>spinach</li>
            <li>dandelion greens</li>
            <li>collard greens</li>
            <li>winter squash</li>
            <li>cantaloupe</li>
            <li>papaya</li>
            <li>red peppers</li>
          </ul>
          <br />
          <br />
          Less severe symptoms of vitamin A deficiency include skin issues such
          as hyperkeratosis and acne.
          <br />
          <br />
          Certain groups — such as premature infants, people with cystic
          fibrosis, and pregnant or breastfeeding people in developing countries
          — are more at risk of vitamin A deficiency <br />
          <br />
        </p>
      </div>
      <div className="last-vitav">
        <h2>Know more about Vitamin A intake<span className="span-last-a">&#8594;</span></h2>
        <Link className="link-to-vita" to="/vitaminA">Click Here</Link>
      </div>
    </div></>
  );
};

export default VitaminvA;
