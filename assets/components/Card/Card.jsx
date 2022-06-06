import React from "react";
import "./card.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import { Link, useNavigate } from "react-router-dom";

function Card(props) {
  const [locationData, setLocationData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const image = "https://source.unsplash.com/250x200/?event";

  useEffect(() => {
    // declare the data fetching function
    setLoading(true);
    axios
      .get(`${props.locationCall}`)
      .then((resp) => {
        setLocationData(resp.data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const id = props.id.replace(/:/g, "%3A");

  if (loading) {
    return <Loading />;
  }

  const address = !locationData.street_address
    ? ""
    : locationData.street_address.fi + ", ";

  const postal_code = !locationData.postal_code ? "" : locationData.postal_code + ", ";

  const local_address = !locationData.address_locality
    ? ""
    : locationData.address_locality.fi + ", ";

  const street_address = `${address}${postal_code}${local_address}`;

  return (
    <div className="card">
      <img src={props.eventImage || image} onClick={() => navigate(`/events/${id}`)} />

      <div>
        <h1 onClick={props.addInterest} className="name">
          {props.name}
        </h1>
        <p className="dateTime">
          {props.startDate} {props.startTime} - {props.endDate} {props.endTime}
        </p>
        <p className="location">{street_address ? street_address : "no address"}</p>
        <p className="description">{props.description}</p>
        {props.children}
      </div>
    </div>
  );
}

export default Card;
