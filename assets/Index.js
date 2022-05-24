import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import CardsList from "./components/CardsList/CardsList.jsx";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<CardsList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDom.createRoot(document.querySelector("#app"));
root.render(<Index />);

export default Index;
