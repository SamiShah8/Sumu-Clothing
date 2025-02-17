import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FetchProductList from "./components/FetchProductList";
import ReactContext from "./components/ReactContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FetchProductList />);
