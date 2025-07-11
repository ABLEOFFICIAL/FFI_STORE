import React from "react";
import { Link } from "react-router-dom";

const DarkLogo = ({ className }) => {
  return (
    <Link to={"/"}>
      <img src="/logoImg.png" className={className} />
    </Link>
  );
};

export default DarkLogo;
