import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";
import SingleEventPage from "../SingleEventPage/SingleEventPage";

function Card(props) {
  // const id = props.id;
  return (
    <div className="card">
      <img src={props.image} />
      <div>
        <p className="date">24.5.2022 19:30</p>
        <Link to={`cards/${props.id}`}>{props.name}</Link>
        <p className="location">
          Finnish National Opera and Ballet, Helsinginkatu 58
        </p>
        <div className="categories">
          <p>#opera</p>
          <p>#music</p>
          <p>#concerts</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
