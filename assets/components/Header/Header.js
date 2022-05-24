import ReactDom from "react-dom/client";
// import header from "./header.module.css";
import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/Ri";
import { GrClose } from "react-icons/Gr";

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
      <h1>LOGO</h1>
      {searchToggle && (
        <div className="searchBar">
          <input type="text"></input>
          Tags
        </div>
      )}
      {searchToggle ? (
        <button onClick={hideSearch}>
          <GrClose />
        </button>
      ) : (
        <button onClick={showSearch}>
          <RiSearch2Line />
        </button>
      )}
    </header>
  );
};

const root = ReactDom.createRoot(document.querySelector("#app"));
root.render(<Header />);

export default Header;
