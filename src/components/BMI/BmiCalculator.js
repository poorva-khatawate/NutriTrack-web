import React, { useState } from 'react';
import './BmiCalculator.css'; 
import axios from 'axios';

function BmiCalculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('');
    const [status, setStatus] = useState('');
    const [recommendations, setRecommendations] = useState([]);
    const [error, setError] = useState(null); // New state for error handling

    const apiKey = 'da9155bc121d47308be85494618800e7'; //input your API_KEY

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
        const minCalories = bmiValue < 18.5 ? 500 : bmiValue < 25 ? 300 : 100;
        const maxCalories = bmiValue < 18.5 ? 800 : bmiValue < 25 ? 500 : 300;
        const url = `https://api.spoonacular.com/recipes/findByNutrients?minCalories=${minCalories}&maxCalories=${maxCalories}&number=5&apiKey=${apiKey}`;

        axios.get(url)
            .then(response => {
                const recommendationsWithLink = response.data.map(recipe => ({
                    ...recipe,
                    link: `https://spoonacular.com/recipes/${recipe.title.replace(/ /g, "-")}-${recipe.id}`
                }));
                setRecommendations(recommendationsWithLink);
            })
            .catch(error => {
                setError('Error fetching data: ', error);
                console.error('Error fetching data: ', error);
            });
    };

    return (
        <div className='container1'>
            <h1 className='title'>BMI Calculator</h1>
            <form className='form' onSubmit={calculateBMI}>
                <input className="input" type="number" placeholder="Weight in kg" value={weight} onChange={e => setWeight(e.target.value)} />
                <input className="input" type="number" placeholder="Height in cm" value={height} onChange={e => setHeight(e.target.value)} />
                <button className="button" type="submit" >Calculate BMI</button>
            </form>
            {bmi && <p className="result">Your BMI is: {bmi}</p>}
            {status && <p className="status">Your weight status is: {status}</p>}
            {status && <h2 className="subtitle">Food Recommendations:</h2>}
            {error && <p className="error">{error}</p>}
            <div className="recommendations">
                {recommendations.map(recipe => (
                    <div key={recipe.id} className="recipe">
                        <img src={recipe.image} alt={recipe.title} />
                        <div className="recipe-info">
                            <p className="recipe-title">{recipe.title}</p>
                            <a className="recipe-link" href={recipe.link} target="_blank" rel="noopener noreferrer">View Recipe</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BmiCalculator;
