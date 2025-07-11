import React, { useContext } from "react";
import DarkLogo from "../atoms/DarkLogo";
import XBar from "../atoms/XBar";
import { Link } from "react-router-dom";
import MyBtn from "../atoms/MyBtn";
import { WidthContext } from "../../context/WidthContext";

const MdDesktop = () => {
  const { dropDown, setDropDown } = useContext(WidthContext);
  const handleDropDown = () => {
    setDropDown(false);
  };
  return (
    <main
      className={`hidden md:${
        dropDown ? "block" : "hidden"
      } h-auto py-10 fixed left-0 right-0 bg-[#f7f1e8] text-[#4a4741] z-50`}
    >
      <div className=" max-w-[1500px] mx-auto">
        <div className="flex justify-between items-center">
          <DarkLogo className="w-14" />
          <span className="flex items-center gap-3 font-semibold">
            Close{" "}
            <XBar
              onclick={handleDropDown}
              classname={
                "size-9 border-[1px] border-[#4a4741] rounded-full p-2"
              }
            />
          </span>
        </div>
        <div className=" my-5 flex justify-between">
          <div className="flex flex-col gap-5 border-t-[1px] border-t-neutral-400 py-5">
            <h4 className="font-bold">Shop</h4>
            <div className=" flex flex-col items-start  h-32 justify-between">
              <Link>Oura Ring 4</Link>
              <Link>Oura Ring Gen3</Link>
              <Link>On Sale Extra Charger</Link>
              <Link>Oura Ring Gen3</Link>
            </div>
          </div>
          <div className="flex flex-col gap-5 border-t-[1px] border-t-neutral-400 py-5">
            <h4 className="font-bold">Shop</h4>
            <div className=" flex flex-col items-start h-32 justify-between">
              <Link>Oura Ring 4</Link>
              <Link>Oura Ring Gen3</Link>
              <Link>On Sale Extra Charger</Link>
              <Link>Oura Ring Gen3</Link>
            </div>
          </div>
          <div className="flex flex-col gap-5 border-t-[1px] border-t-neutral-400 py-5 ">
            <h4 className="font-bold">Shop</h4>
            <div className=" flex flex-col items-start h-32 justify-between ">
              <Link>Oura Ring 4</Link>
              <Link>Oura Ring Gen3</Link>
              <Link>On Sale Extra Charger</Link>
              <Link>Oura Ring Gen3</Link>
            </div>
          </div>
          <div
            // style={{ background: "url(/mood.avif)" }}
            className={`flex flex-col gap-5 w-96 h-64 bg-center bg-cover bg-[url(/mood.avif)] rounded-2xl p-3 justify-between`}
          >
            <h4 className="text-[#f7f1e8] text-4xl font-light ">
              Fredrick Fashion Icon <span className="slant">is here</span>
            </h4>
            <MyBtn classname="bg-blue-500 text-[#f7f1e8] w-20 px-5 py-2 rounded-full ml-auto">
              Shop
            </MyBtn>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MdDesktop;
