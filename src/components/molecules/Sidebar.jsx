import React, { useContext, useMemo, useState } from "react";
import Logo from "../atoms/Logo";
import XBar from "../atoms/XBar";
import { NavLink } from "react-router-dom";
import { WidthContext } from "../../context/WidthContext";
import { MdDarkMode } from "react-icons/md";
import useToggle from "../../hooks/useToggle";

const Sidebar = () => {
  const { showSide, setShowSide } = useContext(WidthContext);
  // const [dark, setDark] = useState(false);
  const { toggle, handleToggle } = useToggle();
  if (showSide) {
    window.addEventListener("scrollx", () => {
      console.log("hello");
    });
  }
  // // console.log(dark);
  // const handleMode = useMemo(() => {
  //   return () => {
  //     setDark((prev) => !prev);
  //     console.log("hello");
  //     console.log(dark);
  //   };
  // }, [dark]);
  return (
    <div
      className={`${
        showSide ? "block" : "hidden"
      } fixed top-0 right-0 h-screen w-[92vw] bg-[#f7f1e8] text-[#4a4741] z-40 px-6 py-10 flex flex-col justify-between`}
    >
      <div className="flex justify-end items-center pb-10">
        <XBar onclick={() => setShowSide(false)} classname={"size-7"} />
      </div>
      <div className="side-bottom flex flex-col h-4/5">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/"}>About</NavLink>
        <NavLink to={"/"}>Contact Us</NavLink>
        <NavLink to={"/"}>Style with us</NavLink>
      </div>
      <div onClick={handleToggle} className="inline-flex items-center gap-2">
        <MdDarkMode />
        <span>Dark Mode</span>
      </div>
    </div>
  );
};

export default Sidebar;
