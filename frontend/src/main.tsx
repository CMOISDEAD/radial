import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "mapbox-gl/dist/mapbox-gl.css";
import "./index.css";
import { Providers } from "./components/Providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers />
    </BrowserRouter>
  </React.StrictMode>,
);
