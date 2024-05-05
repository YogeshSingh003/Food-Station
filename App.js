import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => {
  return <h1>Namaste React 🚀</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent></HeadingComponent>);
