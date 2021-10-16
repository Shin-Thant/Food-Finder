import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ title, imageURL, id }) => {
    return (
        <div className="cardWrapper">
            <img className="cardImg" src={imageURL} alt="" />
            <h2 className="cardTitle">{title}</h2>
            <Link to={`/foodDetails/${id}`}>
                <button className="cardBtn">Watch Details</button>
            </Link>
        </div>
    );
};

export default Card;
