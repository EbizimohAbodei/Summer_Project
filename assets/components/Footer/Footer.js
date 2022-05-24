import React from "react";
import ReactDom from "react-dom/client";
// import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <h2>Team EOT Summer Project</h2>
    </footer>
  );
};

const root = ReactDom.createRoot(document.querySelector("#app"));
root.render(<Footer />);

export default Footer;
