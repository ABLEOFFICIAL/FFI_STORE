import React, { useContext, useState } from "react";
import Logo from "../atoms/Logo";
// import MyBtn from "../atoms/MyBtn";
import Bar from "../atoms/Bar";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
// import { WidthContext } from "../../context/WidthContext";

const NavBar = () => {
  const [position, setPosition] = useState("top-10");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      setPosition("top-0");
    } else if (window.scrollY === 0) {
      setPosition("top-10");
    }
  });

  // const { screenWidth } = useContext(WidthContext);
  return (
    <div
      className={`flex items-center justify-between m-4 w-[93%] bg-white/20 backdrop-blur-md px-5 py-3 rounded-lg text-white fixed ${position} z-20`}
    >
      <NavLink to="/">
        <Logo />
      </NavLink>
      <div className="flex items-center gap-6">
        <NavLinks />
        <Bar />
      </div>
    </div>
  );
};

export default NavBar;
