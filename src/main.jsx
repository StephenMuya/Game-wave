import React from "react";
import { createRoot } from "react-dom/client";
import Landing from "./Landing"
import Card from "./Card"
import { ChakraProvider } from "@chakra-ui/react";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
        <Landing />
        <Card />
    </ChakraProvider>
  </React.StrictMode>
);