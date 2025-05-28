import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold text-[rgb(74,71,65)] mb-4">404</h1>
      <p className="text-xl text-[rgb(74,71,65)]  mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <NavLink
        to={"/"}
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-all cursor-pointer"
      >
        Go Back Home
      </NavLink>
    </div>
  );
};

export default NotFound;
