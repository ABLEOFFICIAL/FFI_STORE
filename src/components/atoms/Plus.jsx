import React from "react";
import { FaPlus } from "react-icons/fa6";

const Plus = ({ classname, onclick }) => {
  return <FaPlus onClick={onclick} className={classname} />;
};

export default Plus;
