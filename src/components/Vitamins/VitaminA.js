import React, { Component } from 'react';
import './VitaminA.css';
import Table from 'react-bootstrap/Table';
import Navbar from '../Navbar/Navbar';
export default class VitaminA extends Component {
  componentDidMount() {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <><Navbar /><>
        <div className='vita'>
          <div className='vita-main'>
            <img className='vita-img' src='https://www.healthifyme.com/blog/wp-content/uploads/2018/07/vitamin-a-feature-1024x683.jpeg' alt='vita' />
            <div className='vita-right'>
              <h1 className='vita-title'>Vitamin A</h1>
              <ul className="vitamin-list-a">
                <li>Fat-soluble vitamin crucial for vision, immune function, and cell growth.</li>
                <li className="alternate">Important for maintaining healthy skin, mucous membranes, and reproductive health.</li>
                <li>Found in foods like liver, dairy, eggs, and colorful fruits and vegetables.</li>
                <li className="alternate">Excessive intake can lead to toxicity, causing nausea, dizziness, and even liver damage.</li>
              </ul>

            </div>
          </div>
          <div className='vita-intake'>
            <h2 className='vita-intake-title'>Recommended Intakes</h2>
            <p className='vita-intake-p'>Intake recommendations for vitamin A and other nutrients are provided in the Dietary Reference Intakes (DRIs) developed by the Food and Nutrition Board (FNB) at the National Academies of Sciences, Engineering, and Medicine [5]. DRI is the general term for a set of reference values used for planning and assessing nutrient intakes of healthy people. These values, which vary by age and sex, include the following:
              Recommended Dietary Allowance (RDA): Average daily level of intake sufficient to meet the nutrient requirements of nearly all (97%–98%) healthy individuals; often used to plan nutritionally adequate diets for individuals
              Adequate Intake (AI): Intake at this level is assumed to ensure nutritional adequacy; established when evidence is insufficient to develop an RDA
              Estimated Average Requirement (EAR): Average daily level of intake estimated to meet the requirements of 50% of healthy individuals; usually used to assess the nutrient intakes of groups of people and to plan nutritionally adequate diets for them; can also be used to assess the nutrient intakes of individuals
              Tolerable Upper Intake Level (UL): Maximum daily intake unlikely to cause adverse health effects
              RDAs for vitamin A are given as retinol activity equivalents (RAE) to account for the different bioactivities of retinol and provitamin A carotenoids, all of which are converted by the body into retinol (see Table 1). One mcg RAE is equivalent to 1 mcg retinol, 2 mcg supplemental beta-carotene, 12 mcg dietary beta-carotene, or 24 mcg dietary alpha-carotene or beta-cryptoxanthin
            </p>
          </div>
          <br></br>
          <Table striped="columns">
            <caption> Table 1: Recommended Dietary Allowances (RDAs) for Vitamin A</caption>
            <thead>
              <tr>
                <th>Age</th>
                <th>Male</th>
                <th>Female</th>
                <th>Pregnancy</th>
                <th>Lactation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Birth to 6 months*</td>
                <td>400 mcg RAE</td>
                <td>400 mcg RAE</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>7–12 months*</td>
                <td>500 mcg RAE</td>
                <td>500 mcg RAE</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1–3 years</td>
                <td>300 mcg RAE</td>
                <td>300 mcg RAE</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>4–8 years</td>
                <td>400 mcg RAE</td>
                <td>400 mcg RAE</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>9–13 years</td>
                <td>600 mcg RAE</td>
                <td>600 mcg RAE</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>14–18 years</td>
                <td>900 mcg RAE</td>
                <td>700 mcg RAE</td>
                <td>750 mcg RAE</td>
                <td>1,200 mcg RAE</td>
              </tr>
              <tr>
                <td>19–50 years</td>
                <td>900 mcg RAE</td>
                <td>700 mcg RAE</td>
                <td>770 mcg RAE</td>
                <td>1,300 mcg RAE</td>
              </tr>
              <tr>
                <td>51+ years</td>
                <td>900 mcg RAE</td>
                <td>700 mcg RAE</td>
                <td></td>
                <td></td>
              </tr>

            </tbody>
          </Table>
          <br />
          <p className='vita-intake-p'>The units of measurement for vitamin A are now mcg RAE, but International Units (IUs) were previously used [10]. To convert IU to mcg RAE, use the following [11-13]:
            1 IU retinol = 0.3 mcg RAE
            1 IU supplemental beta-carotene = 0.3 mcg RAE
            1 IU dietary beta-carotene = 0.05 mcg RAE
            1 IU dietary alpha-carotene or beta-cryptoxanthin = 0.025 mcg RAE
            RAE can only be directly converted into IUs if the sources of vitamin A are known. For example, the RDA of 900 mcg RAE for adolescent and adult men is equivalent to 3,000 IU if the food or supplement source is preformed vitamin A (retinol) or if the supplement source is beta-carotene. This RDA is also equivalent to 18,000 IU beta-carotene from food or to
            36,000 IU alpha-carotene or beta-cryptoxanthin from food. Therefore, a mixed diet containing 900 mcg RAE provides between 3,000 and 36,000 IU vitamin A, depending on the foods consumed.
          </p>
          <div className='vita-src'>
            <h2>Sources of Vitamin A</h2>
            <p className='vita-intake-p'>Table 2 lists a variety of foods and their vitamin A
              content per serving. The foods from animal
              sources in Table 2 contain primarily preformed
              vitamin A, the plant-based foods have provitamin A, and the foods
              with a mixture of ingredients from animals and plants contain both preformed vitamin A and provitamin A.
            </p>
            <Table striped>
              <caption>Vitamin A Content of Selected Foods</caption>
              <thead>
                <tr>
                  <th>Food</th>
                  <th>microgram (mcg) RAE per serving</th>
                  <th>Percent DV*</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Beef liver, pan fried, 3 ounces</td>
                  <td>6,582</td>
                  <td>731</td>
                </tr>
                <tr>
                  <td>Sweet potato, baked in skin, 1 whole</td>
                  <td>1,403</td>
                  <td>156</td>
                </tr>
                <tr>
                  <td>Spinach, frozen, boiled, ½ cup</td>
                  <td>573</td>
                  <td>64</td>
                </tr>
                <tr>
                  <td>Pumpkin pie, commercially prepared, 1 piece</td>
                  <td>488</td>
                  <td>54</td>
                </tr>
                <tr>
                  <td>Carrots, raw, ½ cup</td>
                  <td>459</td>
                  <td>51</td>
                </tr>
                <tr>
                  <td>Herring, Atlantic, pickled, 3 ounces</td>
                  <td>219</td>
                  <td>24</td>
                </tr>
                <tr>
                  <td>Ice cream, French vanilla, soft serve, ⅔ cup</td>
                  <td>185</td>
                  <td>21</td>
                </tr>
                <tr>
                  <td>Milk, skim, with added vitamin A and vitamin D, 1 cup</td>
                  <td>149</td>
                  <td>17</td>
                </tr>
                <tr>
                  <td>Cantaloupe, raw, ½ cup</td>
                  <td>135</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Cheese, ricotta, part skim, ½ cup</td>
                  <td>133</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Peppers, sweet, red, raw, ½ cup</td>
                  <td>117</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>Mangos, raw, 1 whole</td>
                  <td>112</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Breakfast cereals, fortified with 10% of the DV for vitamin A, 1 serving</td>
                  <td>90</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Egg, hard boiled, 1 large</td>
                  <td>75</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Black-eyed peas (cowpeas), boiled, 1 cup</td>
                  <td>66</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Apricots, dried, sulfured, 5 apricots</td>
                  <td>63</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Broccoli, boiled, ½ cup</td>
                  <td>60</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Salmon, sockeye, cooked, 3 ounces</td>
                  <td>59</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Tomato juice, canned, ¾ cup</td>
                  <td>42</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Yogurt, plain, low fat, 1 cup</td>
                  <td>32</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Tuna, light, canned in oil, drained, 3 ounces</td>
                  <td>20</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Baked beans, canned, plain or vegetarian, 1 cup</td>
                  <td>13</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Summer squash, all varieties, boiled, ½ cup</td>
                  <td>10</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Chicken, breast meat and skin, roasted, ½ breast</td>
                  <td>5</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Pistachio nuts, dry roasted, 1 ounce</td>
                  <td>4</td>
                  <td>0</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className='vita-down'>
            <div className='vita-down-content'>
              <h1 className='vita-down-h1'>Eat these for Vitamin A &#8594;</h1>
              <img className='imga' src='https://static.vecteezy.com/system/resources/previews/005/391/021/original/foods-high-in-vitamin-a-illustration-with-healthy-foods-rich-in-vitamin-a-organic-food-collection-vector.jpg' alt='vita-food' />
            </div>
          </div>
        </div>
      </></>
    );
  }
}
