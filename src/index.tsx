import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "App";
import { GlobalStyle } from "ui/globalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
