import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Cardslist.css";
const axios = require("axios").default;

function CardsList() {
  const [allEeventData, setAllEeventData] = useState([]);

  useEffect(() => {
    axios
      .get("https://open-api.myhelsinki.fi/v1/events/?limit=5", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => console.log(response));
  }, []);

  return (
    <div className="CardList">
      {console.log(allEeventData)}
      <Card />
    </div>
  );
}

export default CardsList;
