import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SingleEventPage.scss";
import Map from "../Map/Map";
import axios from "axios";
import React from "react";

const SingleEventPage = () => {
  const params = useParams();

  const [event, setEvent] = useState([]);
  const [place, setPlace] = useState([]);
  const [image, setImage] = useState();
  const [price, setPrice] = useState({ is_free: true });

  useEffect(() => {
    axios
      .get("https://api.hel.fi/linkedevents/v1/event/" + params.id)
      .then((res) => {
        setEvent(res.data);
        res.data?.images[0]
          ? axios
              .get(res.data?.images[0]["@id"])
              .then((res) => {
                console.log(res.data);
                setImage(res.data);
              })
              .catch((err) => console.log("Something went wrong ", err))
          : setImage({
              url: "http://source.unsplash.com/afW1hht0NSs",
              photographer_name: "Unsplash",
            });
        setPrice(res.data?.offers[0]);
        axios
          .get(res.data.location["@id"])
          .then((res) => {
            setPlace(res.data);
          })
          .catch((err) =>
            console.log(
              "An error happened while looking place information: ",
              err
            )
          );
      })
      .catch((err) => console.log(err));
  }, []);

  return event ? (
    <div className="eventPage">
      <div className="eventInfo">
        <div className="imageContainer">
          <img src={image?.url} className="image" alt={image?.alt_text || ""} />
          <p>
            <small>{image?.photographer_name}</small>
          </p>
        </div>
        <div className="eventData">
          <h2>{event?.name?.en || event?.name?.fi || event?.name?.sv}</h2>
          <p>
            <small>
              <a
                href={
                  event?.info_url?.en ||
                  event?.info_url?.fi ||
                  event?.info_url?.sv
                }
                target="_blank"
              >
                {event?.info_url?.en ||
                  event?.info_url?.fi ||
                  event?.info_url?.sv}
              </a>
            </small>
          </p>
          <p>
            {new Date(event?.start_time)
              .toLocaleDateString()
              .replaceAll("/", ".")}
            , {new Date(event?.start_time).toLocaleTimeString()} -{" "}
            {new Date(event?.start_time).toLocaleDateString() ===
              new Date(event?.end_time).toLocaleDateString() ||
            new Date(event?.start_time).toLocaleDateString() >
              new Date(event?.end_time).toLocaleDateString()
              ? ""
              : new Date(event?.end_time)
                  .toLocaleDateString()
                  .replaceAll("/", ".") + ", "}
            {new Date(event?.end_time).toLocaleTimeString()}
          </p>
          <h4>
            Tickets:{" "}
            {price.is_free
              ? "Free"
              : price.price?.en || price.price?.fi || price.price?.sv}
          </h4>
          <p>{place?.name?.en || place?.name?.fi || place?.name?.sv}</p>
          <p>
            {event?.location_extra_info?.en ||
              event?.location_extra_info?.fi ||
              event?.location_extra_info?.sv}
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
          <div
            dangerouslySetInnerHTML={{
              __html:
                event?.short_description?.en ||
                event?.short_description?.fi ||
                event?.short_description?.sv,
            }}
          ></div>
          <p></p>
        </div>
      </div>
      <div
        className="description"
        dangerouslySetInnerHTML={{
          __html:
            event?.description?.en ||
            event?.description?.fi ||
            event?.description?.sv,
        }}
      ></div>
      <div className="map">
        <Map />
      </div>
    </div>
  ) : (
    <p>Loading data</p>
  );
};

export default SingleEventPage;
