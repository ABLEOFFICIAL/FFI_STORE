import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const FilterBlock = () => {
  return (
    <div className="p-5 ">
      <div
        className=" flex gap-4 items-center overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="relative inline-block">
          <select className="appearance-none bg-[#4a4741] text-[#f7f1e8] px-4 py-2 rounded-full text-sm font-light pr-6 cursor-pointer focus:outline-none">
            <option value="">Filters</option>
            <option value="Africa">Trending</option>
            <option value="Americas">New Arrivals</option>
            <option value="Asia">Sales</option>
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#f7f1e8] text-lg">
            <RiArrowDropDownLine />
          </span>
        </div>

        <span className="border-[1px] border-[#4a4741] px-4 py-2 rounded-full text-sm font-semibold">
          CLothes
        </span>
        <span className="border-[1px] border-[#4a4741] px-4 py-2 rounded-full text-sm font-semibold">
          Shoes
        </span>
        <span className="border-[1px] border-[#4a4741] px-4 py-2 rounded-full text-sm font-semibold">
          bags
        </span>
        <span className="border-[1px] border-[#4a4741] px-4 py-2 rounded-full text-sm font-semibold">
          jewellry
        </span>
        <span className="border-[1px] border-[#4a4741] px-4 py-2 rounded-full text-sm font-semibold">
          fans
        </span>
        <span className="border-[1px] border-[#4a4741] px-4 py-2 rounded-full text-sm font-semibold">
          wigs
        </span>
      </div>
    </div>
  );
};

export default FilterBlock;
