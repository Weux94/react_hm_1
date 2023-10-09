import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Products from "./containers/Products/Products";
import Login from "./containers/Login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Login /> */}
    <Products />
  </React.StrictMode>
);