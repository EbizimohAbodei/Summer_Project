import React from "react";
import ReactDom from "react-dom/client";
import classes from "./main.module.css";

const Main = () => {
  return <div>Hello</div>;
};

const root = ReactDom.createRoot(document.querySelector("#app"));
root.render(<Main />);

export default Main;
