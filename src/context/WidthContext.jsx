import { createContext, useEffect, useState } from "react";

export const WidthContext = createContext();

const WidthProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showSide, setShowSide] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [categories, setCategories] = useState("Profile");
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <WidthContext.Provider
      value={{
        screenWidth,
        setScreenWidth,
        showSide,
        setShowSide,
        dropDown,
        setDropDown,
        categories,
        setCategories,
      }}
    >
      {children}
    </WidthContext.Provider>
  );
};

export default WidthProvider;
