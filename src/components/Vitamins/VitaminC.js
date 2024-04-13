import './VitaminC.css';
import Table from 'react-bootstrap/Table';
import React, { Component } from 'react';

export default class VitaminC extends Component {
  componentDidMount() {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className='vitc'>
          <div className='vitc-main'>
            <img className='vitc-img' src='https://as2.ftcdn.net/v2/jpg/01/16/75/53/1000_F_116755366_yBPTI53Dpm8HAGd2XjdUIoGtqmh71KMq.jpg' alt='vita' />
            <div className='vitc-right'>
              <h1 className='vitc-title'>Vitamin C</h1>
                <ul className="vitcminb-list">
              <li>Water-soluble vitamin essential for collagen synthesis, immune function, and antioxidant activity.</li>
              <li className="alternate">Found abundantly in citrus fruits, strawberries, kiwi, bell peppers, and leafy greens.</li>
              <li>Helps in wound healing, iron absorption, and protecting cells from damage.</li>
              <li className="alternate">Deficiency leads to scurvy, characterized by fatigue, swollen gums, and impaired wound healing.</li>
</ul>

            </div>
          </div>
          <div className='vitc-intake'>
            <h2 className='vitc-intake-title'>Recommended Intakes</h2>
            <p className='vitc-intake-p'>Intake recommendations for vitamin C and other nutrients are provided in the Dietary Reference Intakes (DRIs) developed by the Food and Nutrition Board (FNB) at the Institute of Medicine (IOM) of the National Academies (formerly National Academy of Sciences) [8]. DRI is the general term for a set of reference values used for planning and 
            assessing nutrient intakes of healthy people. These values, which vary by age and gender , include the following:
          Recommended Dietary Allowance (RDA): Average daily level of intake sufficient to meet the nutrient requirements of nearly all (97%–98%) healthy individuals; often used to plan nutritionally adequate diets for individuals
          Adequate Intake (AI): Intake at this level is assumed to ensure nutritional adequacy; established when evidence is insufficient to develop an RDA
          Estimated Average Requirement (EAR): Average daily level of intake estimated to meet the requirements of 50% of healthy individuals; usually used to assess the nutrient intakes of groups of people and to plan nutritionally adequate diets for them; can also be used to assess the nutrient intakes of individuals
          Tolerable Upper Intake Level (UL): Maximum daily intake unlikely to cause adverse health effects.
            
            </p>
            <br></br>
          </div>
          <Table striped="columns">

  <caption>Table 1: Recommended Dietary Allowances (RDAs) for Vitamin C</caption>
  <thead>
    <tr>
      <th rowspan="2">Age</th>
      <th colspan="2">Male</th>
      <th colspan="2">Female</th>
      <th colspan="2">Pregnancy</th>
      <th colspan="2">Lactation</th>
    </tr>
    <tr>
      <th>RDA (mg)</th>
      <th>Smokers (mg)</th>
      <th>RDA (mg)</th>
      <th>Smokers (mg)</th>
      <th>RDA (mg)</th>
      <th>RDA (mg)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0–6 months</td>
      <td>40*</td>
      <td>40*</td>
      <td>40*</td>
      <td>40*</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>7–12 months</td>
      <td>50*</td>
      <td>50*</td>
      <td>50*</td>
      <td>50*</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>1–3 years</td>
      <td>15</td>
      <td></td>
      <td>15</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>4–8 years</td>
      <td>25</td>
      <td></td>
      <td>25</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>9–13 years</td>
      <td>45</td>
      <td></td>
      <td>45</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>14–18 years</td>
      <td>75</td>
      <td>110</td>
      <td>65</td>
      <td>100</td>
      <td>80</td>
      <td></td>
      <td>115</td>
    </tr>
    <tr>
      <td>19+ years</td>
      <td>90</td>
      <td>125</td>
      <td>75</td>
      <td>110</td>
      <td>85</td>
      <td></td>
      <td>120</td>
    </tr>
  </tbody>
          </Table>
          <br />
          <div className='vitc-src'>
            <h2>Sources of Vitamin C</h2>
            <p className='vitc-intake-p'><p className='vitc-intake-p'>
              Fruits and vegetables are the best sources of vitamin C (see Table 2). Citrus fruits, tomatoes and tomato juice, and potatoes are major contributors of vitamin C to the American diet [8]. Other good food sources include red and green peppers, kiwifruit, broccoli, strawberries, Brussels sprouts, and cantaloupe (see Table 2) .
             Although vitamin C is not naturally present in grains, it is added to some fortified breakfast cereals. 
             The vitamin C content of food may be reduced by prolonged storage and by cooking because ascorbic acid is water soluble and is destroyed by heat.
              </p>
            </p>
            <br></br>
      <Table striped>  
      <caption>Table 2: Vitamin C Content of Selected Foods</caption>
  <thead>
    <tr>
      <th>Food</th>
      <th>Milligrams (mg) per serving</th>
      <th>Percent (%) DV*</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Red pepper, sweet, raw, ½ cup</td>
      <td>95</td>
      <td>106</td>
    </tr>
    <tr>
      <td>Orange juice, ¾ cup</td>
      <td>93</td>
      <td>103</td>
    </tr>
    <tr>
      <td>Orange, 1 medium</td>
      <td>70</td>
      <td>78</td>
    </tr>
    <tr>
      <td>Grapefruit juice, ¾ cup</td>
      <td>70</td>
      <td>78</td>
    </tr>
    <tr>
      <td>Kiwifruit, 1 medium</td>
      <td>64</td>
      <td>71</td>
    </tr>
    <tr>
      <td>Green pepper, sweet, raw, ½ cup</td>
      <td>60</td>
      <td>67</td>
    </tr>
    <tr>
      <td>Broccoli, cooked, ½ cup</td>
      <td>51</td>
      <td>57</td>
    </tr>
    <tr>
      <td>Strawberries, fresh, sliced, ½ cup</td>
      <td>49</td>
      <td>54</td>
    </tr>
    <tr>
      <td>Brussels sprouts, cooked, ½ cup</td>
      <td>48</td>
      <td>53</td>
    </tr>
    <tr>
      <td>Grapefruit, ½ medium</td>
      <td>39</td>
      <td>43</td>
    </tr>
    <tr>
      <td>Broccoli, raw, ½ cup</td>
      <td>39</td>
      <td>43</td>
    </tr>
    <tr>
      <td>Tomato juice, ¾ cup</td>
      <td>33</td>
      <td>37</td>
    </tr>
    <tr>
      <td>Cantaloupe, ½ cup</td>
      <td>29</td>
      <td>32</td>
    </tr>
    <tr>
      <td>Cabbage, cooked, ½ cup</td>
      <td>28</td>
      <td>31</td>
    </tr>
    <tr>
      <td>Cauliflower, raw, ½ cup</td>
      <td>26</td>
      <td>29</td>
    </tr>
    <tr>
      <td>Potato, baked, 1 medium</td>
      <td>17</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Tomato, raw, 1 medium</td>
      <td>17</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Spinach, cooked, ½ cup</td>
      <td>9</td>
      <td>10</td>
    </tr>
    <tr>
      <td>Green peas, frozen, cooked, ½ cup</td>
      <td>8</td>
      <td>9</td>
    </tr>
  </tbody>
    </Table>
          </div>
          <div className='vitc-down'>
            <div className='vitc-down-content'>
              <h1 className='vitc-down-h1'>Eat these for Vitamin C &#8594;</h1>
              <img className='imgc' src='https://qph.cf2.quoracdn.net/main-qimg-9176ffd98e6b393257994b9989b104c6' alt='imgb' />
            </div>
          </div>
        </div>
      </>
    );
  }
}

