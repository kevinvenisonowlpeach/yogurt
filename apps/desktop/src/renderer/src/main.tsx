import "./assets/main.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Overlay from "./Overlay";
import { IS_OVERLAY_KEY } from "@shared/constants";

const parameters = new URLSearchParams(window.location.search);
const isOverlay = parameters.get(IS_OVERLAY_KEY);

createRoot(document.getElementById("root")!).render(
  <StrictMode>{isOverlay === "true" ? <Overlay /> : <App />}</StrictMode>,
);
