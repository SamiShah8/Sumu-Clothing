import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FetchProductList from "./components/FetchProductList";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <FetchProductList />
  </React.StrictMode>
);
