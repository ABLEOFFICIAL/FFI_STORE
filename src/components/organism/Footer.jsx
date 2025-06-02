import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../atoms/Logo";

function Footer() {
  return (
    <div className="bg-[#4a4741] text-[#f7f1e8] px-5 py-10">
      <div>
        <div className=" text-center">
          <h4 className="py-4 text-lg font-semibold">About Us</h4>
          <div className="flex flex-col gap-1 font-extralight">
            <NavLink to={"/"}>Company</NavLink>
            <NavLink to={"/"}>Community</NavLink>
            <NavLink to={"/"}>Careers</NavLink>
            <NavLink to={"/"}>Terms of Use</NavLink>
          </div>
        </div>
        <div className=" text-center">
          <h4 className="py-4 text-lg font-semibold">Support</h4>
          <div className="flex flex-col gap-1 font-extralight">
            <NavLink to={"/"}>Knowledge Base</NavLink>
            <NavLink to={"/"}>Tutorials</NavLink>
            <NavLink to={"/"}>Guides</NavLink>
            <NavLink to={"/"}>Video</NavLink>
          </div>
        </div>
        <div className=" text-center">
          <h4 className="py-4 text-lg font-semibold">Products</h4>
          <div className="flex flex-col gap-1 font-extralight">
            <NavLink to={"/"}>FFI App</NavLink>
            <NavLink to={"/"}>Community</NavLink>
            <NavLink to={"/"}>Careers</NavLink>
            <NavLink to={"/"}>Terms of Use</NavLink>
          </div>
        </div>
      </div>
      <hr className="w-4/5 m-auto my-4" />
      <div className=" flex flex-col items-center gap-2">
        <Logo />
        <span className="text-xs text-center block py-2">
          &copy 2025 Fredrick fashion icon. All right reserved
        </span>
      </div>
    </div>
  );
}

export default Footer;
