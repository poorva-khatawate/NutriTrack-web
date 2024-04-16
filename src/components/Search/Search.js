import React from "react";
import Spinner from "./Spinner";
import './Search.css'
import { useState } from "react";
import { useEffect } from "react";
import { FaSearch } from 'react-icons/fa';
import Navbar from "../Navbar/Navbar";

function Search() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  //  const [error,setError] = useState(null);
  const [nutritionInfo, setNutritionInfo] = useState(null);
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);
  const API_KEY = 'f8zmBkfwODgKdj3Q96xQpkyRUhvcNDfVr9oBpANO';

  useEffect(() => {
    setNotFound(false); // Reset notFound state when query changes
    console.log("Use effect called");
  }, [query]);

  const handleSearch = async () => {
    setLoading(true);
    //  setError(null);
    setNutritionInfo(null);
    setNotFound(false);

    try {
      const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${query}&api_key=${API_KEY}`);

      const getNutrientValue = (nutrients, id) => {
        const nutrient = nutrients.find(n => n.nutrientId === id);

        if (nutrient) {
          return `${nutrient.value} ${nutrient.unitName || ''}`.trim();
        }
        return 'Not available';
      };

      const data = await response.json();

      if (data.foods && data.foods.length > 0) {
        const foodItem = data.foods[0];
        // if(foodItem && foodItem.foodNutrients){
        setNutritionInfo({
          //     name : foodItem.description,
          //     protein : foodItem.foodNutrients.find(nutrient => nutrient.nutrientId===1003)?.value,

          //     carbohydrate : foodItem.foodNutrients.find(nutrient=> nutrient.nutrientId===1005)?.value ,
          //     energy : foodItem.foodNutrients.find(nutrient=> nutrient.nutrientId===1008)?.value ,
          //     fat : foodItem.foodNutrients.find(nutrient=>nutrient.nutrientId===1004)?.value ,

          //     // vitaminA : foodItem.foodNutrients.find(nutrient => nutrient.nutrientId===1104).value,




          //    fiber : foodItem.foodNutrients.find(nutrient=> nutrient.nutrientId===1079)?.value ,
          //     calcium : foodItem.foodNutrients.find(nutrient=>nutrient.nutrientId===1087)?.value ,
          //     iron : foodItem.foodNutrients.find(nutrient=>nutrient.nutrientId===1089)?.value ,
          //     vitaminA : foodItem.foodNutrients.find(nutrient=>nutrient.nutrientId===1104)?.value,
          //     vitaminC : foodItem.foodNutrients.find(nutrient => nutrient.nutrientId===1162)?.value,
          //     cholesterol : foodItem.foodNutrients.find(nutrient=>nutrient.nutrientId===1253)?.value

          name: foodItem.description,
          protein: getNutrientValue(foodItem.foodNutrients, 1003),
          carbohydrate: getNutrientValue(foodItem.foodNutrients, 1005),
          energy: getNutrientValue(foodItem.foodNutrients, 1008),
          fat: getNutrientValue(foodItem.foodNutrients, 1004),
          fiber: getNutrientValue(foodItem.foodNutrients, 1079),
          calcium: getNutrientValue(foodItem.foodNutrients, 1087),
          iron: getNutrientValue(foodItem.foodNutrients, 1089),
          vitaminA: getNutrientValue(foodItem.foodNutrients, 1104),
          vitaminC: getNutrientValue(foodItem.foodNutrients, 1162),
          cholesterol: getNutrientValue(foodItem.foodNutrients, 1253)
        });

        //  console.log(data);
      }
      else {
        console.log("Food Item not found");
        console.error("Food item not found");
        setNotFound(true);
      }
    }
    catch (error) {
      console.log("An error occured while fetching the data", error);
    }

    setLoading(false);
  };

  // const handleInputChange = (e) => {
  //     setQuery(e.target.value);
  //     setNotFound(false); // Reset notFound state
  // };



  return (
    <><Navbar /><div className="search-container">
      <h1 class="page-heading">Food Nutritional Values At A Glance</h1>
      <div className="search-form">
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter food item" />
        <button className="search-button" onClick={handleSearch} disabled={loading}>
          {loading ? (<Spinner />) : <FaSearch />}</button>
      </div>
      <br />

      {notFound && `No results found for "${query}". Please try another search.`}

      {nutritionInfo && (
        <div className="result-container">
          <h2 className="result-title">{nutritionInfo.name}</h2>
          <table className="result-table">
            <tbody>
              <tr>
                <td className="result-label">Protein:</td>
                <td>{nutritionInfo.protein}</td>
              </tr>
              <tr>
                <td className="result-label">Carbohydrates:</td>
                <td>{nutritionInfo.carbohydrate}</td>
              </tr>
              <tr>
                <td className="result-label">Energy:</td>
                <td>{nutritionInfo.energy}</td>
              </tr>
              <tr>
                <td className="result-label">Fat:</td>
                <td>{nutritionInfo.fat}</td>
              </tr>
              <tr>
                <td className="result-label">Fiber:</td>
                <td>{nutritionInfo.fiber}</td>
              </tr>
              <tr>
                <td className="result-label">Calcium:</td>
                <td>{nutritionInfo.calcium}</td>
              </tr>
              <tr>
                <td className="result-label">Iron:</td>
                <td>{nutritionInfo.iron}</td>
              </tr>
              <tr>
                <td className="result-label">Vitamin A:</td>
                <td>{nutritionInfo.vitaminA}</td>
              </tr>
              <tr>
                <td className="result-label">Vitamin C:</td>
                <td>{nutritionInfo.vitaminC}</td>
              </tr>
              <tr>
                <td className="result-label">Cholesterol:</td>
                <td>{nutritionInfo.cholesterol}</td>
              </tr>
            </tbody>
            {/* <p>Carbohydrates : {nutritionInfo.carbohydrate}</p>
                    <p>Energy : {nutritionInfo.energy}</p>
                    <p>Fat : {nutritionInfo.fat}</p>
                    <p>Fiber : {nutritionInfo.fiber}</p>
                    <p>Calcium : {nutritionInfo.calcium}</p>
                    <p>Iron : {nutritionInfo.iron}</p>
                    <p>Vitamin A : {nutritionInfo.vitaminA}</p>
                    <p>Vitamin C : {nutritionInfo.vitaminC}</p>
                    <p>Cholesterol : {nutritionInfo.cholesterol}</p> */}


          </table>
        </div>
      )}


    </div></>
  )
}

export default Search;