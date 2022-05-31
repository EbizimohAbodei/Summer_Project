import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SingleEventPage.scss";
import axios from "axios";
import React from "react";

const SingleEventPage = () => {
  const params = useParams();

  const [event, setEvent] = useState([]);
  const [place, setPlace] = useState([]);
  const [image, setImage] = useState("http://source.unsplash.com/afW1hht0NSs");

  useEffect(() => {
    axios
      .get("https://api.hel.fi/linkedevents/v1/event/" + params.id)
      .then((res) => {
        setEvent(res.data);
        console.log(res.data);
        setImage(res.data.images[0]?.url);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeTags = (str) => {
    if (!str) {
      return "no description";
    } else {
      str.toString();
    }
    return str.replace(/(<([^>]+)>)/gi, " ");
  };

  return event ? (
    <div className="eventPage">
      <div className="eventInfo">
        <img src={image} className="image" />
        <div className="eventData">
          <h2>{event?.name?.fi}</h2>
          <p>
            {new Date(event?.start_time).toLocaleDateString()},{" "}
            {new Date(event?.start_time).toLocaleTimeString()} -{" "}
            {new Date(event?.start_time).toLocaleDateString() ===
            new Date(event?.end_time).toLocaleDateString()
              ? ""
              : new Date(event?.end_time).toLocaleDateString() + ", "}
            {new Date(event?.end_time).toLocaleTimeString()}
          </p>
          <p>
            {removeTags(
              event?.short_description?.en ||
                event?.short_description?.fi ||
                event?.short_description?.sv
            )}
          </p>
        </div>
      </div>
      <div className="description">
        {removeTags(
          event?.description?.en ||
            event?.description?.fi ||
            event?.description?.sv
        )}
      </div>
    </div>
  ) : (
    <p>Loading data</p>
  );
};

export default SingleEventPage;
