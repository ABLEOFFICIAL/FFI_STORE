import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import Bar from "../atoms/Bar";
import Logo from "../atoms/Logo";
import { FaRegUser } from "react-icons/fa";
import Cart from "../atoms/Cart";

export const User = () => {
  return (
    <Link to="/profile">
      <FaRegUser className="size-6" />
    </Link>
  );
};

const NavBarMd = ({
  initialTop = "top-2",
  finaltop = "top-2",
  position = "relative",
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`${position} left-0 right-0 z-20 mx-4 md:mx-auto max-w-7xl transition-all duration-300 bg-[#4a4741]/50 backdrop-blur-md py-1 mt-2 rounded hidden mb-4 md:block ${
        isScrolled ? finaltop : initialTop
      } rounded-lg`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <div className="flex items-center gap-6 lg:gap-8">
          <NavLinks />
          <div className="w-16  justify-between items-center hidden md:flex text-[#f7f1e8]">
            <User />
            <Link to={"/cart"}>
              <Cart classname="size-6" />
            </Link>
          </div>
          <Bar
            classname={
              "border-white rounded-full border-[1px] size-10 p-2 cursor-pointer text-[#f7f1e8]"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default NavBarMd;
