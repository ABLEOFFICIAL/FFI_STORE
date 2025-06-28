import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const FilterBlock = () => {
  const [selectedItem, setSelectedItem] = useState("All");

  const handleItem = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className="p-5 ">
      <div
        className=" flex gap-4 items-center overflow-x-auto max-w-[1150px] mx-auto"
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
        {["All", "Clothes", "Shoes", "Bags", "jewellry", "fans", "wigs"].map(
          (item) => (
            <span
              key={item}
              onClick={() => handleItem(item)}
              className={`rounded-full py-2 px-3 text-sm font-light cursor-pointer border border-[#4a4741] ${
                selectedItem === item
                  ? "bg-[#4a4741] text-[#f7f1e8]"
                  : "bg-white text-[#4a4741]"
              }`}
            >
              {item}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default FilterBlock;
