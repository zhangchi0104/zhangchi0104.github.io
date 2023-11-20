import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./main.css";
import { Provider } from "react-redux";
import { store } from "./store";

function start() {
  const elem = document.getElementById("app");

  if (elem != null) {
    const root = createRoot(elem);
    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    );
  }
}

import("./i18n").then(start);
