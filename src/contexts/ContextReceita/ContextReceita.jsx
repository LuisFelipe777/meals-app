import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


const ContextReceita = createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function ContextReceitaProvider({ children }) {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [textSearch, setTextSearch] = useState("");
    const [oneMeal, setOneMeal] = useState("");

    async function getReceitas(url) {
        try {
            setLoading(true);
            const response = await axios.get(url);
            const data = await response.data;
            if (data.meals) {
                setMeals(data.meals);
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
        getReceitas(allMealsUrl);
    }, []);

    useEffect(() => {
        if (textSearch == "") getReceitas(allMealsUrl);
        getReceitas(`${allMealsUrl}${textSearch}`);
    }, [textSearch]);
    useEffect(() => {
        if (oneMeal == "") return;
        getReceitas(`${allMealsUrl}${oneMeal}`);
    }, [oneMeal]);
    return <ContextReceita.Provider value={{ meals, loading, setTextSearch, setOneMeal }}>
        {children}
    </ ContextReceita.Provider>
}
export { ContextReceita, ContextReceitaProvider }