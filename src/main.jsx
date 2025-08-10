import React from "react";
import { createRoot } from "react-dom/client";
import Landing from "./Landing";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>
);
