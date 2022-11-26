import React from "react";
import ReactDOM from "react-dom/client";
import AppContainer from "./AppContainer";
import { BrowserRouter } from "react-router-dom";
import "./frontEnd/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </React.StrictMode>,
);
