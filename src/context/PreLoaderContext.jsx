import React, { createContext, useState, useEffect } from "react";
import Preloader from "../components/atoms/PreLoader";

export const PreloaderContext = createContext();

export const PreloaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching or animations)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timeout); // cleanup
  }, []);

  return (
    <PreloaderContext.Provider value={{ loading }}>
      {loading ? <Preloader /> : children}
    </PreloaderContext.Provider>
  );
};
