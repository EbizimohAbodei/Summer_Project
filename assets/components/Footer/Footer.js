import React from "react";
import ReactDom from "react-dom/client";
import classes from "./footer.module.css";

const Footer = () => {
  return <div>Hello</div>;
};

const root = ReactDom.createRoot(document.querySelector("#app"));
root.render(<Footer />);

export default Footer;
