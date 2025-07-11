import React, { useState } from "react";
import DarkNav from "../../components/molecules/DarkNav";
import Sidebar from "../../components/molecules/Sidebar";
import Footer from "../../components/organism/Footer";
import { PiPhoneCall } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import MyInput from "../../components/atoms/MyInput";
import { GrStatusGood } from "react-icons/gr";
import emailjs from "@emailjs/browser";
import NavBarMd from "../../components/molecules/NavBarMd";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("");

    // Replace with your EmailJS Service ID, Template ID, and Public Key
    const serviceID = "service_xw05ht7";
    const templateID = "template_vqxo8x7";
    const publicKey = "0-UL1jRHodRtq_rl7";

    emailjs.send(serviceID, templateID, formData, publicKey).then(
      () => {
        setFormStatus("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
        setIsSubmitting(false);
      },
      (error) => {
        setFormStatus("Failed to send message. Please try again.");
        setIsSubmitting(false);
        console.error("EmailJS error:", error);
      }
    );
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="relative">
      <DarkNav />
      <NavBarMd />
      <div className="max-w-[1150px] mx-auto">
        <Sidebar />
        <div className="bg-[url('/contact-hero.jpeg')] bg-cover bg-center h-[40vh] md:h-[600px] flex justify-center items-center">
          <h1 className=" text-[#f7f1e8] slant">Let's Get In Touch</h1>
        </div>
        <div className="md:grid md:grid-cols-2 md:my-20 ">
          <section className="text-sm mt-10 md:mt-0 text-[#4a4741] flex flex-col gap-8 border-b-[1px] md:border-0  md:text-xl">
            <div className="flex flex-col gap-5 pb-4 md:gap-14  px-5">
              <div className="flex flex-col gap-3">
                <PiPhoneCall className="size-10 p-2 border-[1px] border-neutral-500 rounded md:size-20" />
                <div className="flex flex-col gap-1">
                  <span>+123 45 789 000</span>
                  <span>+123 45 789 000</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <MdOutlineMail className="size-10 p-2 border-[1px] border-neutral-500 rounded md:size-20" />
                <div>
                  <span>help@gmail.com</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <MdOutlineLocationOn className="size-10 p-2 border-[1px] border-neutral-500 rounded md:size-20" />
                <div className="flex flex-col gap-1">
                  <span>221b Elementary Street</span>
                  <span>lekki, Nigeria</span>
                </div>
              </div>
            </div>
          </section>
          <section className="text-sm text-[#4a4741] flex flex-col gap-8 pt-5">
            <h1 className="text-2xl font-light pt-5 md:pt-0  px-5">
              Lets Walk Together
            </h1>
            <p className="text-sm font-medium w-[80%]  px-5">
              Share your vision for your next project with us now. please
              contact us for basic questions. we're here to help!
            </p>
            <form className="py-4 md:py-0 bg-white md:rounded-lg md:shadow-md   px-5 pb-20">
              <div className="pb-4">
                <label className="block py-2">First Name</label>
                <MyInput
                  type={"text"}
                  name="firstName"
                  value={formData.firstName}
                  placeholder={"First Name"}
                  onChange={handleChange}
                  classname={
                    "backdrop-blur-md bg-black/20 rounded-3xl px-5 py-3 w-full text-white focus:outline-none"
                  }
                />
              </div>
              <div className="pb-4">
                <label className="block py-2">Last Name</label>
                <MyInput
                  type={"text"}
                  name="lastName"
                  value={formData.lastName}
                  placeholder={"Last Name"}
                  onChange={handleChange}
                  classname={
                    "backdrop-blur-md bg-black/20 rounded-3xl px-5 py-3 w-full text-white focus:outline-none"
                  }
                />
              </div>
              <div className="pb-4">
                <label className="block py-2">Email</label>
                <MyInput
                  type={"email"}
                  name="email"
                  value={formData.email}
                  placeholder={"Email"}
                  onChange={handleChange}
                  classname={
                    "backdrop-blur-md bg-black/20 rounded-3xl px-5 py-3 w-full text-white focus:outline-none"
                  }
                />
              </div>

              <div className="pb-4">
                <label className="block py-2">Subject</label>
                <MyInput
                  type={"text"}
                  name="subject"
                  value={formData.subject}
                  placeholder={"Subject..."}
                  onChange={handleChange}
                  classname={
                    "backdrop-blur-md bg-black/20 rounded-3xl px-5 py-3 w-full text-white focus:outline-none"
                  }
                />
              </div>
              <div className="pb-4">
                <label className="block py-2">Write Message below</label>

                <textarea
                  type="text"
                  name="message"
                  value={formData.message}
                  placeholder={"Text"}
                  onChange={handleChange}
                  className={
                    "backdrop-blur-md bg-black/20 rounded-3xl px-5 py-2 w-full text-white focus:outline-none h-32"
                  }
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="bg-[#4a4741] text-[#f7f1e8] p-3 w-full rounded-3xl my-5"
              >
                Submit
              </button>
            </form>
          </section>
        </div>
        <div
          className={`bg-white py-10 w-80 rounded text-[#228f36] top-1/2 left-[10%] fixed text-center ${
            isSubmitting
              ? setTimeout(() => {
                  "block";
                }, 2000)
              : "hidden"
          }`}
        >
          Message submitted successfully
          <GrStatusGood className="inline ml-2" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
/* f7f1e8 */
/* 4a4741 */
