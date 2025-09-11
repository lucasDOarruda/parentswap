import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));

// Works for both dev and GH Pages:
// - If homepage is "https://lucasdoarruda.github.io/parentswap", BASENAME -> "/parentswap"
// - If homepage is "https://lucasdoarruda.github.io", BASENAME -> "/"
// - If undefined in dev, falls back to "/"
const BASENAME =
  (process.env.PUBLIC_URL &&
    new URL(process.env.PUBLIC_URL, window.location.origin).pathname) ||
  "/";

root.render(
  <StrictMode>
    <BrowserRouter basename={BASENAME}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
