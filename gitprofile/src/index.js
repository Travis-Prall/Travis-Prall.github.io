import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import ErrorBoundary from "./ErrorBoundary";

const root = createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
