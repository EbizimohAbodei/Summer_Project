import React, { useState } from "react";
import "./searchBar.scss";
import { RiSearch2Line } from "react-icons/Ri";
import { GrClose } from "react-icons/Gr";
import { BsCalendarDateFill } from "react-icons/bs";
import { IoCalendarNumber } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SearchBar = ({ showSearch, searchToggle }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("today");
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate();

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
        <div className="formContainer">
          <form onSubmit={(e) => getCategories(e)}>
            <div>
              <input
                onChange={(e) => setStartDate(e.target.value)}
                id="start"
                type="date"
              />
              <input
                onChange={(e) => setEndDate(e.target.value)}
                id="end"
                type="date"
              />
              <input
                placeholder="Search for events"
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
              ></input>
              <button className="submitButton" type="submit">
                <RiSearch2Line />
              </button>
            </div>
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
