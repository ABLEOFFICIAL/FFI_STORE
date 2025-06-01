import React, { useContext } from "react";
import Logo from "../atoms/Logo";
import XBar from "../atoms/XBar";
import { NavLink } from "react-router-dom";
import { WidthContext } from "../../context/WidthContext";
import { MdDarkMode } from "react-icons/md";

const Sidebar = () => {
  const { showSide, setShowSide } = useContext(WidthContext);
  if (showSide) {
    window.addEventListener("scrollx", () => {
      console.log("hello");
    });
  }
  return (
    <div
      className={`${
        showSide ? "block" : "hidden"
      } fixed top-0 right-0 h-screen w-[92vw] bg-[#f7f1e8] text-[#4a4741] z-40 px-6 py-10 flex flex-col justify-between`}
    >
      <div className="flex justify-between items-center pb-10">
        <Logo />
        <XBar onclick={() => setShowSide(false)} classname={"size-7"} />
      </div>
      <div className="side-bottom flex flex-col h-4/5">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/"}>About</NavLink>
        <NavLink to={"/"}>Contact Us</NavLink>
        <NavLink to={"/"}>Style with us</NavLink>
      </div>
      <div className="inline-flex items-center gap-2">
        <MdDarkMode />
        <span>Dark Mode</span>
      </div>
    </div>
  );
};

export default Sidebar;
