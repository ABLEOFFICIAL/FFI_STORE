import React from "react";
// import Logo from "../../components/atoms/Logo";
import MyInput from "../../components/atoms/MyInput";
import Google from "../../components/atoms/Google";
import DarkLogo from "../../components/atoms/DarkLogo";
import { NavLink } from "react-router-dom";

const CreateAcct = () => {
  return (
    <div
      className="bg-neutral-50 min-h-screen p-10 flex flex-col gap-14 text-[#4a4741]
    "
    >
      <div className="bg-[#4a4741]/20 absolute -top-48 -right-1/2 z-10 w-96 h-96 rotate-45 rounded-full"></div>
      {/* <div className="bg-[#4a4741]/20 absolute -bottom-48 -left-1/2 z-10 w-96 h-96 rotate-45 rounded-full"></div> */}
      <header className="">
        <DarkLogo />
      </header>
      <section className=" flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-[#4a4741] text-lg">Create Account</h1>
          <label className="text-sm text-[#4a4741]">
            choose from 10,000+ products across 400+ categories
          </label>
          <button className="bg-[#4a4741] shadow-md py-3 rounded-full  flex justify-center items-center gap-1 text-[#f7f1e8] text-sm">
            <Google />
            <span>SIgn Up with Google</span>
          </button>
        </div>
        <div className="relative py-3 ">
          <hr className="opacity-[0.4]" />
          <span className="text-center absolute top-0 left-[47%] bg-neutral-50 rounded-2xl">
            or
          </span>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium pb-2">Name</label>
            <MyInput
              type={"text"}
              placeholder={"Enter Name"}
              classname={
                "bg-[#fff] shadow-md py-2.5 px-5 rounded-full text-[#4a4741] w-full"
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium pb-2">Email</label>
            <MyInput
              type={"email"}
              placeholder={"Enter email"}
              classname={
                "bg-[#fff] shadow-md py-2.5 px-5 rounded-full text-[#4a4741] w-full"
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium pb-2">Password</label>
            <MyInput
              type={"password"}
              placeholder={"Enter password"}
              classname={
                "bg-[#fff] shadow-md py-2.5 px-5 rounded-full text-[#4a4741] w-full"
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium pb-2">
              Repeat Password
            </label>
            <MyInput
              type={"password"}
              placeholder={"Repeat Password"}
              classname={
                "bg-[#fff] shadow-md py-2.5 px-5 rounded-full text-[#4a4741] w-full"
              }
            />
          </div>
          <div className="flex justify-between my-2">
            <div className="flex items-center gap-1">
              <div className="h-2.5 w-2.5 rounded-xs bg-[#4e4b47]"></div>
              <span className="text-sm text-[#4a4741]">Remember Me</span>
            </div>
          </div>
          <button className="w-full my-2 py-3 text-center bg-[#4a4741] text-[#f7f1e8] rounded-full text-sm">
            Login
          </button>
          <div>
            <span>Already have an account?</span>
            <NavLink
              to={"/LogAcct"}
              className="w-full my-2 py-3 text-center bg-[#4a4741] text-[#f7f1e8] rounded-full text-sm block"
            >
              Sign Up Here
            </NavLink>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateAcct;
/* f7f1e8 */
/* 4a4741 */
