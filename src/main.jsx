import { Provider } from "@/components/ui/provider"
import React from "react";
import { createRoot } from "react-dom/client";
import Landing from "./Landing"
import Card from "./Card"

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <provider>
        <Landing />
        <Card />
    </provider>
</React.StrictMode>
);