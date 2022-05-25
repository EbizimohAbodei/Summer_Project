import React from "react";
import "./card.scss";

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} />
      <div>
        <p className="date">24.5.2022 19:30</p>
        <p className="name">{props.name}</p>
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
