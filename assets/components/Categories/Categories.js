import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./categories.scss";

export const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    { id: "yso:p4354", eventName: "Children" },
    { id: "yso:p13050", eventName: "Families" },
    { id: "yso:p6165", eventName: "Migrants" },
    { id: "yso:p5590", eventName: "Adults" },
    { id: "yso:p16486", eventName: "Students" },
    { id: "yso:p2433", eventName: "Elderly" },
    { id: "yso:p1235", eventName: "Films" },
    { id: "yso:p1947", eventName: "Well-beign" },
    { id: "yso:p14004", eventName: "Conversation" },
    { id: "yso:p11185", eventName: "Conserts" },
    { id: "yso:p360", eventName: "Culture" },
    { id: "yso:p2739", eventName: "Fine Arts" },
    { id: "yso:p916", eventName: "Exercise" },
    { id: "yso:p15875", eventName: "Lectures" },
    { id: "yso:p1808", eventName: "Music" },
    { id: "yso:p5121", eventName: "Exhibitions" },
    { id: "yso:p6062", eventName: "Games" },
    { id: "yso:p3670", eventName: "Food" },
    { id: "yso:p1278", eventName: "Dance" },
    { id: "yso:p2625", eventName: "Theatre" },
    { id: "yso:p19245", eventName: "Workshops" },
    { id: "yso:p2771", eventName: "Outdoor" },
    { id: "yso:p965", eventName: "Sports" },
    { id: "yso:p26626", eventName: "Remote" },
  ];

  const handleClick = (e) => {
    console.log(e.target.dataset.id);
    axios
      .get(
        `https://api.hel.fi/linkedevents/v1/event/?keyword=${e.target.dataset.id}&start=today`
      )
      .then((response) => {
        navigate(`/search/${e.target.textContent.replaceAll(" ", "_")}`, {
          state: { response: response.data },
        });
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="categories">
      {categories.map((category, i) => {
        return (
          <span
            data-id={category.id}
            key={i}
            onClick={(e) => handleClick(e)}
            className="category"
          >
            {category.eventName}
          </span>
        );
      })}
    </div>
  );
};
