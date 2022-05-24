import ReactDom from "react-dom/client";
// import header from "./header.module.css";
import React, { useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [searchToggle, setSearchToggle] = useState(false);

  const showSearch = () => {
    setSearchToggle(!searchToggle);
  };

  const hideSearch = () => {
    setSearchToggle(!searchToggle);
  };

  return (
    <header>
      <Link to="/">
        <h1>LOGO</h1>
      </Link>
      <NavLink to="/">Events</NavLink>
      <SearchBar />
    </header>
  );
};

export default Header;
