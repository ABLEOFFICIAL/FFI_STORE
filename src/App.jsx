import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./components/organism/NotFound";
import DiscoveryPage from "./pages/discovery/DiscoveryPage";
import Details from "./pages/product/Details";

// Define routes for the application

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discover" element={<DiscoveryPage />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
