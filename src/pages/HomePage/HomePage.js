import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../Card";
import "./HomePage.css";

export default function HomePage() {
    const [result, setResult] = useState([]);
    const [ready, setReady] = useState(false);

    const dataFetch = async () => {
        const { data } = await axios.get(
            "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
        );
        setResult(data.meals);
    };

    useEffect(() => {
        dataFetch();
    }, []);

    // *for adding animation
    if (ready) {
        return (
            <div id="toTop">
                <div className="main-header-container">
                    <a href="#toTop" className="main-header">
                        Food Find with Us
                    </a>
                </div>

                <div className="cardsWrapper">
                    {result.map((item) => (
                        <Card
                            title={item.strMeal}
                            imageURL={item.strMealThumb}
                            key={item.idMeal}
                            id={item.idMeal}
                        />
                    ))}
                </div>
            </div>
        );
    } else {
        if (result) {
            setReady(true);
        }
    }

    // return (
    //     <div className="cardsWrapper">
    //         {result.map((item) => (
    //             <Card
    //                 title={item.strMeal}
    //                 imageURL={item.strMealThumb}
    //                 key={item.idMeal}
    //                 id={item.idMeal}
    //             />
    //         ))}
    //     </div>
    // );
}
