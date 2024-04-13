import './VitaminB.css';
import Table from 'react-bootstrap/Table';
import React, { Component } from 'react';

export default class VitaminB extends Component {
  componentDidMount() {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className='vitb'>
          <div className='vitb-main'>
            <img className='vitb-img' src='https://media.istockphoto.com/id/1256627955/photo/high-vitamin-b-sources-assortment.jpg?s=612x612&w=0&k=20&c=wdG6bIfiM6PalrOiQrYi8AOYTP11s57MdRcpS8XPyc8=' alt='vita' />
            <div className='vitb-right'>
              <h1 className='vitb-title'>Vitamin B</h1>
                <ul className="vitbminb-list">
              <li>Group of water-soluble vitamins essential for metabolism, energy production, and nervous system function.</li>
              <li className="alternate">Includes B1 (thiamine), B2 (riboflavin), B3 (niacin), B5 (pantothenic acid), B6 (pyridoxine), B7 (biotin), B9 (folate), and B12 (cobalamin).</li>
              <li>Found in various foods such as whole grains, meat, fish, dairy, fruits, and vegetables.</li>
              <li className="alternate">Deficiency can lead to fatigue, weakness, nerve damage, and other health issues depending on the specific B vitamin lacking.</li>
</ul>

            </div>
          </div>
          <div className='vitb-intake'>
            <h2 className='vitb-intake-title'>Recommended Intakes</h2>
            <p className='vitb-intake-p'>B vitamins, also known as B-complex vitamins, play essential roles in catabolic and anabolic metabolism. These 8 water-soluble vitamins are excreted in urine and require repletion daily. The B vitamins are identified as
             follows: thiamine (B1), riboflavin (B2), niacin (B3), pantothenic acid (B5), pyridoxine (B6), biotin (B7), folate (B9), and cobalamin (B12). 
             Table 2 shows the Recommended daily intake for Vitamin B.
            </p>
          </div>
          <Table striped="columns">
          <caption>Table2: Recommended Daily Intake for Adults</caption>
          <thead>
            <tr>
              <th>Vitamin</th>
              <th>Men</th>
              <th>Nonpregnant Women</th>
              <th>Pregnant Women</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B1</td>
              <td>1.2 mg</td>
              <td>1.1 mg</td>
              <td>1.4 mg</td>
            </tr>
            <tr>
              <td>B2</td>
              <td>1.3 mg</td>
              <td>1.1 mg</td>
              <td>1.4 mg</td>
            </tr>
            <tr>
              <td>B3</td>
              <td>16 mg</td>
              <td>14 mg</td>
              <td>18 mg</td>
            </tr>
            <tr>
              <td>B5</td>
              <td>5 mg</td>
              <td>5 mg</td>
              <td>6 mg</td>
            </tr>
            <tr>
              <td>B6</td>
              <td>1–1.7 mg</td>
              <td>1–1.7 mg</td>
              <td>1.9 mg</td>
            </tr>
            <tr>
              <td>B7</td>
              <td>30 mcg</td>
              <td>30 mcg</td>
              <td>30 mcg</td>
            </tr>
            <tr>
              <td>B9</td>
              <td>400 mcg</td>
              <td>400 mcg</td>
              <td>600 mcg</td>
            </tr>
            <tr>
              <td>B12</td>
              <td>2.4 mcg</td>
              <td>2.4 mcg</td>
              <td>2.6 mcg</td>
            </tr>
          </tbody>
          </Table>
          <br />
          <div className='vitb-src'>
            <h2>Sources of Vitamin B</h2>
            <p className='vitb-intake-p'>Table 2 lists a variety of foods and their vitamin B 
            content. These foods can help you meet your daily vitamin B needs.
            </p>
      <Table striped>  
      <caption>Table 2: Foods Rich in Vitamin B</caption>
          <thead>
            
            <tr>
              <th>Vitamin</th>
              <th>Daily Requirement</th>
              <th>Foods Rich In It</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vitamin B1</td>
              <td>1 - 1.3 mg</td>
              <td>Whole grain or cereal grain, Asparagus, Kale, Liver, Eggs, Sunflower seeds, Pine nuts, Potatoes, Tuna, Pulses (chickpeas, lentils, beans), Peas, Peanuts</td>
            </tr>
            <tr>
              <td>Vitamin B2</td>
              <td>1.2 - 1.5 mg</td>
              <td>Liver, Mushrooms, Almonds, Milk, Spinach, Eggs, Meat, Fish, Dairy products</td>
            </tr>
            <tr>
              <td>Vitamin B3</td>
              <td>13 - 17 mg</td>
              <td>Fish, Liver, Leafy vegetables, Avocados, Dates, Wholegrain cereals, Cashew nuts, Pulses, Meat, Eggs, Mushrooms, Peanuts, Wheat bran</td>
            </tr>
            <tr>
              <td>Vitamin B5</td>
              <td>Approx. 6 mg</td>
              <td>Chickpeas, Eggs and milk, Organ meats and beef, Brown rice, Mushrooms, Oats</td>
            </tr>
            <tr>
              <td>Vitamin B6</td>
              <td>1.2 - 1.6 mg</td>
              <td>Corn, Banana, Chickpeas, Dairy products, Beef, Pork, Yeast, Fish, Green vegetables, Soy</td>
            </tr>
            <tr>
              <td>Vitamin B7</td>
              <td>30 - 60 μg</td>
              <td>Green leafy vegetables, Pulses, Egg yolks, Milk, Nuts</td>
            </tr>
            <tr>
              <td>Vitamin B9</td>
              <td>Approx. 0.4 mg</td>
              <td>Leafy green vegetables, Liver, Egg, Citrus fruits, Lentils</td>
            </tr>
            <tr>
              <td>Vitamin B12</td>
              <td>Approx. 3 μg</td>
              <td>Fish, Meat, Poultry, Eggs</td>
            </tr>
          </tbody>
    </Table>
          </div>
          <div className='vitb-down'>
            <div className='vitb-down-content'>
              <h1 className='vitb-down-h1'>Eat these for Vitamin B &#8594;</h1>
              <img className='imgb' src='https://t4.ftcdn.net/jpg/03/72/32/43/360_F_372324316_jweJ8fnB3rNV06PWegoDHeH8TBM4OVfx.jpg' alt='imgb' />
            </div>
          </div>
        </div>
      </>
    );
  }
}

