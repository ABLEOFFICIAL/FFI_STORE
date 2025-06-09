import React from "react";
import MyBtn from "../atoms/MyBtn";
// import "../index.css";

const Hero = () => {
  return (
    <div className="bg-[url('/herotry1.jpg')] pb-10 h-screen bg-no-repeat bg-center bg-cover flex flex-col  items-center justify-end gap-10 md:items-start ">
      <div className="relative md:left-24 gap-5 flex flex-col md:h-[60%] md:justify-around md:w-[40%]  text-center md:text-left">
        <h1 className="text-4xl w-72 mx-auto md:m-0 md:text-7xl md:w-full md:">
          Where Elegance <span className="slant">Becomes you</span>.
        </h1>
        <div className="flex flex-col gap-5 md:gap-10">
          <p className="text-base w-[96%] mx-auto md:m-0 md:font-medium md:w-full md:text-xl">
            Elegant fashion for modern women — discover outfits, accessories,
            and style tips to elevate your everyday look.
          </p>
          <MyBtn
            to="/discover"
            classname="bg-blue-500 text-sm px-5 py-3 rounded-3xl cursor-pointer hover:bg-blue-700 md:w-[30%] text-center mx-auto md:m-0 md:text-lg md:font-semibold "
          >
            Explore Styles
          </MyBtn>
        </div>
      </div>
    </div>
  );
};

export default Hero;
