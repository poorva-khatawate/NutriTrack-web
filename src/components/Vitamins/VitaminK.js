import './VitaminK.css';
import Table from 'react-bootstrap/Table';
import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
export default class VitaminD extends Component {
  componentDidMount() {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <><Navbar /><>
        <div className='vitk'>
          <div className='vitk-main'>
            <img className='vitk-img' src='https://blog-images-1.pharmeasy.in/2020/10/01172556/shutterstock_1089989618-1-1024x683.jpg' alt='vita' />
            <div className='vitk-right'>
              <h1 className='vitk-title'>Vitamin K</h1>
              <ul className="vitkminb-list">
                <li>Fat-soluble vitamin crucial for blood clotting and bone health.</li>
                <li className="alternate">Exists in two main forms: K1 (phylloquinone) from plants and K2 (menaquinone) from fermented foods and animal products.</li>
                <li>Plays a role in regulating calcium, potentially contributing to heart and bone health.</li>
                <li className="alternate">Deficiency may lead to excessive bleeding and impaired bone mineralization.
                </li>
              </ul>

            </div>
          </div>
          <div className='vitk-intake'>
            <h2 className='vitk-intake-title'>Recommended Intakes</h2>
            <p className='vitk-intake-p'>Intake recommendations for vitamin K and other nutrients are provided in the Dietary Reference Intakes (DRIs) developed by the Food and Nutrition Board (FNB) at the Institute of Medicine of the National Academies [3]. DRI is the general term for a set of reference values used for planning and assessing nutrient intakes of healthy people. These values, which vary by age and gender, include the following:

              Recommended Dietary Allowance (RDA): Average daily level of intake sufficient to meet the nutrient requirements of nearly all (97%–98%) healthy individuals; often used to plan nutritionally adequate diets for individuals
              Adequate Intake (AI): Intake at this level is assumed to ensure nutritional adequacy; established when evidence is insufficient to develop an RDA
              Estimated Average Requirement (EAR): Average daily level of intake estimated to meet the requirements of 50% of healthy individuals; usually used to assess the nutrient intakes of groups of people and to plan nutritionally adequate diets for them; can also be used to assess the nutrient intakes of individuals
              Tolerable Upper Intake Level (UL): Maximum daily intake unlikely to cause adverse health effects
            </p>
            <br></br>
          </div>
          <Table striped="columns">
            <caption>Table1: Adequate Intakes (AIs) for Vitamin K</caption>
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
                <td>Birth to 6 months</td>
                <td>2.0 mcg</td>
                <td>2.0 mcg</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>7–12 months</td>
                <td>2.5 mcg</td>
                <td>2.5 mcg</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1–3 years</td>
                <td>30 mcg</td>
                <td>30 mcg</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>4–8 years</td>
                <td>55 mcg</td>
                <td>55 mcg</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>9–13 years</td>
                <td>60 mcg</td>
                <td>60 mcg</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>14–18 years</td>
                <td>75 mcg</td>
                <td>75 mcg</td>
                <td>75 mcg</td>
                <td>75 mcg</td>
              </tr>
              <tr>
                <td>19+ years</td>
                <td>120 mcg</td>
                <td>90 mcg</td>
                <td>90 mcg</td>
                <td>90 mcg</td>
              </tr>
            </tbody>
          </Table>
          <br />
          <div className='vitk-src'>
            <h2>Sources of Vitamin K</h2>
            <p className='vitk-intake-p'>Numerous foods provide vitamin E. Nuts, seeds, and vegetable oils are among the best sources of alpha-tocopherol, and significant amounts are available in green leafy
              vegetables and fortified cereals (see Table 2 for a more detailed list)  </p>
            <br></br>
            <Table striped>
              <caption>Table2:Vitamin K (Phylloquinone) Content of Selected Foods</caption>
              <thead>
                <tr>
                  <th>Food</th>
                  <th>Micrograms (mcg) per serving</th>
                  <th>Percent DV*</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Natto, 3 ounces (as MK-7)</td>
                  <td>850</td>
                  <td>708</td>
                </tr>
                <tr>
                  <td>Collards, frozen, boiled, ½ cup</td>
                  <td>530</td>
                  <td>442</td>
                </tr>
                <tr>
                  <td>Turnip greens, frozen, boiled ½ cup</td>
                  <td>426</td>
                  <td>355</td>
                </tr>
                <tr>
                  <td>Spinach, raw, 1 cup</td>
                  <td>145</td>
                  <td>121</td>
                </tr>
                <tr>
                  <td>Kale, raw, 1 cup</td>
                  <td>113</td>
                  <td>94</td>
                </tr>
                <tr>
                  <td>Broccoli, chopped, boiled, ½ cup</td>
                  <td>110</td>
                  <td>92</td>
                </tr>
                <tr>
                  <td>Soybeans, roasted, ½ cup</td>
                  <td>43</td>
                  <td>36</td>
                </tr>
                <tr>
                  <td>Carrot juice, ¾ cup</td>
                  <td>28</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>Soybean oil, 1 tablespoon</td>
                  <td>25</td>
                  <td>21</td>
                </tr>
                <tr>
                  <td>Edamame, frozen, prepared, ½ cup</td>
                  <td>21</td>
                  <td>18</td>
                </tr>
                <tr>
                  <td>Pumpkin, canned, ½ cup</td>
                  <td>20</td>
                  <td>17</td>
                </tr>
                <tr>
                  <td>Pomegranate juice, ¾ cup</td>
                  <td>19</td>
                  <td>16</td>
                </tr>
                <tr>
                  <td>Okra, raw, ½ cup</td>
                  <td>16</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>Salad dressing, Caesar, 1 tablespoon</td>
                  <td>15</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>Pine nuts, dried, 1 ounce</td>
                  <td>15</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>Blueberries, raw, ½ cup</td>
                  <td>14</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Iceberg lettuce, raw, 1 cup</td>
                  <td>14</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Chicken, breast, rotisserie, 3 ounces (as MK-4)</td>
                  <td>13</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>Grapes, ½ cup</td>
                  <td>11</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>Vegetable juice cocktail, ¾ cup</td>
                  <td>10</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Canola oil, 1 tablespoon</td>
                  <td>10</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Cashews, dry roasted, 1 ounce</td>
                  <td>10</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Carrots, raw, 1 medium</td>
                  <td>8</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Olive oil, 1 tablespoon</td>
                  <td>8</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Ground beef, broiled, 3 ounces (as MK-4)</td>
                  <td>6</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Figs, dried, ¼ cup</td>
                  <td>6</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Chicken liver, braised, 3 ounces (as MK-4)</td>
                  <td>6</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Ham, roasted or pan broiled, 3 ounces (as MK-4)</td>
                  <td>4</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Cheddar cheese, 1½ ounces (as MK-4)</td>
                  <td>4</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Mixed nuts, dry roasted, 1 ounce</td>
                  <td>4</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Egg, hard boiled, 1 large (as MK-4)</td>
                  <td>4</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Mozzarella cheese, 1½ ounces (as MK-4)</td>
                  <td>2</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Milk, 2%, 1 cup (as MK-4)</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Salmon, sockeye, cooked, 3 ounces (as MK-4)</td>
                  <td>0.3</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Shrimp, cooked, 3 ounces (as MK-4)</td>
                  <td>0.3</td>
                  <td>0</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className='vitk-down'>
            <div className='vitk-down-content'>
              <h1 className='vitk-down-h1'>Eat these for Vitamin K &#8594;</h1>
              <img className='imgk' src='https://www.verywellfit.com/thmb/33-8VKdBaxn-faDn1lea3SSZDhA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/foods-high-in-vitamin-k-5114127-FINAL-2c0783a2c2c643988571c6010f352ac7.png' alt='imgb' />
            </div>
          </div>
        </div>
      </></>
    );
  }
}

