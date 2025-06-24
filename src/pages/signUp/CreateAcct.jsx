import React, { useState } from "react";
import MyInput from "../../components/atoms/MyInput";
import Google from "../../components/atoms/Google";
import DarkLogo from "../../components/atoms/DarkLogo";
import { NavLink } from "react-router-dom";
import { auth, googleProvider, app, database } from "../../../config/firebase";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const CreateAcct = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      if (password !== repeatPassword) {
        alert("Passwords do not match!");
        return;
      }
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User created successfully");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Signed in successfully with Google");
      navigate("/");
    } catch (error) {
      console.error("Error signing in with Google", error);
      if (error.code === "auth/popup-blocked") {
        alert(
          "Popup was blocked by your browser. Please allow popups for this site and try again."
        );
      } else {
        alert("An error occurred during Google sign-in. Please try again.");
      }
    }
  };

  return (
    <div className="bg-neutral-50 min-h-screen p-10 flex flex-col gap-14 text-[#4a4741] overflow-x-hidden overflow-y-auto relative">
      {/* Adjusted decorative div */}
      <div className="bg-[#4a4741]/20 absolute top-0 right-0 z-0 w-64 h-64 rotate-45 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      {/* <div className="bg-[#4a4741]/20 absolute -bottom-48 -left-1/2 z-10 w-96 h-96 rotate-45 rounded-full"></div> */}
      <header>
        <DarkLogo />
      </header>
      <section className="flex flex-col gap-4 max-w-md mx-auto">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-[#4a4741] text-lg">Create Account</h1>
          <label className="text-sm text-[#4a4741]">
            choose from 10,000+ products across 400+ categories
          </label>
          <button
            onClick={signInWithGoogle}
            className="bg-[#4a4741] shadow-md py-3 rounded-full flex justify-center items-center gap-1 text-[#f7f1e8] text-sm hover:bg-[#4a4741]/90 transition-colors"
          >
            <Google />
            <span>SIgn Up with Google</span>
          </button>
        </div>
        <div className="relative py-3 ">
          <hr className="opacity-[0.4]" />
          <span className="text-center absolute top-0 left-1/2 -translate-x-1/2 bg-neutral-50 rounded-2xl px-2 text-sm">
            or
          </span>
        </div>
        <form onSubmit={handleCreateUser}>
          <div className="mb-4">
            <label className="block text-sm font-medium pb-2">Name</label>
            <MyInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              type={"text"}
              placeholder={"Enter Name"}
              classname="bg-[#fff] shadow-md py-2.5 px-5 rounded-full text-[#4a4741] w-full focus:outline-none focus:ring-2 focus:ring-[#4a4741]/50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium pb-2">Email</label>
            <MyInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type={"email"}
              placeholder={"Enter email"}
              classname="bg-[#fff] shadow-md py-2.5 px-5 rounded-full text-[#4a4741] w-full focus:outline-none focus:ring-2 focus:ring-[#4a4741]/50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium pb-2">Password</label>
            <MyInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={"password"}
              placeholder={"Enter password"}
              classname="bg-[#fff] shadow-md py-2.5 px-5 rounded-full text-[#4a4741] w-full focus:outline-none focus:ring-2 focus:ring-[#4a4741]/50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium pb-2">
              Repeat Password
            </label>
            <MyInput
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              type={"password"}
              placeholder={"Repeat Password"}
              classname="bg-[#fff] shadow-md py-2.5 px-5 rounded-full text-[#4a4741] w-full focus:outline-none focus:ring-2 focus:ring-[#4a4741]/50"
            />
          </div>
          <div className="flex justify-between my-2">
            <div className="flex items-center gap-1">
              <div className="h-2.5 w-2.5 rounded-sm bg-[#4e4b47] cursor-pointer"></div>
              <span className="text-sm text-[#4a4741]">Remember Me</span>
            </div>
          </div>
          <button className="w-full my-2 py-3 text-center bg-[#4a4741] text-[#f7f1e8] rounded-full text-sm hover:bg-[#4a4741]/90 transition-colors">
            Create account
          </button>
          <div className="text-center">
            <span className="text-sm text-[#4a4741]">
              Already have an account?
            </span>
            <NavLink
              to={"/LogAcct"}
              className="w-full my-2 py-3 text-center bg-[#4a4741] text-[#f7f1e8] rounded-full text-sm block hover:bg-[#4a4741]/90 transition-colors"
            >
              Sign In Here
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
