import React, { useContext } from "react";
import { FaBars } from "react-icons/fa6";
import { WidthContext } from "../../context/WidthContext";

const Bar = () => {
  const { screenWidth, setScreenWidth } = useContext(WidthContext);
  return (
    <div>
      <span className={`${screenWidth < 768 ? "hidden" : "block"} `}>Menu</span>
      <FaBars className="border-white rounded-full border-[1px] size-10 p-2 cursor-pointer" />
    </div>
  );
};

export default Bar;
