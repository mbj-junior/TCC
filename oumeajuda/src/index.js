import "./index.css";

import App from "./App";
import { CookiesProvider } from "react-cookie";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <CookiesProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CookiesProvider>,

  document.getElementById("root")
);
