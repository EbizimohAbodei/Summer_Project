import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Cardslist.scss";
const axios = require("axios").default;
import HeroBanner from "../HeroBanner/HeroBanner";

function CardsList() {
  const [allEventsData, setAllEventsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://api.hel.fi/linkedevents/v1/event")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="CardList">
      <HeroBanner />
      {console.log(allEventsData[0])}
      <Card
        id={allEventsData[0]?.id}
        name={allEventsData[0]?.name.fi}
        image={allEventsData[0]?.description?.images[0]?.url}
      />
    </div>
  );
}

export default CardsList;
