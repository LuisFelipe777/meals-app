import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextReceita } from "../../contexts/ContextReceita/ContextReceita";
import "./style.css";

export default function Home() {
    const { meals, loading } = useContext(ContextReceita);
    console.log(meals);
    if (loading) {
        return (
            <div className="home-container" style={{ height: "100vh" }}>
                <h2>Loading...</h2>
            </div>
        )
    }
    if (meals.length < 1) {
        return (
            <div className="home-container" style={{ height: "100vh" }}>
                <h2>nothing found</h2>
            </div>
        );
    }
    return (
        <div className="home-container">
            {meals.map((meal) => {
                const { strMeal: name, idMeal, strMealThumb: img } = meal;
                return (
                    <Link to={`/meals/${name}`}>
                        <div key={idMeal} className="meal-container">
                            <img src={img} alt="" />
                            <div className="description-contain">
                                <h4>{name}</h4>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );


}