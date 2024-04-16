import React, { useState } from 'react';
import './BmiCalculator.css'; 
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

function BmiCalculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('');
    const [status, setStatus] = useState('');
    const [recommendations, setRecommendations] = useState([]);
    

    const calculateBMI = (e) => {
        e.preventDefault();
        if (weight && height) {
            const bmiValue = (weight / Math.pow(height / 100, 2)).toFixed(2);
            setBmi(bmiValue);
            setWeightStatus(bmiValue);
            fetchRecommendations(bmiValue);
        }
    };

    const setWeightStatus = (bmiValue) => {
        if (bmiValue < 18.5) {
            setStatus('Underweight');
        } else if (bmiValue < 25) {
            setStatus('Normal weight');
        } else if (bmiValue < 30) {
            setStatus('Overweight');
        } else {
            setStatus('Obese');
        }
    };



    const fetchRecommendations = (bmiValue) => {
       
        const apiKey = '8beae934b30c4848ac8f7b55483c4763';
        const minCalories = bmiValue < 18.5 ? 500 : bmiValue < 25 ? 300 : 100;
        const maxCalories = bmiValue < 18.5 ? 800 : bmiValue < 25 ? 500 : 300;
        const url = `https://api.spoonacular.com/recipes/findByNutrients?minCalories=${minCalories}&maxCalories=${maxCalories}&number=5&apiKey=${apiKey}`;

        axios.get(url)
            .then(response => {
                setRecommendations(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
            
    };

    return (
        <><Navbar /><><div className='bmi-main'>
            <div className='container-bmi'>
                <h1 className='title-bmi'>BMI Calculator</h1>
                <form className='form-bmi' onSubmit={calculateBMI}>
                    <input className="input-bmi" type="number" placeholder="Weight in kg" value={weight} onChange={e => setWeight(e.target.value)} />
                    <input className="input-bmi" type="number" placeholder="Height in cm" value={height} onChange={e => setHeight(e.target.value)} />
                    <button className="button-bmi" type="submit">Calculate BMI</button>
                </form>
                {bmi && <p className="result-bmi">Your BMI is: {bmi}</p>}
                {status && <p className="status-bmi">Your weight status is: {status}</p>}
                {status && <h2 className="subtitle-bmi">Food Recommendations:</h2>}
                <div className="recommendations-bmi">
                    {recommendations.map(recipe => (
                        <div key={recipe.id} className="recipe-bmi">
                            <img src={recipe.image} alt={recipe.title} />
                            <div className="recipe-info-bmi">
                                <p className="recipe-titl-bmi">{recipe.title}</p>
                                <a className="recipe-link-bmi" href={recipe.link} target="_blank" rel="noopener noreferrer">View Recipe</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div></></>
    );
}

export default BmiCalculator;
