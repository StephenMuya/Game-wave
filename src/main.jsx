import { createRoot } from "react-dom/client";
import Landing from "./Landing"
import './index.css';


const root = createRoot(document.getElementById("root"));
root.render(
    <>
      <Landing />
    </>
);