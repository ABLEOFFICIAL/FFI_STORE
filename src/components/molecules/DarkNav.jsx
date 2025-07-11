import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import Bar from "../atoms/Bar";
import DarkLogo from "../atoms/DarkLogo";

const NavBar = ({ initialTop = "top-2", finaltop = "top-2" }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-20 mx-4 md:mx-auto max-w-7xl transition-all duration-300 bg-white/30 backdrop-blur-md md:hidden ${
        isScrolled ? finaltop : initialTop
      } rounded-lg px-5 py-2 md:py-3 `}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <NavLink to="/">
          <DarkLogo className={"w-10"} />
        </NavLink>
        <div className="flex items-center gap-6 lg:gap-8">
          <NavLinks />
          <Bar
            classname={
              "border-[#4a4741] rounded-full border-[1px] size-10 p-2 cursor-pointer text-[#4a4741]"
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
