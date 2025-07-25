import React, { useContext } from "react";
import { FaBars } from "react-icons/fa6";
import { WidthContext } from "../../context/WidthContext";

const Bar = ({ classname }) => {
  const { screenWidth, setScreenWidth, setShowSide, setDropDown } =
    useContext(WidthContext);
  const handleNav = () => {
    setShowSide(true);
    setDropDown(true);
  };

  return (
    <div className="flex gap-3 items-center">
      <span className={`${screenWidth < 1020 ? "hidden" : "block"} `}>
        Menu
      </span>
      <FaBars onClick={handleNav} className={classname} />
    </div>
  );
};

export default Bar;
