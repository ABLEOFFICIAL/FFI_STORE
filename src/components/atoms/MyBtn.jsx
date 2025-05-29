import React from "react";
import { NavLink } from "react-router-dom";

const MyBtn = ({ children, classname, to }) => {
  return (
    <NavLink to={to} className={`${classname} cursor-pointer`}>
      {children}
    </NavLink>
  );
};

export default MyBtn;
