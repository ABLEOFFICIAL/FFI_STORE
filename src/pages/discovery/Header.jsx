import React from "react";
import ArrowLeft from "../../components/atoms/ArrowLeft";
import Bar from "../../components/atoms/Bar";
import Cart from "../../components/atoms/Cart";
import MyInput from "../../components/atoms/MyInput";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="px-5">
      <header className={"flex flex-col gap-3 py-4"}>
        <div className="flex justify-between items-center">
          <ArrowLeft onclick={() => navigate(-1)} classname={"size-8"} />
          <h2 className="text-xl">Discover</h2>
          <div className="flex gap-4 items-center">
            <Cart classname={"cursor-pointer size-5"} />
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
    </div>
  );
};

export default Header;
