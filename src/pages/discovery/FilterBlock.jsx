import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const FilterBlock = () => {
  return (
    <div className="p-5 ">
      <div className=" flex gap-4 items-center overflow-x-auto">
        <div>
          <div className="bg-[#4a4741] inline text-[#f7f1e8] px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
            <span>FIlters</span> <RiArrowDropDownLine className="inline" />
          </div>
          <div>{/* drop down menu */}</div>
        </div>
        <span className="border-[1px] border-[#4a4741] px-4 py-2 rounded-full">
          CLothes
        </span>
        <span className="border-[1px] border-[#4a4741] px-4 py-2 rounded-full">
          Shoes
        </span>
        <span className="border-[1px] border-[#4a4741] px-4 py-2 rounded-full">
          bags
        </span>
        <span className="border-[1px] border-[#4a4741] px-4 py-2 rounded-full">
          jewellry
        </span>
        <span className="border-[1px] border-[#4a4741] px-4 py-2 rounded-full">
          fans
        </span>
        <span className="border-[1px] border-[#4a4741] px-4 py-2 rounded-full">
          wigs
        </span>
      </div>
    </div>
  );
};

export default FilterBlock;
