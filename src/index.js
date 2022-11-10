import React from "react";
import { createRoot } from "react-dom/client";
import { Greet } from "./components";

const rootElement = document.createElement("div");
document.body.append(rootElement);

const root = createRoot(rootElement);

const App = (
  <React.Fragment>
    <Greet name="rohan" />
  </React.Fragment>
);

root.render(App);
