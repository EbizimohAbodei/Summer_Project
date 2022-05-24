import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import classes from "./SingleEventPage.module.css";
import axios from "axios";

const SingleEventPage = () => {
  const params = useParams;

  const [event, setEvent] = useState([]);

  return (
    <div className={classes.eventPage}>
      <h3>
        {event.name}, {event.date}
      </h3>
      <div className={classes.eventInfo}>
        <div className={classes.leftColumn}>
          <p>{event.name}</p>
          <p>{event.date}</p>
          <p>{event.location}</p>
          <p>{event.website}</p>
        </div>
        <div className={classes.rightColumn}>
          <p>{event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleEventPage;
