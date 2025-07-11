import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";

export const Apple = ({ classname }) => {
  return <GrApple className={classname} />;
};
const Google = ({ classname }) => {
  return <FcGoogle className={classname} />;
};

export default Google;
