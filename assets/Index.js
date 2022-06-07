import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import CardsList from "./components/CardsList/CardsList.jsx";
import SingleEventPage from "./components/SingleEventPage/SingleEventPage";
import SearchResultPage from "./components/SearchResultPage/SearchResultPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { CookiesProvider } from "react-cookie";

const Index = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<CardsList />} />
            <Route path="events/:id" element={<SingleEventPage />} />
            <Route path="search/:searchTerm" element={<SearchResultPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
};

const root = ReactDom.createRoot(document.querySelector("#app"));
root.render(<Index />);

export default Index;
