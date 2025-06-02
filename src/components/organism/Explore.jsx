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
    <div className="grid grid-cols-1 gap-5 my-5 px-5">
      {explores.map((item, index) => {
        return (
          <div key={index}>
            <img
              src={`${item.bg}`}
              className="h-72 w-full m-auto rounded-2xl object-bottom object-cover"
            />
            <div className="flex w-full justify-between items-center py-3">
              <div>
                <h2 className="text-2xl text-[rgb(74,71,65)]">{item.header}</h2>
                <p className="text-base font-semibold text-[#4a4741]">
                  {item.text}
                </p>
              </div>
              <div>
                <MyBtn
                  to="/explore"
                  classname={`${screenWidth < 768 ? "hidden" : "block"}`}
                >
                  Explore
                </MyBtn>
                <MyBtn
                  to="/shop"
                  classname="bg-[rgb(74,71,65)] px-5 py-3 rounded-3xl"
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
