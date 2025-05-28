import React, { useContext } from "react";
import Logo from "../atoms/Logo";
import MyBtn from "../atoms/MyBtn";
import Bar from "../atoms/Bar";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { WidthContext } from "../../context/WidthContext";

const NavBar = ({ ref }) => {
  const { screenWidth } = useContext(WidthContext);
  return (
    <div
      ref={ref}
      className={` flex items-center justify-between m-4 w-[93%] bg-white/20 backdrop-blur-md px-5 py-3 rounded-lg text-white fixed top-10 z-20`}
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
