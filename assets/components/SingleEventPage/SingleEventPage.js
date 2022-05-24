import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SingleEventPage.module.css";
import axios from "axios";

const SingleEventPage = () => {
  const params = useParams;

  const [event, setEvent] = useState([]);

  return (
    <div className="eventPage">
      <h3>
        {event.name}, {event.date}
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
  );
};

export default SingleEventPage;
