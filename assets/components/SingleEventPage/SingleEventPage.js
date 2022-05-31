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
        setImage(res.data.images[0]?.url);
        console.log(res.data);
        axios
          .get(res.data.location["@id"])
          .then((res) => {
            setPlace(res.data);
            console.log(res.data);
          })
          .catch((err) =>
            console.log("An error happened while looking place information: ", err)
          );
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
      <a
        href={event?.info_url?.en || event?.info_url?.fi || event?.info_url?.sv}
        target="_blank"
      >
        <h2>{event?.name?.fi}</h2>
        <p>
          <small>
            {event?.info_url?.en || event?.info_url?.fi || event?.info_url?.sv}
          </small>
        </p>
      </a>
      <div className="eventInfo">
        <div className="leftColumn">
          {/* <h4>{event?.name?.fi}</h4> */}

          <img src={image} className="image" />
          <p>
            {new Date(event?.start_time).toLocaleDateString()},{" "}
            {new Date(event?.start_time).toLocaleTimeString()} -{" "}
            {new Date(event?.start_time) === new Date(event?.end_time)
              ? ""
              : new Date(event?.start_time) > event?.end_time
              ? ""
              : new Date(event?.end_time).toLocaleDateString() + ", "}
            {new Date(event?.end_time).toLocaleTimeString()}
          </p>
          <p>
            {place?.street_address?.en ||
              place?.street_address?.fi ||
              place?.street_address?.sv}
          </p>
          <p>
            {place?.postal_code}{" "}
            {place?.address_locality?.en ||
              place?.address_locality?.fi ||
              place?.address_locality?.sv}
          </p>
          <p>{place?.name?.en || place?.name?.fi || place?.name?.sv}</p>
          <p>
            {removeTags(
              event?.short_description?.en ||
                event?.short_description?.fi ||
                event?.short_description?.sv
            )}
          </p>
          <p></p>
        </div>
        <div className="rightColumn">
          {removeTags(
            event?.description?.en || event?.description?.fi || event?.description?.sv
          )}
        </div>
      </div>
    </div>
  ) : (
    <p>Loading data</p>
  );
};

export default SingleEventPage;
