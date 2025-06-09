import React, { useContext } from "react";
import MyBtn from "../atoms/MyBtn";
import { NavLink } from "react-router-dom";
import { WidthContext } from "../../context/WidthContext";

const NavLinks = ({ to }) => {
  const { screenWidth } = useContext(WidthContext);
  return (
    <div className="flex gap-16 items-center  justify-between text-[#f7f1e8]">
      <MyBtn
        classname={`${
          screenWidth < 1020 ? "hidden" : "block text-sm"
        } cursor-pointer`}
        to="/why-ffi"
      >
        Why FFI
      </MyBtn>
      <MyBtn
        classname={`${
          screenWidth < 1020 ? "hidden" : "block text-sm"
        } cursor-pointer`}
        to="/how-it-works"
      >
        How It Works
      </MyBtn>
      <MyBtn
        classname={`${
          screenWidth < 1020 ? "hidden" : "block text-sm"
        } cursor-pointer`}
        to="/for-business"
      >
        For Business
      </MyBtn>
      <MyBtn
        classname="bg-blue-500 hover:bg-blue-700 px-5 py-3 rounded-3xl cursor-pointer text-sm"
        to="/shop"
      >
        Shop
      </MyBtn>
    </div>
  );
};
export default NavLinks;
