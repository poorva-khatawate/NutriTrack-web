// src/components/WaterIntake.js
import React, { useState } from 'react';
import './WaterIntake.css';
import Navbar from '../Navbar/Navbar';
const WaterIntake = () => {
  const [buttonText, setButtonText] = useState('Drink 250ml');
  const [ageRange, setAgeRange] = useState('');
  const [weight, setWeight] = useState('');
  const [intakeRecommendation, setIntakeRecommendation] = useState('');
  const [totalIntake,setTotalIntake]=useState(0);
  const [remainingIntake, setRemainingIntake] = useState(0); 

  const handleAgeRangeChange = (e) => {
    console.log(e);
    setAgeRange(e.target.value);
    // Clear intake recommendation when age range changes
    setIntakeRecommendation('');
    setRemainingIntake(0);
    const selectedAgeRange = e.target.value;
  if (selectedAgeRange === '0-6 months') {
    setButtonText('Drink 50ml');
  } else {
    setButtonText('Drink 250ml');
  }
    
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleIntakeButtonClick = (ml) => {
    // Update intake recommendation based on age and weight
    const newTotalIntake = totalIntake + ml;
 setTotalIntake(newTotalIntake);
    const recommendations = [
      {
        ageRange: "0-6 months",
        weightRange: "5-8 kg",
        intake: "150-200 ml/day"
      },
      {
        ageRange: "7-12 months",
        weightRange: "7-10 kg",
        intake: "200-300 ml/day"
      },
      {
        ageRange: "1-3 years",
        weightRange: "10-15 kg",
        intake: "300-400 ml/day"
      },
      {
        ageRange: "4-8 years",
        weightRange: "16-22 kg",
        intake: "400-600 ml/day"
      },
      {
        ageRange: "9-13 years",
        weightRange: "23-41 kg",
        intake: "600-900 ml/day"
      },
      {
        ageRange: "14-18 years (boys)",
        weightRange: "42-64 kg",
        intake: "1500-2500 ml/day"
      },
      {
        ageRange: "14-18 years (girls)",
        weightRange: "42-64 kg",
        intake: "1500-2500 ml/day"
      },
      {
        ageRange: "19-30 years (men)",
        weightRange: "65-74 kg",
        intake: "2500-3700 ml/day"
      },
      {
        ageRange: "19-30 years (women)",
        weightRange: "57-67 kg",
        intake: "2500-3700 ml/day"
      },
      {
        ageRange: "31-50 years (men)",
        weightRange: "65-74 kg",
        intake: "2500-3700 ml/day"
      },
      {
        ageRange: "31-50 years (women)",
        weightRange: "57-67 kg",
        intake: "2500-3700 ml/day"
      },
      {
        ageRange: "51-70 years (men)",
        weightRange: "65-74 kg",
        intake: "2500-3700 ml/day"
      },
      {
        ageRange: "51-70 years (women)",
        weightRange: "57-67 kg",
        intake: "2500-3700 ml/day"
      },
      {
        ageRange: "71+ years (men)",
        weightRange: "65-74 kg",
        intake: "2500-3700 ml/day"
      },
      {
        ageRange: "71+ years (women)",
        weightRange: "57-67 kg",
        intake: "2500-3700 ml/day"
      },
      {
        ageRange: "Pregnant (14-18 years)",
        weightRange: "42-64 kg",
        intake: "2000-3000 ml/day"
      },
      {
        ageRange: "Pregnant (19-30 years)",
        weightRange: "65-74 kg",
        intake: "2300-3100 ml/day"
      },
      {
        ageRange: "Pregnant (31-50 years)",
        weightRange: "65-74 kg",
        intake: "2300-3100 ml/day"
      },
      {
        ageRange: "Breastfeeding (14-18 years)",
        weightRange: "42-64 kg",
        intake: "2300-3100 ml/day"
      },
      {
        ageRange: "Breastfeeding (19-30 years)",
        weightRange: "65-74 kg",
        intake: "2700-3800 ml/day"
      },
      {
        ageRange: "Breastfeeding (31-50 years)",
        weightRange: "65-74 kg",
        intake: "2700-3800 ml/day"
      }
      // Include other age range recommendations here
    ]; 
    console.log("Age Range:", ageRange);
    console.log("Weight Range:", weight);
    const recommendation = recommendations.find(
      (recommendation) =>
        recommendation.ageRange === ageRange 
    );
    
console.log("Recommendation:", recommendation);

    if (recommendation) {
      
      // Extract min and max intake values from the recommendation
      const [minIntake, maxIntake] = recommendation.intake.split('-').map(str => parseInt(str));
      // Calculate how much more water the user needs to drink
      
      const newRemainingIntake = minIntake - newTotalIntake;

      setRemainingIntake(newRemainingIntake);
      if (newRemainingIntake > 0) {
        setIntakeRecommendation(
          <>
            You need to drink between {minIntake} to {maxIntake} ml/day.
            <br />
            <p className='water-yet'>Remaining minimum Intake: {newRemainingIntake} ml.</p>
          </>
        );
      } else {
        setIntakeRecommendation(<>You need to drink between {minIntake} to {maxIntake} ml/day.<br/><p className='water-done'>You've reached the minimum intake of {minIntake} ml/day.</p></>);
      }
      
      
    } else {
      setIntakeRecommendation('Recommendation not found');
    }
  };

  return (
    <><Navbar />
    <div className='water-main'>
          <h1 className='water-h1'>Water Intake Calculator</h1><br />
          <div className="form-group">
              <label className='age-range'>
                  Age Range:
                  <select className='select-age' value={ageRange} onChange={handleAgeRangeChange}>
                      <option className='op-age' value="">Select Age Range</option>
                      <option  className='op-age' value="0-6 months">0-6 months</option>
                      <option  className='op-age' value="7-12 months">7-12 months</option>
                      <option  className='op-age' value="1-3 years">1-3 years</option>
                      <option  className='op-age' value="4-8 years">4-8 years</option>
                      <option  className='op-age' value="9-13 years">9-13 years</option>
                      <option  className='op-age' value="14-18 years (boys)">14-18 years (boys)</option>
                      <option  className='op-age' value="14-18 years (girls)">14-18 years (girls)</option>
                      <option  className='op-age' value="19-30 years (men)">19-30 years (men)</option>
                      <option  className='op-age' value="19-30 years (women)">19-30 years (women)</option>
                      <option  className='op-age' value="31-50 years (men)">31-50 years (men)</option>
                      <option  className='op-age' value="31-50 years (women)">31-50 years (women)</option>
                      <option className='op-age'  value="51-70 years (men)">51-70 years (men)</option>
                      <option className='op-age'  value="51-70 years (women)">51-70 years (women)</option>
                      <option  className='op-age' value="71+ years (men)">71+ years (men)</option>
                      <option  className='op-age' value="71+ years (women)">71+ years (women)</option>
                      <option  className='op-age' value="Pregnant (14-18 years)">Pregnant (14-18 years)</option>
                      <option  className='op-age' value="Pregnant (19-30 years)">Pregnant (19-30 years)</option>
                      <option className='op-age' value="Pregnant (31-50 years)">Pregnant (31-50 years)</option>
                      <option className='op-age' value="Breastfeeding (14-18 years)">Breastfeeding (14-18 years)</option>
                      <option className='op-age' value="Breastfeeding (19-30 years)">Breastfeeding (19-30 years)</option>
                      <option className='op-age' value="Breastfeeding (31-50 years)">Breastfeeding (31-50 years)</option>
                  </select>
              </label>

              <br /><br />

              <label className='weight-water'>
                  Weight:
                  <input type="text" value={weight} onChange={handleWeightChange} />
              </label>
              <br /><br />
              <button className='water-btn' onClick={() => handleIntakeButtonClick(buttonText === 'Drink 50ml' ? 50 : 250)}>{buttonText} </button>
          </div>
          <div className="mt-3">
              <p>Intake Recommendation:<br /> {intakeRecommendation}</p>
              <p>Total Intake:{totalIntake} ml</p>
          </div>

      </div></>
  );
};
  

export default WaterIntake;