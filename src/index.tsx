import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./main.css";
import "./i18n";
import { Provider } from "react-redux";
import { store } from "./store";

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
