import React, { useState } from "react";
import "./searchBar.scss";
import { RiSearch2Line } from "react-icons/Ri";
import { GrClose } from "react-icons/Gr";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("today");
  const [endDate, setEndDate] = useState(null);
  const [searchToggle, setSearchToggle] = useState(false);
  const navigate = useNavigate();

  const showSearch = () => {
    setSearchToggle(!searchToggle);
  };

  const getCategories = (e) => {
    e.preventDefault();
    if (searchTerm) {
      const startEnd = endDate
        ? `&start=${startDate}&end=${endDate}`
        : `&start=${startDate}`;
      axios
        .get(
          `http://api.hel.fi/linkedevents/v1/search/?type=event&input=${searchTerm}${startEnd}`
        )
        .then((response) => {
          navigate(`/search/${searchTerm}`, {
            state: { response: response.data },
          });
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="searchBar">
      {searchToggle && (
        <div>
          <form onSubmit={(e) => getCategories(e)}>
            <label htmlFor="start">Start date:</label>
            <input
              onChange={(e) => setStartDate(e.target.value)}
              id="start"
              type="date"
            />
            <label htmlFor="end">End date:</label>
            <input
              onChange={(e) => setEndDate(e.target.value)}
              id="end"
              type="date"
            />
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
            <button id="subButton" type="submit">
              <RiSearch2Line />
            </button>
          </form>
        </div>
      )}
      <div className="searchButton">
        <button type="button" onClick={showSearch}>
          {searchToggle ? <GrClose /> : <RiSearch2Line />}
        </button>
      </div>
    </div>
  );
};
