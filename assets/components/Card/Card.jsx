import React from "react";
import "./card.css";

function Card() {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/150" />
      <div className="card_info">
        <p className="date">24.5.2022 19:30</p>
        <p className="name">Event Name</p>
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
