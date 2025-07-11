import React, { useState } from "react";
import ArrowLeft from "../../components/atoms/ArrowLeft";
import Bar from "../../components/atoms/Bar";
import Cart from "../../components/atoms/Cart";
import MyInput from "../../components/atoms/MyInput";
import { CiSearch } from "react-icons/ci";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Like } from "./DisplayProducts";
import MdDesktop from "../../components/molecules/MdDesktop";
import DarkLogo from "../../components/atoms/DarkLogo";

const Header = () => {
  const [selectedItem, setSelectedItem] = useState("All");

  const handleItem = (item) => {
    setSelectedItem(item);
  };

  const Search = () => {
    return;
  };
  const navigate = useNavigate();
  return (
    <div className="px-5 max-w-[1150px] mx-auto relative">
      <MdDesktop />
      <header className={"flex flex-col gap-3 py-4 md:hidden"}>
        <div className="flex justify-between items-center">
          <ArrowLeft onclick={() => navigate(-1)} classname={"size-8"} />
          <h2 className="text-xl">Discover</h2>
          <div className="flex gap-4 items-center">
            <NavLink to="/cart">
              <Cart classname="size-5" />
            </NavLink>{" "}
            <Bar
              classname={
                "border-[#4a4741] rounded-full border-[1px] size-10 p-2 cursor-pointer"
              }
            />
          </div>
        </div>
        <div className="relative">
          <MyInput
            type="search"
            placeholder={"Search product..."}
            classname={
              "backdrop-blur-md bg-neutral-950/10 w-full px-4 py-2 rounded-3xl pl-12 focus:outline-none"
            }
          />
          <CiSearch className="absolute top-1/4 left-4 size-6" />
        </div>
      </header>
      <header className="py-8 border-b-[1px] border-b-neutral-400/50  justify-between hidden md:flex">
        <div className="relative">
          <div className="flex items-center gap-3">
            <DarkLogo className="w-16 cursor-pointer" />
            <span className="relative">
              <MyInput
                type="search"
                placeholder={"Search product..."}
                classname={
                  "backdrop-blur-md bg-neutral-950/10 w-[20vw] px-4 py-2 rounded-3xl pl-12 focus:outline-none"
                }
              />
              <CiSearch className="absolute top-1/4 left-4 size-6" />
            </span>
          </div>
        </div>
        <div>
          <div className=" flex gap-4 items-center overflow-x-auto max-w-[1150px] mx-auto">
            <span className="flex justify-center items-center gap-3 bg-[#4a4741] text-[#f7f1e8] rounded-2xl px-3 py-2">
              <Link to={"/profile"}>Wishlist</Link>
              <Like className="size-5 stroke-1" />
            </span>
            <span className="flex justify-center items-center gap-3 bg-[#4a4741] text-[#f7f1e8] rounded-2xl px-3 py-2">
              Cart
              <Link to={"/cart"}>
                <Cart classname="size-6" />
              </Link>
            </span>
            <Bar
              classname={
                "border-[#4a4741] rounded-full border-[1px] size-10 p-2 cursor-pointer text-[#4a4741]"
              }
            />
            {/* <div className="relative inline-block">
              <select className="appearance-none bg-[#4a4741] text-[#f7f1e8] px-4 py-2 rounded-full text-sm font-light pr-6 cursor-pointer focus:outline-none">
                <option value="">Filters</option>
                <option value="Africa">Trending</option>
                <option value="Americas">New Arrivals</option>
                <option value="Asia">Sales</option>
              </select>
              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#f7f1e8] text-lg">
                <RiArrowDropDownLine />
              </span>
            </div> */}
            {/* <div className="relative inline-block">
              <select className="appearance-none bg-[#4a4741] text-[#f7f1e8] px-4 py-2 rounded-full text-sm font-light pr-6 cursor-pointer focus:outline-none">
                <option value="">All</option>
                <option value="Africa">Clothes</option>
                <option value="Americas">Shoes</option>
                <option value="Asia">Bags</option>
                <option value="Asia">jewellry</option>
                <option value="Asia">fans</option>
                <option value="Asia">wigs</option>
              </select>
              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#f7f1e8] text-lg">
                <RiArrowDropDownLine />
              </span>
            </div> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
