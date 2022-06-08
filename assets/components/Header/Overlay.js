import React from "react";

export const Overlay = ({ toggleCategories }) => {
  return (
    <div
      onClick={toggleCategories}
      style={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        top: "4rem",
        left: "0",
        backgroundColor: "black",
        zIndex: "9",
      }}
    ></div>
  );
};
