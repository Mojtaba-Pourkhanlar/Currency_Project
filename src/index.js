import React from "react";
import ReactDOM from "react-dom/client";
import AppContainer from "./AppContainer";
import { BrowserRouter } from "react-router-dom";
import "./frontEnd/i18n";
// Redux
import { Provider } from "react-redux";
import { store } from "./frontEnd/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
