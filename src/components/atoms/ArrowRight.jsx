import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const ArrowRight = ({ classname, onclick }) => {
  return <IoIosArrowRoundForward onClick={onclick} className={classname} />;
};

export default ArrowRight;
