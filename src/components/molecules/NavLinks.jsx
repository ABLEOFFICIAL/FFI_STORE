import React, { useContext } from "react";
import MyBtn from "../atoms/MyBtn";
import { NavLink } from "react-router-dom";
import { WidthContext } from "../../context/WidthContext";

const NavLinks = ({ to }) => {
  const { screenWidth } = useContext(WidthContext);
  return (
    <div>
      <MyBtn
        classname={`${screenWidth < 768 ? "hidden" : "block"} cursor-pointer`}
        to="/why-ffi"
      >
        Why FFI
      </MyBtn>
      <MyBtn
        classname={`${screenWidth < 768 ? "hidden" : "block"} cursor-pointer`}
        to="/how-it-works"
      >
        How It Works
      </MyBtn>
      <MyBtn
        classname={`${screenWidth < 768 ? "hidden" : "block"} cursor-pointer`}
        to="/for-business"
      >
        For Business
      </MyBtn>
      <MyBtn
        classname="bg-blue-500 hover:bg-blue-700 px-5 py-3 rounded-3xl cursor-pointer"
        to="/shop"
      >
        Shop
      </MyBtn>
    </div>
  );
};
export default NavLinks;
