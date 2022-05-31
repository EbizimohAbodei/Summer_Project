import React from "react";

export const Overlay = ({ toggleCategories }) => {
  return (
    <div
      onClick={toggleCategories}
      style={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        top: "0",
        backgroundColor: "transparent",
        zIndex: "11",
      }}
    ></div>
  );
};
