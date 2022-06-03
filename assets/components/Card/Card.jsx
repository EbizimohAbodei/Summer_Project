import React from "react";
import "./card.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Card(props) {
  const [locationData, setLocationData] = useState([]);

  const image = "https://source.unsplash.com/250x200/?event";

  useEffect(() => {
    // declare the data fetching function
    axios
      .get(`${props.locationCall}`)
      .then((resp) => {
        setLocationData(resp.data);
      })
      .catch(console.error);
  }, []);

  const id = props.id.replace(/:/g, "%3A");
  return (
    <div className="card">
      <img src={props.eventImage || image} />
      <div>
        <Link to={`events/${id}`} className="name">
          {props.name}
        </Link>
        <p className="dateTime">
          {props.startDate} {props.startTime} - {props.endDate} {props.endTime}
        </p>
        <p className="location">
          {locationData.street_address?.en ||
            locationData.street_address?.fi ||
            locationData.street_address?.sv}
          , {locationData.postal_code},{" "}
          {locationData.address_locality?.en ||
            locationData.address_locality?.fi ||
            locationData.address_locality?.sv}
        </p>
        <p className="description">{props.description}</p>
        <div>{props.children}</div>
      </div>
    </div>
  );
}

export default Card;
