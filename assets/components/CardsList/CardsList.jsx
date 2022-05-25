import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Cardslist.css";
const axios = require("axios").default;

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
      {console.log(allEventsData[0])}
      <Card
        name={allEventsData[0]?.name.fi}
        image={allEventsData[0]?.description?.images[0]?.url}
      />
    </div>
  );
}

export default CardsList;
