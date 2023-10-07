import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./containers/Login/Login";

import Login from "./containers/Login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);