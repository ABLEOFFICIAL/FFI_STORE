import React, { useState } from "react";
// import Logo from "../../components/atoms/Logo";
import MyInput from "../../components/atoms/MyInput";
import Google, { Apple } from "../../components/atoms/Google";
import DarkLogo from "../../components/atoms/DarkLogo";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { auth, googleProvider } from "./firebase"; // Adjust the path to your Firebase config file
const LogAcct = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Signed in successfully");
    } catch (error) {
      console.error(error);
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
    <div className="h-screen flex justify-center items-center">
      <div className=" w-screen h-screen flex">
        <div
          className={`bg-[url(/hero1.jpg)] bg-cover bg-center w-1/2 relative`}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex justify-center items-center">
            <div className="w-3/5 h-auto">
              <DarkLogo className="w-32 mx-auto" />
              <span className="text-[#f7f1e8] font-medium text-4xl text-center block">
                Fredrick Fashion Icon
              </span>
            </div>
          </div>
        </div>
        <div className="bg-neutral-50 min-h-screen px-14 text-[#4a4741] flex justify-center items-center overflow-x-hidden overflow-y-auto relative md:w-1/2">
          {/* Adjusted decorative div */}
          <div className="bg-[#4a4741]/20 absolute top-0 right-0 z-0 w-64 h-64 rotate-45 rounded-2xl translate-x-1/2 -translate-y-1/2"></div>
          {/* <div className="bg-[#4a4741]/20 absolute -bottom-48 -left-1/2 z-10 w-96 h-96 rotate-45 rounded-2xl"></div> */}
          <div className="w-[70%] h-auto flex flex-col gap-6  max-w-lg mx-auto">
            <header>
              <DarkLogo className={"w-10"} />
            </header>
            <section className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <h1 className="font-bold text-[#4a4741] text-lg">Sign in</h1>
                <label className="text-sm text-[#4a4741]">
                  choose from 10,000+ products across 400+ categories
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={signInWithGoogle}
                    className=" p-1 bg-neutral-200/70 rounded-full"
                  >
                    <Google classname="size-5" />
                  </button>
                  <button
                    // onClick={signInWithGoogle}
                    className="text-black"
                  >
                    <Apple classname="size-7 p-1 bg-neutral-200/70 rounded-full" />
                  </button>
                </div>
              </div>
              <div className="relative py-3 ">
                <hr className="opacity-[0.4]" />
                <span className="text-center absolute top-0 left-1/2 -translate-x-1/2 bg-neutral-50 rounded-2xl px-2 text-sm">
                  or
                </span>
              </div>
              <form onSubmit={handleSignIn}>
                <div className="mb-4">
                  <label className="block text-sm font-medium pb-2">
                    Email
                  </label>
                  <MyInput
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type={"email"}
                    placeholder={"Enter email"}
                    classname="bg-[#fff] shadow-md py-2.5 px-5 rounded-2xl text-[#4a4741] w-full focus:outline-none focus:ring-2 focus:ring-[#4a4741]/50"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium pb-2">
                    Password
                  </label>
                  <MyInput
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={"password"}
                    placeholder={"Enter password"}
                    classname="bg-[#fff] shadow-md py-2.5 px-5 rounded-2xl text-[#4a4741] w-full focus:outline-none focus:ring-2 focus:ring-[#4a4741]/50"
                  />
                </div>
                <div className="flex justify-between my-2">
                  <div className="flex items-center gap-1">
                    <div className="h-2.5 w-2.5 rounded-sm bg-[#4e4b47] cursor-pointer"></div>
                    <span className="text-sm text-[#4a4741]">Remember Me</span>
                  </div>
                </div>
                <button className="w-full my-2 py-3 text-center bg-[#4a4741] text-[#f7f1e8] rounded-2xl text-sm hover:bg-[#4a4741]/90 transition-colors">
                  Log in
                </button>
                <div className="text-center">
                  <span className="text-sm text-[#4a4741]">
                    Don't have an account?
                  </span>
                  <NavLink
                    to={"/CreateAcct"}
                    className="text-sm text-blue-500 underline pl-1"
                  >
                    Sign up Here
                  </NavLink>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
    // <div className="bg-neutral-50 min-h-screen p-10 flex flex-col gap-14 text-[#4a4741] overflow-x-hidden overflow-y-auto relative">
    //   {/* Adjusted decorative div */}
    //   <div className="bg-[#4a4741]/20 absolute top-0 right-0 z-0 w-64 h-64 rotate-45 rounded-full translate-x-1/2 -translate-y-1/2"></div>

    //   <header>
    //     <DarkLogo />
    //   </header>

    //   <section className="flex flex-col gap-4 max-w-md mx-auto">
    //     <div className="flex flex-col gap-4">
    //       <h1 className="font-bold text-[#4a4741] text-lg">Login</h1>
    //       <label className="text-sm text-[#4a4741]">
    //         Choose from 10,000+ products across 400+ categories
    //       </label>
    //       <button
    //         onClick={signInWithGoogle}
    //         className="bg-[#4a4741] shadow-md py-3 rounded-full flex justify-center items-center gap-1 text-[#f7f1e8] text-sm hover:bg-[#4a4741]/90 transition-colors"
    //       >
    //         <Google />
    //         <span>Sign in with Google</span>
    //       </button>
    //     </div>

    //     <div className="relative py-3">
    //       <hr className="opacity-[0.4]" />
    //       <span className="text-center absolute top-0 left-1/2 -translate-x-1/2 bg-neutral-50 rounded-2xl px-2 text-sm">
    //         or
    //       </span>
    //     </div>

    //     <form onSubmit={handleSignIn}>
    //       <div className="mb-4">
    //         <label className="block text-sm font-medium pb-2">Email</label>
    //         <MyInput
    //           type="email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           placeholder="Enter email..."
    //           classname="bg-[#fff] shadow-md py-2.5 px-5 rounded-full text-[#4a4741] w-full focus:outline-none focus:ring-2 focus:ring-[#4a4741]/50"
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label className="block text-sm font-medium pb-2">Password</label>
    //         <MyInput
    //           type="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           placeholder="Enter Password..."
    //           classname="bg-[#fff] shadow-md py-2.5 px-5 rounded-full text-[#4a4741] w-full focus:outline-none focus:ring-2 focus:ring-[#4a4741]/50"
    //         />
    //       </div>
    //       <div className="flex justify-between my-2">
    //         <div className="flex items-center gap-1">
    //           <div className="h-2.5 w-2.5 rounded-sm bg-[#4e4b47] cursor-pointer"></div>
    //           <span className="text-sm text-[#4a4741]">Remember Me</span>
    //         </div>
    //         <span className="text-sm text-[#4a4741] hover:underline cursor-pointer">
    //           Forgot Password?
    //         </span>
    //       </div>
    //       <button className="w-full my-2 py-3 text-center bg-[#4a4741] text-[#f7f1e8] rounded-full text-sm hover:bg-[#4a4741]/90 transition-colors">
    //         Login
    //       </button>
    //       <div className="text-center">
    //         <span className="text-sm text-[#4a4741]">
    //           Don't have an account?
    //         </span>
    //         <NavLink
    //           to="/CreateAcct"
    //           className="w-full my-2 py-3 text-center bg-[#4a4741] text-[#f7f1e8] rounded-full text-sm block hover:bg-[#4a4741]/90 transition-colors"
    //         >
    //           Sign Up Here
    //         </NavLink>
    //       </div>
    //     </form>
    //   </section>
    // </div>
  );
};

export default LogAcct;
/* f7f1e8 */
/* 4a4741 */
