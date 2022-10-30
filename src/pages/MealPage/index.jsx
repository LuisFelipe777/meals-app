import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./style.css";

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export default function MealPage() {

    const { id } = useParams();
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getReceitas(param) {
        try {
            setLoading(true);
            const response = await axios.get(allMealsUrl + param);
            const data = await response.data;
            if (data.meals) {
                setLoading(true);
                setMeals(data.meals);
                setLoading(false);
            }
            else {
                setMeals([]);
            }
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getReceitas(id);
    }, [id]);
    if (loading) {
        return (
            <div className="home-container" style={{ height: "100vh" }}>
                <h2>Loading...</h2>
            </div>
        )
    }
    return (
        <div className="home-container">
            {meals.map((meal) => {
                const { strMeal: name, idMeal, strMealThumb: img, strInstructions: instructions } = meal;
                return (
                    <div key={idMeal} className="meal-contain">
                        <div className="img-contain">
                            <img src={img} alt="" />
                        </div>
                        <div className="instructions-contain">
                            <h2>{name}</h2>
                            <p><h3>preparation mode: </h3>{instructions}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    )

}