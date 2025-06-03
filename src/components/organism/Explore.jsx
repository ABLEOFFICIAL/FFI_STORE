import React, { useContext } from "react";
import MyBtn from "../atoms/MyBtn";
import { WidthContext } from "../../context/WidthContext";

const Explore = () => {
  const { screenWidth } = useContext(WidthContext);
  const explores = [
    {
      bg: "/bag-bg.avif",
      header: "FFI Bags",
      text: "From 349",
    },
    {
      bg: "/shoe-bg.avif",
      header: "FFI Foot-wears",
      text: "From 349",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-5 my-5 px-5 md:grid-cols-2 md:w-[85%] md:m-auto  md:py-10 md:h-[70vh]">
      {explores.map((item, index) => {
        return (
          <div
            key={index}
            className="md:w-full md:m-auto md:h-[60vh] relative "
          >
            <img
              src={`${item.bg}`}
              className="h-72 w-full m-auto rounded-2xl object-bottom object-cover md:h-full"
            />
            <div className="absolute h-full w-full bg-linear-to-b from-neutral-950/0 to-neutral-950/70 top-0 left-0 rounded-2xl hidden md:block"></div>
            <div className="flex w-full justify-between items-center py-3 md:absolute md:bottom-0 md:p-10 ">
              <div className="">
                <h2 className="text-2xl text-[#4a4741]  md:text-[#f7f1e8]">
                  {item.header}
                </h2>
                <p className="text-base font-semibold text-[#4a4741]  md:text-[#f7f1e8]">
                  {item.text}
                </p>
              </div>
              <div className="flex gap-5 items-center ">
                <MyBtn
                  to="/explore"
                  classname={`${
                    screenWidth < 768
                      ? "hidden"
                      : "block bg-transparent border-[1px] border-[#f7f1e8] text-[#f7f1e8] px-5 py-3 rounded-3xl"
                  }`}
                >
                  Explore
                </MyBtn>
                <MyBtn
                  to="/shop"
                  classname="bg-[#4a4741] px-5 py-3 rounded-3xl md:text-[#4a4741] md:bg-[#f7f1e8] "
                >
                  Shop
                </MyBtn>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Explore;
