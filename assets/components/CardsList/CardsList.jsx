import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./cardslist.scss";
const axios = require("axios").default;
import HeroBanner from "../HeroBanner/HeroBanner";

function CardsList() {
  const [allEventsData, setAllEventsData] = useState([]);
  const [meta, setMeta] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://api.hel.fi/linkedevents/v1/event/?end=2025-12-31&page=35&start=today"
      )
      .then((response) => {
        setAllEventsData(response?.data);
        setMeta(response.data.meta);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const prevPage = () => {
    axios
      .get(`${meta.next}`)
      .then((res) => {
        setAllEventsData(res?.data);
        setMeta(res?.data?.meta);
      })
      .catch((error) => {
        return error;
      });
    window.scrollTo(0, 300);
  };

  const nextPage = () => {
    axios
      .get(`${meta.previous}`)
      .then((res) => {
        setAllEventsData(res?.data);
        setMeta(res?.data?.meta);
      })
      .catch((error) => {
        return error;
      });
    window.scrollTo(0, 300);
  };

  return (
    <div className="cardsListContainer">
      <div className="heroBanner">
        <HeroBanner />
      </div>
      <div className="cardsList">
        {allEventsData?.data?.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              name={item.name.en || item.name.fi || item.name.sv}
              locationCall={item.location["@id"]}
              startDate={new Date(item?.start_time).toLocaleDateString()}
              startTime={new Date(item?.start_time).toLocaleTimeString()}
              endDate={
                new Date(item?.end_time).toLocaleDateString() ===
                  new Date(item?.start_time).toLocaleDateString() ||
                new Date(item?.start_time).toLocaleDateString() >
                  new Date(item?.end_time).toLocaleDateString()
                  ? ""
                  : new Date(item?.end_time).toLocaleDateString()
              }
              endTime={new Date(item?.end_time).toLocaleTimeString()}
              description={
                // item.description.en ||
                // item.description.fi ||
                // item.description.sv ||
                item.short_description?.en ||
                item.short_description?.fi ||
                item.short_description?.sv
              }
              eventImage={item?.images[0]?.url}
            />
          );
        })}
      </div>
      <div className="cardListNav">
        {meta.previous !== null && (
          <button className="prevButton" onClick={prevPage}>
            Prev-page
          </button>
        )}
        <button className="nextButton" onClick={nextPage}>
          Next-page
        </button>
      </div>
    </div>
  );
}

export default CardsList;
