import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WidthProvider from "./context/WidthContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { PreloaderProvider } from "./context/PreLoaderContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PreloaderProvider>
      <WidthProvider>
        <App />
      </WidthProvider>
    </PreloaderProvider>
  </BrowserRouter>
);
