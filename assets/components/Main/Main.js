import React from "react";
import ReactDom from "react-dom/client";
import { Outlet } from "react-router-dom";
import HeroBanner from "../HeroBanner/HeroBanner";

const Main = () => {
  return (
    <main>
      <HeroBanner />
      <Outlet />
    </main>
  );
};

export default Main;
