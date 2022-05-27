import axios from "axios";
import React, { useEffect, useState } from "react";
import "./categories.scss";

//FYI FOR EOT: This is not working yet. -otdot

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const testCategories = [
    "Theatre",
    "Music",
    "Food",
    "Arts",
    "Sports",
    "Drinks",
    "Kids",
    "Families",
    "Festivals",
    "Jobs",
    "Motor Sports",
  ];

  useEffect(() => {
    axios
      .all([
        axios.get(
          "http://api.hel.fi/linkedevents/v1/keyword_set/helsinki:audiences/"
        ),
        axios.get(
          "http://api.hel.fi/linkedevents/v1/keyword_set/helsinki:topics/"
        ),
      ])
      .then(
        axios.spread((...res) => {
          setCategories(res);
        })
      );
  }, []);

  const handleClick = () => {
    return;
  };

  console.log(categories);

  return (
    <div className="categories">
      {testCategories.map((category) => {
        return (
          <span onClick={handleClick} className="category">
            {category}
          </span>
        );
      })}
    </div>
  );
};
