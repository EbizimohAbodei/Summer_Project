import React from "react";
import ReactDom from "react-dom/client";
import classes from "./header.module.css";

const Header = () => {
  return <div>Hello</div>;
};

const root = ReactDom.createRoot(document.querySelector("#app"));
root.render(<Header />);

export default Header;
