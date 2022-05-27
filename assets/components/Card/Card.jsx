import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";
import SingleEventPage from "../SingleEventPage/SingleEventPage";

function Card(props) {
  const id = props.id.replace(/:/g, "%3A");
  return (
    <div className="card">
      <img src={props.eventImage} />
      <div>
        <p className="date">{props.date}</p>
        <Link to={`cards/${id}`}>{props.name}</Link>
        <p className="location">{props.location}</p>
        <p className="dateTime">{props.dateTime}</p>
        <p className="description">{props.description}</p>
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
