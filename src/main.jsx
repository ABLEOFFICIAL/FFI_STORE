import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WidthProvider from "./context/WidthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WidthProvider>
      <App />
    </WidthProvider>
  </StrictMode>
);
