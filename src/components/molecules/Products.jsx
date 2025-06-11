import React from "react";
import { NavLink } from "react-router-dom";

const Products = ({ name, description, image, classname, to, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${classname} min-w-[200px] h-[250px] cursor-pointer rounded-2xl bg-cover bg-center`}
      style={{
        backgroundImage: `url('${image}')`,
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <div className="bg-gradient-to-b from-black/20 to-black/60 h-full w-full rounded-2xl p-3 flex flex-col justify-between text-white">
        <div>
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="text-sm">{description}</p>
        </div>
        <NavLink
          to={to}
          className="self-end bg-white text-black text-sm px-3 py-1 rounded-full"
        >
          Details
        </NavLink>
      </div> */}
    </div>
  );
};

export default Products;
