import React from "react";
import ReactDom from "react-dom/client";
// import classes from "./main.module.css";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

const root = ReactDom.createRoot(document.querySelector("#app"));
root.render(<Main />);

export default Main;
