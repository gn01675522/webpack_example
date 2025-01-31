import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import axios from "axios";

import App from "./App";

axios.defaults.baseURL = process.env.APP_API_URL || "http://localhost:3000";

const element = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(element);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
