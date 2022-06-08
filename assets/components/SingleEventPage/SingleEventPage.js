import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SingleEventPage.scss";
import Map from "../Map/Map";
import axios from "axios";
import React from "react";
import Loading from "../Loading/Loading";
import AiOutlineEye from "react-icons/ai";

const SingleEventPage = () => {
  const params = useParams();
  const likeData = useLocation().state.response;
  const [event, setEvent] = useState([]);
  const [place, setPlace] = useState([]);
  const [image, setImage] = useState();
  const [price, setPrice] = useState({ is_free: true });
  const [loading, setLoading] = useState(true);
  console.log(likeData); //LIKE DATA HERE

  useEffect(() => {
    axios
      .get("https://api.hel.fi/linkedevents/v1/event/" + params.id)
      .then((res) => {
        setEvent(res.data);
        console.log(res.data);
        res.data?.images[0]
          ? axios
              .get(res.data?.images[0]["@id"])
              .then((res) => {
                setImage(res.data);
              })
              .catch((err) => console.log("Something went wrong ", err))
          : setImage({
              url: "http://source.unsplash.com/afW1hht0NSs",
              photographer_name:
                "Unsplash Markus Winkler https://unsplash.com/@markuswinkler",
            });
        setPrice(res.data?.offers[0]);
        axios
          .get(res.data.location["@id"])
          .then((res) => {
            setPlace(res.data);
            console.log(res.data);
          })
          .catch((err) =>
            console.log("An error happened while looking place information: ", err)
          );
        setLoading(!loading);
      })
      .catch((err) => console.log(err));
  }, []);

  return !loading ? (
    <div className="eventPage">
      <div className="eventInfo">
        <div className="imageContainer">
          <img src={image?.url} className="image" alt={image?.alt_text || ""} />
          {image?.photographer_name ? (
            <p className="imagecredit">
              <small>{image?.photographer_name?.replaceAll("(c)", "©")}</small>
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="eventData">
          <h2>{event?.name?.en || event?.name?.fi || event?.name?.sv}</h2>
          <p>
            <small>
              <a
                href={event?.info_url?.en || event?.info_url?.fi || event?.info_url?.sv}
                target="_blank"
              >
                {event?.info_url?.en || event?.info_url?.fi || event?.info_url?.sv}
              </a>
            </small>
          </p>
          <p>
            <small>{likeData?.interestCount || "0"} have viewed this event</small>
          </p>
          <p className="date">
            {new Date(event?.start_time).toLocaleDateString().replaceAll("/", ".")},{" "}
            {new Date(event?.start_time).toLocaleTimeString()} -{" "}
            {new Date(event?.start_time).toLocaleDateString() ===
              new Date(event?.end_time).toLocaleDateString() ||
            new Date(event?.start_time).toLocaleDateString() >
              new Date(event?.end_time).toLocaleDateString()
              ? ""
              : new Date(event?.end_time).toLocaleDateString().replaceAll("/", ".") +
                ", "}
            {new Date(event?.end_time).toLocaleTimeString()}
          </p>

          <h4 className="price">
            Tickets:{" "}
            {price.is_free
              ? "Free"
              : price.price?.en || price.price?.fi || price.price?.sv}
          </h4>
          <p className="location">
            {place?.name?.en || place?.name?.fi || place?.name?.sv}
          </p>
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
            className="short_description"
            dangerouslySetInnerHTML={{
              __html:
                event?.short_description?.en ||
                event?.short_description?.fi ||
                event?.short_description?.sv ||
                event?.short_description?.ru ||
                "No description available",
            }}
          ></div>
        </div>
      </div>
      <div
        className="description"
        dangerouslySetInnerHTML={{
          __html:
            event?.description?.en ||
            event?.description?.fi ||
            event?.description?.sv ||
            event?.description?.ru ||
            event?.short_description?.en ||
            event?.short_description?.fi ||
            event?.short_description?.sv ||
            event?.short_description?.ru ||
            "No description available",
        }}
      ></div>
      <div className="map">
        <Map
          longitude={place?.position?.coordinates[1]}
          latitude={place?.position?.coordinates[0]}
          name={place?.name}
          url={place?.info_url}
          street_address={place?.street_address}
          postal_code={place?.postal_code}
          telephone={place?.telephone}
          city={place?.address_locality}
        />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default SingleEventPage;
