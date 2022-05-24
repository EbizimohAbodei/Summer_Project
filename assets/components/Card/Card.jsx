import React from "react";
import classes from "./card.module.css";

function Card() {
  return (
    <div className={classes.card}>
      <img src="https://via.placeholder.com/150" />
      <div className={classes.card_info}>
        <p className={classes.date}>24.5.2022 19:30</p>
        <p className={classes.name}>Event Name</p>
        <p className={classes.location}>
          Finnish National Opera and Ballet, Helsinginkatu 58
        </p>
        <div className={classes.categories}>
          <p>#opera</p>
          <p>#music</p>
          <p>#concerts</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
