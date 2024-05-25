import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Providers } from "./components/layout/Providers";
import "mapbox-gl/dist/mapbox-gl.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers />
    </BrowserRouter>
  </React.StrictMode>
);
