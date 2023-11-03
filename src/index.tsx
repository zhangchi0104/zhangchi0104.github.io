import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
const elem = document.getElementById("app");
if (elem != null) {
  const root = createRoot(elem);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
