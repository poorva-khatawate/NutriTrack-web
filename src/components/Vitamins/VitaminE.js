import './VitaminE.css';
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
        <div className='vite'>
          <div className='vite-main'>
            <img className='vite-img' src='https://healthymaster.in/cdn/shop/articles/vitamin_e.png?v=1690112264' alt='vita' />
            <div className='vite-right'>
              <h1 className='vite-title'>Vitamin E</h1>
              <ul className="viteminb-list">
                <li>Fat-soluble antioxidant vitamin crucial for immune function and skin health.</li>
                <li className="alternate">Main source is sunlight; also found in fatty fish, fortified dairy products, and supplements.</li>
                <li>Deficiency can lead to weakened bones (rickets in children, osteomalacia in adults) and increased risk of infections.</li>
                <li className="alternate">Excessive intake can lead to bleeding problems due to interference with blood clotting.
                </li>
              </ul>

            </div>
          </div>
          <div className='vite-intake'>
            <h2 className='vite-intake-title'>Recommended Intakes</h2>
            <p className='vite-intake-p'>The amount of vitamin E you need each day depends on your age. Average daily recommended amounts are listed below in milligrams (mg).
            </p>
            <br></br>
          </div>
          <Table striped="columns">

            <caption>Table1: Recommended Amount Vitman E for Different Life Stages</caption>
            <thead>
              <tr>
                <th>Life Stage</th>
                <th>Recommended Amount (mg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Birth to 6 months</td>
                <td>4 mg</td>
              </tr>
              <tr>
                <td>Infants 7–12 months</td>
                <td>5 mg</td>
              </tr>
              <tr>
                <td>Children 1–3 years</td>
                <td>6 mg</td>
              </tr>
              <tr>
                <td>Children 4–8 years</td>
                <td>7 mg</td>
              </tr>
              <tr>
                <td>Children 9–13 years</td>
                <td>11 mg</td>
              </tr>
              <tr>
                <td>Teens 14–18 years</td>
                <td>15 mg</td>
              </tr>
              <tr>
                <td>Adults</td>
                <td>15 mg</td>
              </tr>
              <tr>
                <td>Pregnant teens and women</td>
                <td>15 mg</td>
              </tr>
              <tr>
                <td>Breastfeeding teens and women</td>
                <td>19 mg</td>
              </tr>
            </tbody>
          </Table>
          <br />
          <div className='vite-src'>
            <h2>Sources of Vitamin E</h2>
            <p className='vite-intake-p'>Numerous foods provide vitamin E. Nuts, seeds, and vegetable oils are among the best sources of alpha-tocopherol, and significant amounts are available in green leafy vegetables and fortified cereals
              (see Table 2 for a more detailed list) </p>
            <br></br>
            <Table striped>
              <caption>Table2: Vitamin E (Alpha-Tocopherol) Content of Selected Foods</caption>
              <thead>
                <tr>
                  <th>Food</th>
                  <th>Milligrams (mg) per serving</th>
                  <th>Percent DV*</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Wheat germ oil, 1 tablespoon</td>
                  <td>20.3</td>
                  <td>135</td>
                </tr>
                <tr>
                  <td>Sunflower seeds, dry roasted, 1 ounce</td>
                  <td>7.4</td>
                  <td>49</td>
                </tr>
                <tr>
                  <td>Almonds, dry roasted, 1 ounce</td>
                  <td>6.8</td>
                  <td>45</td>
                </tr>
                <tr>
                  <td>Sunflower oil, 1 tablespoon</td>
                  <td>5.6</td>
                  <td>37</td>
                </tr>
                <tr>
                  <td>Safflower oil, 1 tablespoon</td>
                  <td>4.6</td>
                  <td>31</td>
                </tr>
                <tr>
                  <td>Hazelnuts, dry roasted, 1 ounce</td>
                  <td>4.3</td>
                  <td>29</td>
                </tr>
                <tr>
                  <td>Peanut butter, 2 tablespoons</td>
                  <td>2.9</td>
                  <td>19</td>
                </tr>
                <tr>
                  <td>Peanuts, dry roasted, 1 ounce</td>
                  <td>2.2</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Corn oil, 1 tablespoon</td>
                  <td>1.9</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>Spinach, boiled, ½ cup</td>
                  <td>1.9</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>Broccoli, chopped, boiled, ½ cup</td>
                  <td>1.2</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Soybean oil, 1 tablespoon</td>
                  <td>1.1</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Kiwifruit, 1 medium</td>
                  <td>1.1</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Mango, sliced, ½ cup</td>
                  <td>0.7</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Tomato, raw, 1 medium</td>
                  <td>0.7</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Spinach, raw, 1 cup</td>
                  <td>0.6</td>
                  <td>4</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className='vite-down'>
            <div className='vite-down-content'>
              <h1 className='vite-down-h1'>Eat these for Vitamin D &#8594;</h1>
              <img className='imge' src='https://wordpresscmsprodstor.blob.core.windows.net/wp-cms/2021/10/43.webp' alt='imgb' />
            </div>
          </div>
        </div>
      </></>
    );
  }
}

