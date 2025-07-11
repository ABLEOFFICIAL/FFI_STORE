import React, { useContext, useEffect, useMemo, useState } from "react";
import Logo from "../atoms/Logo";
import XBar from "../atoms/XBar";
import { NavLink, useNavigate } from "react-router-dom";
import { WidthContext } from "../../context/WidthContext";
import { MdDarkMode } from "react-icons/md";
import useToggle from "../../hooks/useToggle";
import MyBtn from "../atoms/MyBtn";
import DarkLogo from "../atoms/DarkLogo";
import { db, auth } from "../../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const { showSide, setShowSide } = useContext(WidthContext);
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { toggle, handleToggle, closeSidebar, setDropDown } = useToggle();
  if (showSide) {
    window.addEventListener("scrollx", () => {
      console.log("hello");
    });
  }

  useEffect(() => {
    setShowSide(false); // close it on every route change
  }, [location.pathname]);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((currentUser) => {
  //     setUser(currentUser);
  //   });
  //   return () => unsubscribe();
  // }, [navigate]);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        setUser(user);
      }
      return () => unsubscribe();
    });
  }, []);

  return (
    <div
      className={`${
        showSide ? "block" : "hidden"
      } fixed top-0 right-0 h-screen w-[92vw] bg-[#f7f1e8] text-[#4a4741] z-40 px-6 py-10 pb-12 shadow-md md:hidden`}
    >
      <div className="h-4/5 flex flex-col justify-between">
        <div className="flex justify-between items-center pb-10">
          <DarkLogo className={"w-5"} />
          <XBar onclick={() => setShowSide(false)} classname={"size-7"} />
        </div>
        <div className="side-bottom flex flex-col h-3/5">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about-us"}>About</NavLink>
          <NavLink to={"/contact-us"}>Contact Us</NavLink>
          <NavLink to={"/style-with-us"}>Blog</NavLink>
          <NavLink to={"/wishlist"}>Wishlist</NavLink>
          <NavLink to={"/profile"}>Profile</NavLink>
        </div>
        <div onClick={handleToggle} className="inline-flex items-center gap-2">
          <MdDarkMode />
          <span>Dark Mode</span>
        </div>
        <MyBtn
          to={"/LogAcct"}
          classname={`border-[1px] border-[#4a4741] w-full py-3 rounded-3xl text-sm text-center ${
            user ? "hidden" : "block"
          } `}
        >
          Sign in
        </MyBtn>
      </div>
    </div>
  );
};

export default Sidebar;
