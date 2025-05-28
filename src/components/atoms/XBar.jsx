import React from "react";
import { LiaTimesSolid } from "react-icons/lia";

const XBar = ({ classname, onclick }) => {
  return <LiaTimesSolid onClick={onclick} className={classname} />;
};

export default XBar;
