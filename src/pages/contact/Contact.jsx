import React from "react";
import NavBar from "../../components/molecules/NavBar";
import Sidebar from "../../components/molecules/Sidebar";
import Footer from "../../components/organism/Footer";
import { PiPhoneCall } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import MyInput from "../../components/atoms/MyInput";

const Contact = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Sidebar />
      <section className="text-sm text-[#4a4741] flex flex-col gap-8 border-b-[1px]">
        <div className="bg-[url('/contact-hero.jpeg')] bg-cover bg-center h-[40vh] flex justify-center items-center">
          <h1 className=" text-[#f7f1e8] slant">Let's Get In Touch</h1>
        </div>
        <div className="flex flex-col gap-5 pb-4  px-5">
          <div className="flex flex-col gap-3">
            <PiPhoneCall className="size-10 p-2 border-[1px] border-neutral-500 rounded" />
            <div className="flex flex-col gap-1">
              <span>+123 45 789 000</span>
              <span>+123 45 789 000</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <MdOutlineMail className="size-10 p-2 border-[1px] border-neutral-500 rounded" />
            <div>
              <span>help@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <MdOutlineLocationOn className="size-10 p-2 border-[1px] border-neutral-500 rounded" />
            <div className="flex flex-col gap-1">
              <span>221b Elementary Street</span>
              <span>lekki, Nigeria</span>
            </div>
          </div>
        </div>
      </section>
      <section className="text-sm text-[#4a4741] flex flex-col gap-8 border-b-[1px] pt-5">
        <h1 className="text-2xl font-light pt-5  px-5">Lets Walk Together</h1>
        <p className="text-sm font-medium w-[80%]  px-5">
          Share your vision for your next project with us now. please contact us
          for basic questions. we're here to help!
        </p>
        <form className="py-4 bg-white  px-5">
          <div className="pb-4">
            <label className="block py-2">First Name</label>
            <MyInput
              type={"text"}
              placeholder={"First Name"}
              classname={
                "backdrop-blur-md bg-black/20 rounded-3xl px-5 py-3 w-full text-white focus:outline-none"
              }
            />
          </div>
          <div className="pb-4">
            <label className="block py-2">Last Name</label>
            <MyInput
              type={"text"}
              placeholder={"Last Name"}
              classname={
                "backdrop-blur-md bg-black/20 rounded-3xl px-5 py-3 w-full text-white focus:outline-none"
              }
            />
          </div>
          <div className="pb-4">
            <label className="block py-2">Email</label>
            <MyInput
              type={"email"}
              placeholder={"Email"}
              classname={
                "backdrop-blur-md bg-black/20 rounded-3xl px-5 py-3 w-full text-white focus:outline-none"
              }
            />
          </div>

          <div className="pb-4">
            <label className="block py-2">Subject</label>
            <MyInput
              type={"text"}
              placeholder={"Subject..."}
              classname={
                "backdrop-blur-md bg-black/20 rounded-3xl px-5 py-3 w-full text-white focus:outline-none"
              }
            />
          </div>
          <div className="pb-4">
            <label className="block py-2">Write Message below</label>

            <textarea
              name="text"
              placeholder={"Text"}
              className={
                "backdrop-blur-md bg-black/20 rounded-3xl px-5 py-2 w-full text-white focus:outline-none h-32"
              }
            ></textarea>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
