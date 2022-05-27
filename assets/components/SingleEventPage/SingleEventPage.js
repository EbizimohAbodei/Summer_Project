import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SingleEventPage.scss";
import axios from "axios";
import React from "react";

const SingleEventPage = () => {
  const params = useParams();

  const [event, setEvent] = useState([]);
  const [place, setPlace] = useState([]);

  useEffect(() => {
    axios
      .get("http://api.hel.fi/linkedevents/v1/event/" + params.id)
      .then((res) => {
        setEvent(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return event ? (
    <div className="eventPage">
      <h2>{event?.name?.fi}</h2>
      <div className="eventInfo">
        <div className="leftColumn">
          <h4>{event?.name?.fi}</h4>
          <p>
            {new Date(event?.start_time).toLocaleDateString()},{" "}
            {new Date(event?.start_time).toLocaleTimeString()} -{" "}
            {new Date(event?.end_time).toLocaleDateString()},{" "}
            {new Date(event?.end_time).toLocaleTimeString()}
          </p>
          <p>
            {event?.short_description?.en ||
              event?.short_description?.fi ||
              event?.short_description?.sv}
          </p>
        </div>
        <div className="rightColumn">
          {event?.description?.en || event?.description?.fi || event?.description?.sv}
        </div>
      </div>
    </div>
  ) : (
    <p>Loading data</p>
  );
};

export default SingleEventPage;
