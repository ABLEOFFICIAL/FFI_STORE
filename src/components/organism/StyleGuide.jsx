import React from "react";
import MyBtn from "../atoms/MyBtn";

const StyleGuide = () => {
  return (
    <section className="px-5 md:px-12 py-12 bg-[#fafafa] text-[#4a4741]">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extralight">
          Style Tips & Digital Styling Guide
        </h2>
        <p className=" mt-2 max-w-xl mx-auto">
          Explore our expert tips on how to achieve a luxurious, fashionable
          look with confidence.
        </p>
      </div>
      <MyBtn
        to={"/guide"}
        classname={
          "bg-[#4a4741] text-[#f7f1e8] px-5 py-3 rounded-3xl block w-32 text-center m-auto"
        }
      >
        Use Guide
      </MyBtn>
    </section>
  );
};

export default StyleGuide;
