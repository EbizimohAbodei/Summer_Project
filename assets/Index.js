import React from "react";
import ReactDom from "react-dom/client";

const Index = () => {
  return <div>Hello</div>;
};

const root = ReactDom.createRoot(document.querySelector("#app"));
root.render(<Index />);

export default Index;
