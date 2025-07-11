import React, { useContext } from "react";
import MyBtn from "../atoms/MyBtn";
import { useLocation } from "react-router-dom";
import { WidthContext } from "../../context/WidthContext";

const NavLinks = () => {
  const { screenWidth } = useContext(WidthContext);
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { title: "Home", location: "/" },
    { title: "Why FFI", location: "/about-us" },
    { title: "Blogs", location: "/style-with-us" },
    { title: "Contact-us", location: "/contact-us" },
    { title: "Shop", location: "/discover" },
  ];

  return (
    <div className="flex gap-16 items-center justify-between text-[#f7f1e8]">
      {navItems.map((nav, idx) => {
        const isActive = currentPath === nav.location;
        const shouldShow = screenWidth >= 1020 || isActive;

        return shouldShow ? (
          <MyBtn
            key={idx}
            classname={`text-sm cursor-pointer ${
              isActive
                ? "bg-blue-500 hover:bg-blue-700 px-5 py-3 rounded-3xl"
                : "text-[#f7f1e8]"
            }`}
            to={nav.location}
          >
            {nav.title}
          </MyBtn>
        ) : null;
      })}
    </div>
  );
};

export default NavLinks;
