import React from "react";
import ReactDOM from "react-dom";
import "slick-carousel/slick/slick.css";
import App from "./App";
import "./index.css";

const elem = document.getElementById("root");

if (elem) {
  const root = ReactDOM.createRoot(elem);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found!");
}
