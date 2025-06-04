import React, { useContext, useState } from "react";
import Logo from "../atoms/Logo";
// import MyBtn from "../atoms/MyBtn";
import Bar from "../atoms/Bar";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { WidthContext } from "../../context/WidthContext";

const NavBar = () => {
  const { screenWidth } = useContext(WidthContext);
  const [position, setPosition] = useState("top-10");
  const [lgPosition, setLgPosition] = useState("top-4");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      setPosition("top-0");
      setLgPosition("top-0");
    } else if (window.scrollY === 0) {
      setPosition("top-10");
      setLgPosition("top-4");
    }
  });

  // const { screenWidth } = useContext(WidthContext);
  return (
    <div
      className={` m-4 w-[93%] bg-white/20 backdrop-blur-md px-5 py-2 md:py-1 rounded-lg text-white fixed ${
        screenWidth < 768 ? position : lgPosition
      } z-20`}
    >
      <div className=" flex items-center justify-between md:w-[80%] md:m-auto">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <div className="flex items-center gap-6 lg:w-[70%] lg:justify-between">
          <NavLinks />
          <Bar
            classname={
              "border-white rounded-full border-[1px] size-10 p-2 cursor-pointer"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
