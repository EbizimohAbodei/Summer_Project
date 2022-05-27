import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SingleEventPage.scss";
import axios from "axios";
import React from "react";

const SingleEventPage = () => {
  const params = useParams();

  const [event, setEvent] = useState([]);

  useEffect(() => {
    axios
      .get("api.hel.fi/linkedevents/v1/event/" + params.id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return event ? (
    <div className="eventPage">
      <h3>
        {event.name}
        {event.date}
      </h3>
      <div className="eventInfo">
        <div className="leftColumn">
          <p>{event.name}</p>
          <p>{event.date}</p>
          <p>{event.location}</p>
          <p>{event.website}</p>
        </div>
        <div className="rightColumn">
          <p>{event.description}</p>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading data</p>
  );
};

export default SingleEventPage;
