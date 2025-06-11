import React, { createContext, useState, useEffect } from "react";
import Preloader from "../components/atoms/PreLoader";

export const PreloaderContext = createContext();

export const PreloaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <PreloaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </PreloaderContext.Provider>
  );
};
