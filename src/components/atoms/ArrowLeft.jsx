import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const ArrowLeft = ({ classname, onclick }) => {
  return <IoIosArrowRoundBack onClick={onclick} className={classname} />;
};

export default ArrowLeft;
