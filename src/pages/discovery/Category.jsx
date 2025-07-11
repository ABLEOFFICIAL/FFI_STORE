import React, { useState } from "react";
import DarkLogo from "../../components/atoms/DarkLogo";

const Category = () => {
  const [filterColour, setFilterColour] = useState("red");
  const [categories, setCategories] = useState("All");
  return (
    <div className="h-[100vh] sticky top-0 w-80 bg-[#4a4741] text-[#f7f1e8] z-30 px-5">
      <div className="flex items-center gap-1  border-b-[1px] h-28">
        <DarkLogo className={"w-10"} />
        <span className="text-base font-semibold border-l-[1px] pl-2">
          Fredrick Fashion Icon
        </span>
      </div>
      <div className="my-5">
        <div className=" text-sm border-b-[1px] pb-4 mb-3">
          <h3 className="font-bold">Category</h3>
          <div className="flex flex-col pl-4 gap-2 py-2">
            {["All", "Dress", "Shirt", "Bag", "Shoe", "Wig", "Jewellry"].map(
              (item, idx) => {
                return (
                  <span
                    onClick={() => setCategories(item)}
                    key={idx}
                    className={`${
                      categories == item
                        ? "bg-[#f7f1e8] p-2  rounded-sm text-[#4a4741]"
                        : "text-[#f7f1e8] cursor-pointer"
                    }`}
                  >
                    {item}
                  </span>
                );
              }
            )}
          </div>
        </div>
        <div className=" text-sm flex items-center gap-3">
          <h3 className="font-bold">Filter by:</h3>
          <select name="select" className="py-2 focus:outline-none">
            <option value="trending">Trending</option>
            <option value="popular">Popular</option>
            <option value="New">New Arrivalsa</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <div className=" text-sm">
          <h5 className="font-bold py-5 text-xs ">Colour</h5>
          <div className="flex flex-col pl-4 gap-2">
            {["red", "black", "white", "green", "yellow"].map(
              (colour, index) => {
                return (
                  <div key={index} className="flex items-center gap-2">
                    {filterColour == colour ? (
                      <span className="w-3 h-3 rounded-sm bg-[#f7f1e8] border-[1px]"></span>
                    ) : (
                      <span
                        onClick={() => setFilterColour(colour)}
                        className="w-3 h-3 rounded-sm border-[1px] cursor-pointer"
                      ></span>
                    )}
                    <span>{colour}</span>
                  </div>
                );
              }
            )}
            {/* <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm border-[1px]"></span>
              <span>red</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm border-[1px]"></span>
              <span>black</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm border-[1px]"></span>
              <span>white</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm border-[1px]"></span>
              <span>green</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm border-[1px]"></span>
              <span>yellow</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
