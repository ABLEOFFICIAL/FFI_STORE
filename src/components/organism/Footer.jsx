import React, { useState } from "react";
import MyInput from "../atoms/MyInput";
import emailjs from "@emailjs/browser";
import { NavLink } from "react-router-dom";
import Logo from "../atoms/Logo";
import { FaRotate } from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";

function Footer() {
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("");

    const serviceID = "service_xw05ht7";
    const templateID = "template_vqxo8x7";
    const publicKey = "0-UL1jRHodRtq_rl7";

    const templateParams = {
      user_email: email,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      () => {
        setFormStatus("Message sent successfully!");
        setEmail("");
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
    setEmail(e.target.value);
  };

  return (
    <div className="bg-[#4a4741] text-[#f7f1e8] px-5 py-10">
      {/* Top Banner */}
      <div className="flex flex-col gap-5 items-start md:flex-row justify-between md:items-center md:max-w-[80vw] mx-auto">
        <div className="flex gap-4 items-center">
          <FaRotate className="size-12" />
          <div className="w-[13.8rem]">
            <h5 className="font-bold">Extended Return & Exchange</h5>
            <span>
              We offer free returns for items sent back within 20 days.
            </span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <IoDiamondOutline className="size-12" />
          <div className="w-[13.8rem]">
            <h5 className="font-bold">Complimentary Customization</h5>
            <span>
              Complimentary engraving and customized size for all orders.
            </span>
          </div>
        </div>
      </div>

      <hr className="m-auto my-4 md:my-10" />

      {/* Middle Content */}
      <div className="grid md:grid-cols-3 md:max-w-[80vw] mx-auto gap-8">
        {/* Contact Info */}
        <div className="md:border-r-[1px] md:border-b-0 border-b-[1px] md:pr-5 md:pb-0 pb-5">
          <img className="w-28" src="/logo.png" alt="Logo" />
          <div className="flex flex-col gap-1 mt-3">
            <span>info@1403luxury.com</span>
            <span>Call or Send Us a WhatsApp Message</span>
            <span>Mon-Sat | 8am-7pm GMT</span>
            <span>Sun | 2pm-6pm GMT</span>
            <span>+234 809 900 1403</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-between w-full md:border-b-0 border-b-[1px] md:pr-5 md:pb-0 pb-5">
          <div className="text-start border-r-[1px] w-full px-5">
            <h4 className="py-4 text-lg font-semibold">About Us</h4>
            <div className="flex flex-col gap-1 font-extralight">
              <NavLink to="/">Company</NavLink>
              <NavLink to="/">Community</NavLink>
              <NavLink to="/">Careers</NavLink>
              <NavLink to="/">Terms of Use</NavLink>
            </div>
          </div>
          <div className="text-start w-full px-5 md:border-r-[1px] border-r-0">
            <h4 className="py-4 text-lg font-semibold">Support</h4>
            <div className="flex flex-col gap-1 font-extralight">
              <NavLink to="/">Knowledge Base</NavLink>
              <NavLink to="/">Tutorials</NavLink>
              <NavLink to="/">Guides</NavLink>
              <NavLink to="/">Video</NavLink>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="text-white px-5 backdrop-blur-md bg-[black]/30 py-12 md:w-[80%] w-full m-auto rounded-2xl">
          <h2 className="py-1 border-b-[1px] w-max mx-auto">NEWSLETTER</h2>
          <p className="text-center my-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new
            updates, exclusive offers, and helpful tips straight to your inbox.
          </p>
          <form className="flex md:flex-row w-full max-w-md mx-auto">
            <MyInput
              value={email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              classname="px-4 py-2 border-neutral-500 border-[1px] rounded-l-3xl w-full outline-none focus:outline-none focus:ring-0"
            />
            <button
              onClick={handleSubscribe}
              type="submit"
              disabled={isSubmitting}
              className="text-xs px-4 py-2 rounded-r-3xl whitespace-nowrap bg-[#f7f1e8] border-[1px] border-[#f7f1e8] text-[#4a4741]"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {formStatus && (
            <p className="text-center mt-4 text-sm italic">{formStatus}</p>
          )}
        </div>
      </div>

      <hr className="m-auto my-4 md:my-10" />

      {/* Footer Bottom */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-center block py-2">
          &copy; 2025 Fredrick Fashion Icon. All rights reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
