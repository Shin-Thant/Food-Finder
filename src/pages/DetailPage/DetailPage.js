import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Detailpage.css";
import back from "../../img/back-icon.svg";

import { useHistory } from "react-router";

export const DetailPage = ({ match }) => {
    const [result, setResult] = useState({});

    const dataFetch = async () => {
        const { data } = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
        );

        // console.log(data.meals[0]);
        setResult(data.meals[0]);
    };

    useEffect(() => {
        dataFetch();
        console.log(match);
        // eslint-disable-next-line
    }, []);

    const history = useHistory();
    const backHandler = () => {
        console.log(history);
        history.push("/");
    };

    return (
        <div>
            {result.strMealThumb && (
                <>
                    <img
                        src={back}
                        alt="Back Button"
                        className="backBtn"
                        onClick={backHandler}
                    />

                    <div className="detailWrapper">
                        <img
                            className="detailImg"
                            src={result.strMealThumb}
                            alt=""
                        />
                        <div className="detailTextWrapper">
                            <h2 className="detailTitle">{result.strMeal}</h2>
                            <p className="detailIns">
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                {result.strInstructions}
                            </p>
                            <a
                                className="detailBtn"
                                href={result.strYoutube}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Watch Tutorial
                            </a>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
