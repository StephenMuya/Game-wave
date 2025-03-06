import React from "react";
import { createRoot } from "react-dom/client";
import Landing from "./Landing"
import Card from "./Card"

const root = createRoot(document.getElementById("root"));
root.render(
    <>
<Landing />
<Card />
</>
);