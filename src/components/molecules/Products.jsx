import React from "react";
import { NavLink } from "react-router-dom";

const Products = ({ name, description, image, classname, onclick }) => {
  return (
    <div
      className={`${classname} rounded-2xl  bg-cover bg-center`}
      style={{
        background: `url('${image}')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-linear-to-b from-neutral-950/5 to-neutral-950/50 h-full w-full rounded-2xl">
        <div className="flex justify-between items-end h-full p-5">
          <h1 className="text-3xl w-52">{name}</h1>
          <p>{description}</p>
          <NavLink
            onClick={onclick}
            className={"backdrop-blur-3xl bg-white/20 px-5 py-3 rounded-3xl"}
          >
            Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Products;
