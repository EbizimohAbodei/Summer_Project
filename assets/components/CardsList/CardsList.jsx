import React from "react";
import Card from "../Card/Card";
import classes from "./cardslist.module.css";

function CardsList() {
  return (
    <div className={classes.CardsList}>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default CardsList;
