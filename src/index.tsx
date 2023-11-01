import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
const elem = document.getElementById("app");
const root = createRoot(elem);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode> 
)
