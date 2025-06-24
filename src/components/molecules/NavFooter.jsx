import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Cart from "../atoms/Cart";
import { FaUser } from "react-icons/fa";
import Like from "../atoms/Like";
import { NavLink } from "react-router-dom";

const NavFooter = () => {
  return (
    <section className="w-4/5 rounded-3xl flex justify-between p-2 bg-[#4a4741]">
      <IoHomeSharp
        size={10}
        className="bg-[#f7f1e8] text-[#4a4741] rounded-full p-1 px-2"
      />
      <MdEmail
        size={10}
        className="bg-[#f7f1e8] text-[#4a4741] rounded-full p-1 px-2"
      />
      <Cart
        size={10}
        className="bg-[#f7f1e8] text-[#4a4741] rounded-full p-1 px-2"
      />
      <Like
        size={10}
        className="bg-[#f7f1e8] text-[#4a4741] rounded-full p-1 px-2"
      />
      <FaUser
        size={10}
        className="bg-[#f7f1e8] text-[#4a4741] rounded-full p-1 px-2"
      />
    </section>
  );
};

export default NavFooter;
/* f7f1e8 */
/* 4a4741 */
