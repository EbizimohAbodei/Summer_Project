import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

function Card(props) {
  const image = "https://source.unsplash.com/300x300/?event";
  const id = props.id.replace(/:/g, "%3A");
  return (
    <div className="card">
      <img src={props.eventImage || image} />
      <div>
        <Link to={`cards/${id}`} className="name">
          {props.name}
        </Link>
        <p className="dateTime">
          {props.startDate} {props.startTime} - {props.endDate} {props.endTime}
        </p>
        <p className="location">{props.location}</p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
