import React from "react";
import MyBtn from "../atoms/MyBtn";
// import "../index.css";

const Hero = () => {
  return (
    <div className="bg-[url('/hero1.jpg')] pb-10 h-screen bg-no-repeat bg-center bg-cover flex flex-col items-center justify-end gap-10">
      <h1 className="text-4xl w-72 text-center mx-auto">
        Where Elegance Becomes You.
      </h1>
      <p className="text-center text-lg w-96 mx-auto">
        Elegant fashion for modern women — discover outfits, accessories, and
        style tips to elevate your everyday look.
      </p>
      <MyBtn
        to="/shop-now"
        classname="bg-blue-500 px-5 py-3 rounded-3xl cursor-pointer hover:bg-blue-700"
      >
        Shop Now
      </MyBtn>
    </div>
  );
};

export default Hero;
