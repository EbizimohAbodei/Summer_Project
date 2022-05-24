import React from "react";
import "./categories.css";

export const Categories = () => {
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

  const handleClick = () => {
    return;
  };

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
