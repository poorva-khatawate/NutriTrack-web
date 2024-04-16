import './VitaminD.css';
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
        <div className='vitd'>
          <div className='vitd-main'>
            <img className='vitd-img' src='https://t3.ftcdn.net/jpg/01/18/02/98/240_F_118029839_N34oyMgnoA19pSQxZoXDrLVJNMhevOs9.jpg' alt='vita' />
            <div className='vitd-right'>
              <h1 className='vitd-title'>Vitamin D</h1>
              <ul className="vitdminb-list">
                <li>Fat-soluble vitamin crucial for bone health, immune function, and calcium absorption.</li>
                <li className="alternate">Main source is sunlight; also found in fatty fish, fortified dairy products, and supplements.</li>
                <li>Deficiency can lead to weakened bones (rickets in children, osteomalacia in adults) and increased risk of infections.</li>
                <li className="alternate">Excessive intake can cause toxicity, leading to hypercalcemia and kidney damage.</li>
              </ul>

            </div>
          </div>
          <div className='vitd-intake'>
            <h2 className='vitd-intake-title'>Recommended Intakes</h2>
            <p className='vitd-intake-p'>Intake recommendations for vitamin D and other nutrients are provided in the Dietary Reference Intakes (DRIs) developed by expert committees of NASEM.DRI is the general term for a set of reference values used for planning and assessing nutrient intakes of healthy people. These values, which vary by age and sex, include the following:

              Recommended Dietary Allowance (RDA): Average daily level of intake sufficient to meet the nutrient requirements of nearly all (97%–98%) healthy individuals; often used to plan nutritionally adequate diets for individuals
              Adequate Intake (AI): Intake at this level is assumed to ensure nutritional adequacy; established when evidence is insufficient to develop an RDA
              Estimated Average Requirement (EAR): Average daily level of intake estimated to meet the requirements of 50% of healthy individuals; usually used to assess the nutrient intakes of groups of people and to plan nutritionally adequate diets for them; can also be used to assess the nutrient intakes of individuals
              Tolerable Upper Intake Level (UL): Maximum daily intake unlikely to cause adverse health effects.

            </p>
            <br></br>
          </div>
          <Table striped="columns">

            <caption>Table 1: Recommended Dietary Allowances (RDAs) for Vitamin D</caption>
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
                <td>0-12 months*</td>
                <td>10 mcg (400 IU)</td>
                <td>10 mcg (400 IU)</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1–13 years</td>
                <td>15 mcg (600 IU)</td>
                <td>15 mcg (600 IU)</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>14–18 years</td>
                <td>15 mcg (600 IU)</td>
                <td>15 mcg (600 IU)</td>
                <td>15 mcg (600 IU)</td>
                <td>15 mcg (600 IU)</td>
              </tr>
              <tr>
                <td>19–50 years</td>
                <td>15 mcg (600 IU)</td>
                <td>15 mcg (600 IU)</td>
                <td>15 mcg (600 IU)</td>
                <td>15 mcg (600 IU)</td>
              </tr>
              <tr>
                <td>51–70 years</td>
                <td>15 mcg (600 IU)</td>
                <td>15 mcg (600 IU)</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>&gt;70 years</td>
                <td>20 mcg (800 IU)</td>
                <td>20 mcg (800 IU)</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          <br />
          <div className='vitd-src'>
            <h2>Sources of Vitamin D</h2>
            <br></br>
            <Table striped>
              <caption>Table 2: Food Sources of Vitamin D</caption>
              <thead>
                <tr>
                  <th>Food</th>
                  <th>Micrograms (mcg) per serving</th>
                  <th>International Units (IU) per serving</th>
                  <th>Percent DV*</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cod liver oil, 1 tablespoon</td>
                  <td>34.0</td>
                  <td>1,360</td>
                  <td>170%</td>
                </tr>
                <tr>
                  <td>Trout (rainbow), farmed, cooked, 3 ounces</td>
                  <td>16.2</td>
                  <td>645</td>
                  <td>81%</td>
                </tr>
                <tr>
                  <td>Salmon (sockeye), cooked, 3 ounces</td>
                  <td>14.2</td>
                  <td>570</td>
                  <td>71%</td>
                </tr>
                <tr>
                  <td>Mushrooms, white, raw, sliced, exposed to UV light, ½ cup</td>
                  <td>9.2</td>
                  <td>366</td>
                  <td>46%</td>
                </tr>
                <tr>
                  <td>Milk, 2% milkfat, vitamin D fortified, 1 cup</td>
                  <td>2.9</td>
                  <td>120</td>
                  <td>15%</td>
                </tr>
                <tr>
                  <td>Soy, almond, and oat milks, vitamin D fortified, various brands, 1 cup</td>
                  <td>2.5–3.6</td>
                  <td>100–144</td>
                  <td>13–18%</td>
                </tr>
                <tr>
                  <td>Ready-to-eat cereal, fortified with 10% of the DV for vitamin D, 1 serving</td>
                  <td>2.0</td>
                  <td>80</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Sardines (Atlantic), canned in oil, drained, 2 sardines</td>
                  <td>1.2</td>
                  <td>46</td>
                  <td>6%</td>
                </tr>
                <tr>
                  <td>Egg, 1 large, scrambled</td>
                  <td>1.1</td>
                  <td>44</td>
                  <td>6%</td>
                </tr>
                <tr>
                  <td>Liver, beef, braised, 3 ounces</td>
                  <td>1.0</td>
                  <td>42</td>
                  <td>5%</td>
                </tr>
                <tr>
                  <td>Tuna fish (light), canned in water, drained, 3 ounces</td>
                  <td>1.0</td>
                  <td>40</td>
                  <td>5%</td>
                </tr>
                <tr>
                  <td>Cheese, cheddar, 1.5 ounce</td>
                  <td>0.4</td>
                  <td>17</td>
                  <td>2%</td>
                </tr>
                <tr>
                  <td>Mushrooms, portabella, raw, diced, ½ cup</td>
                  <td>0.1</td>
                  <td>4</td>
                  <td>1%</td>
                </tr>
                <tr>
                  <td>Chicken breast, roasted, 3 ounces</td>
                  <td>0.1</td>
                  <td>4</td>
                  <td>1%</td>
                </tr>
                <tr>
                  <td>Beef, ground, 90% lean, broiled, 3 ounces</td>
                  <td>0</td>
                  <td>1.7</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>Broccoli, raw, chopped, ½ cup</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>Carrots, raw, chopped, ½ cup</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>Almonds, dry roasted, 1 ounce</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>Apple, large</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>Banana, large</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>Rice, brown, long-grain, cooked, 1 cup</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>Whole wheat bread, 1 slice</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>Lentils, boiled, ½ cup</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>Sunflower seeds, roasted, ½ cup</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>Edamame, shelled, cooked, ½ cup</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0%</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className='vitd-down'>
            <div className='vitd-down-content'>
              <h1 className='vitd-down-h1'>Eat these for Vitamin D &#8594;</h1>
              <img className='imgd' src='https://welleasy.co.uk/cdn/shop/articles/c1b425d9-2eaa-4e8e-8533-a803c1b84f70_2_1080x.jpg?v=1648459074' alt='imgb' />
            </div>
          </div>
        </div>
      </></>
    );
  }
}

