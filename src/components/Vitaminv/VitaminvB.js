import React,{useEffect} from "react";
import { Link } from "react-router-dom";
// import vitaminB_iconv from "./assests/images/vitaminB.webp";
import vitaminB_icon1v from "./assests/images/VitaminBhead.jpg";
import "./VitaminvB.css";

const VitaminvB = () => {
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <><div className="vitaminA-container-v">
      <div className="vitaminA-inner-container-v">
        <p className="vitaminA-heading-v">Vitamin B </p>
        <div className="image-container-vitaminA-v">
          <img src={vitaminB_icon1v} alt="" className="image_vitaminA-v" />
        </div>
      </div>

      <div className="vitaminA-information-v">
        <h1 className="heading-vitaminA-v">Symtoms of Vitamin B Deficiencies</h1>
        <p className="vitaminA-deficiency-text-v">
          There are eight types of vitamin B. The symptoms of a vitamin B
          deficiency vary depending on which B vitamin you’re deficient in, and
          may include fatigue, skin rash, or confusion. If you suspect a vitamin
          B deficiency, speak to a doctor.
          <br />
          <br />
          The B vitamins are a group of eight nutrients, each with unique roles
          in keeping the body healthy. They’re especially important for
          maintaining cell health and keeping you energized.
          <br />
          <br />
          The symptoms of a vitamin B deficiency vary depending on which B
          vitamin you’re deficient in.
          <br />
          <br />
          Some foods are high in several B vitamins, and certain foods are
          particularly high in specific B vitamins. Eating a balanced diet is
          key to getting all nutrients your body needs.
          <br />
          <br />
          <h1 className="heading-vitaminA-v">Vitamin B12</h1>
          Vitamin B12, also called cobalamin, helps regulate the nervous system.
          It also plays a role in growth and red blood cell formation.
          <br />
          <br />
          <h2 className="heading-vitaminA-v">
            Symptoms of Vitamin B12 deficiency
          </h2>
          A vitamin B12 deficiency can lead to disruption in the nervous system
          and the circulatory system.
          <br />
          <br />
          Vitamin B12 deficiencies can lead to megaloblastic anemia, a condition
          where the bone marrow produces large abnormally shaped red blood cells
          that do not function properly.
          <br />
          <br />
          Dementia, paranoia, depression, and behavioral changes can result from
          a vitamin B12 deficiency. Neurological damage sometimes cannot be
          reversed.
          <br />
          <br />
        </p>
        <h2 className="heading-vitaminA-v">
          Vitamin B12 deficiency can cause the following symptoms:
        </h2>
        <ul className="vitamin_list-v">
          <li>tiredness or fatigue</li>
          <li>weakness</li>
          <li>constipation</li>
          <li>loss of appetite</li>
          <li>weight loss</li>
          <li>numbness and tingling in the hands and feet</li>
          <li>balance problems</li>
          <li>confusion</li>
          <li>poor memory</li>
          <li>soreness of the mouth or tongue</li>
        </ul>
        <br />
        <br />
        <h2 className="heading-vitaminA-v">Which foods contain vitamin B12?</h2>
        Vitamin B12 is found primarily in meat and dairy products, so people on
        a vegan diet are at risk for deficiency. However, there are foods
        options to meet their B12 dietary needs.
        <br />
        <br />
        Vegetarian sources include dairy and eggs. Vegan sources of B12 include
        fortified foods and nutritional yeast.
        <br />
        <br />
        <p>The best sources of vitamin B12 include:</p>
        <br />
        <ul className="vitamin_list-v">
          <li>beef liver</li>
          <li>clams</li>
          <li>meat, including fish and poultry</li>
          <li>eggs</li>
          <li>milk</li>
          <li>cheese</li>
          <li>fortified breakfast cereals</li>
          <li>nutritional yeast</li>
          <li>other fortified foods, including plant milks and flours</li>
        </ul>
        <br />
        <br />
        <h1 className="heading-vitaminA-v">Vitamin B6</h1>
        Vitamin B6, also called pyridoxine, helps the body turn food into
        energy. It can also help the body fight infections by supporting the
        immune system.
        <br />
        <br />
        Pregnant and breastfeeding women need it to help their babies’ brains
        develop normally.
        <br />
        <br />
        <h2 className="heading-vitaminA-v">Symptoms of vitamin B6 deficiency</h2>
        Insufficient amounts of B6 can result in anemia as well as skin
        disorders, such as an itchy rash or cracks around the mouth.
        <br />
        <br />
        <h2 className="heading-vitaminA-v">A lack of B6 can also cause:</h2>
        <ul className="vitamin_list-v">
          <li>depression</li>
          <li>confusion</li>
          <li>nausea</li>
          <li>anemia</li>
          <li>susceptibility to infections</li>
          <li>dermatitis</li>
        </ul>
        <br />
        <br />
        <h2 className="heading-vitaminA-v">Which foods contain vitamin B6?</h2>
        <p>Foods high in vitamin B6 include:</p>
        <br />
        <ul className="vitamin_list-v">
          <ul>
            <li>poultry, fish, and organ meats</li>
            <li>potatoes and other starchy vegetables</li>
            <li>fruits, except for citrus fruits</li>
          </ul>
        </ul>
        <br />
        <br />
        <h1 className="heading-vitaminA-v">Vitamins B1 and B2</h1>
        Vitamin B1 is also called thiamin, and vitamin B2 is also called
        riboflavin.
        <br />
        <br />
        These vitamins help convert food into energy. Vitamin B1 has
        neurological benefits, and vitamin B2 helps maintain proper eyesight.
        <br />
        <br />
        <h2 className="heading-vitaminA-v">
          Symptoms of vitamin B1 or B2 deficiency
        </h2>
        Vitamin B1 deficiency is rareTrusted Source, and vitamin B2 deficiency
        is very rareTrusted Source, in the United States.
        <br />
        <br />
        This is due to the fact that many foods, such as milk and whole-grain
        cereals, are fortified with these vitamins.
        <br />
        <br />
        It can become an issue with people who misuse alcohol, however,
        presenting symptoms such as confusion and cracks along the sides of the
        mouth.
        <br />
        <br />
        <h2 className="heading-vitaminA-v">
          Which foods contain vitamin B1 and B2?
        </h2>
        Most people get their B1 and B2 from fortified breakfast cereals and
        whole grains.
        <br />
        <br />
        <p>Sources of vitamin B1 include:</p>
        <br />
        <ul className="vitamin_list-v">
          <li>whole grains</li>
          <li>fortified bread, cereal, pasta, and rice</li>
          <li>pork</li>
          <li>fish</li>
          <li>legumes, including black beans and soybeans</li>
          <li>nuts and seeds</li>
        </ul>
        <br />
        <br />
        <p>Sources of vitamin B2 include:</p>
        <br />
        <ul className="vitamin_list-v">
          <li>eggs</li>
          <li>organ meats, including kidney and liver</li>
          <li>lean meats</li>
          <li>low-fat milk</li>
          <li>green vegetables, including broccoli and spinach</li>
          <li>fortified cereals, grains, and bread </li>
        </ul>
        <br />
        <br />
        <h1 className="heading-vitaminA-v">Vitamin B3</h1>
        Vitamin B3, also called niacin, helps convert food into energy. It also
        aids in proper digestion and healthy appetite, and is important for cell
        development
        <br />
        <br />
        <h2 className="heading-vitaminA-v">Symptoms of Vitamin B3 deficiency</h2>
        A lack of niacin can cause digestive issues, such as nausea and
        abdominal cramps. Severe deficiency may also cause mental confusion.
        <br />
        <br />
        Severe deficiency can result in a condition called pellagra, with
        symptoms such as:
        <br />
        <br />
        <ul className="vitamin_list-v">
          <li>rough skin that turns red or brown in the sun</li>
          <li>a bright red tongue</li>
          <li>vomiting</li>
          <li>constipation or diarrhea</li>
          <li>fatigue</li>
          <li>aggressive, paranoid, or suicidal behavior</li>
          <li>hallucinations</li>
        </ul>
        <br />
        <br />
        <h2 className="heading-vitaminA-v">Which foods contain vitamin B3?</h2>
        Food sources of vitamin B3 include:
        <br />
        <br />
        <ul className="vitamin_list-v">
          <li>meat, including poultry, beef, pork, and fish</li>
          <li>some nuts, legumes, and grains</li>
          <li>fortified breads and cereals</li>
        </ul>
        <br />
        <br />
        <h1 className="heading-vitaminA-v">Vitamin B9</h1>
        Vitamin B9 is also called folate. Folate occurs naturally in foods.
        Folic acid is the synthetic form, often found in fortified, processed
        foods.
        <br />
        <br />
        Like most B vitamins, B9 fosters the growth of red blood cells. It also
        reduces the risk of birth defects when pregnant women consume it.
        <br />
        <br />
        <h2 className="heading-vitaminA-v">Symptoms of Vitamin B9 deficiency</h2>
        Low levels of vitamin B9 can result in the following symptoms:
        <br />
        <br />
        <ul className="vitamin_list-v">
          <li>megaloblastic anemia, which causes weakness</li>
          <li>fatigue</li>
          <li>trouble concentrating</li>
          <li>irritability</li>
          <li>headache</li>
          <li>heart palpitations</li>
          <li>shortness of breath</li>
          <li>open sores in the mouth</li>
          <li>changes in skin, hair, or fingernail color</li>
        </ul>
        <br />
        <br />
        Pregnant women with a folate deficiency could result in their babies
        being born with neural tube defects, such as spina bifida.
        <br />
        <br />
        Excessive supplemental folic acid during pregnancy, however, may
        alsoTrusted Source lead to a baby developing neurological problems.
        <br />
        <br />
        <h2 className="heading-vitaminA-v">Which foods contain vitamin B9?</h2>
        Food sources of folate include:
        <br />
        <br />
        <ul className="vitamin_list-v">
          <li>beef liver</li>
          <li>asparagus</li>
          <li>brussels sprouts</li>
          <li>
            dark green leafy vegetables, including spinach and mustard greens
          </li>
          <li>oranges and orange juice</li>
          <li>other fruits and fruit juices</li>
          <li>peanuts and other nuts</li>
          <li>beans, including kidney beans</li>
          <li>peas, including black-eyed peas</li>
        </ul>
        <br />
        <br />
        Foods fortified with folic acid include:
        <br />
        <br />
        <ul className="vitamin_list-v">
          <li>enriched bread, flour, pasta, and rice</li>
          <li>fortified breakfast cereals</li>
          <li>corn tortillas and tamales made with fortified flour</li>
        </ul>
        <br />
        <br />
      </div>
      <div className="last-vitbv">
        <h2>Know more about Vitamin B intake<span className="span-last-b">&#8594;</span></h2>
        <Link className="link-to-vitb" to="/vitaminB">Click Here</Link>
      </div>
    </div></>
  );
};

export default VitaminvB;
