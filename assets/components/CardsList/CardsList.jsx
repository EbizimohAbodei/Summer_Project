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
      .get("http://api.hel.fi/linkedevents/v1/event")
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

  const nextPage = () => {
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

  return (
    <div className="cardsListContainer">
      {console.log(allEventsData)}
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
              location={
                item.location_extra_info?.en ||
                item.location_extra_info?.fi ||
                item.location_extra_info?.sv
              }
              dateTime={item?.start_time.replace(/T/g, " Time:").slice(0, -4)}
              description={
                item.short_description.en ||
                item.short_description.fi ||
                item.short_description.sv
              }
              eventImage={item?.images[0]?.url}
            />
          );
        })}
      </div>
      <div className="cardListNav">
        <button className="prevButton" onClick={prevPage}>
          Prev-page
        </button>
        <button className="nextButton" onClick={nextPage}>
          Next-page
        </button>
      </div>
    </div>
  );
}

export default CardsList;
