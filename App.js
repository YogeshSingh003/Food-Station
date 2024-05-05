import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => {
  return (
    <h1>
      Namaste React 🚀
      <FirstComponent> </FirstComponent>
    </h1>
  );
};

function FirstComponent() {
  return (
    <h1>
      First Component
      <SecondComponent></SecondComponent>
    </h1>
  );
}

const SecondComponent = () => <h1> SecondComponent</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent></HeadingComponent>);
