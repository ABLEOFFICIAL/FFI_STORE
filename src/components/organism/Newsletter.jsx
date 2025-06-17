import React, { useState } from "react";
import MyInput from "../atoms/MyInput";
import emailjs from "@emailjs/browser";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e) => {
    console.log("hello");

    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("");

    // Replace with your EmailJS Service ID, Template ID, and Public Key
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
    <section className="bg-white relative pb-10">
      <div className="absolute -left-1/4  top-20 rotate-45 h-48 w-48 backdrop-blur-md bg-[#4a4741]/20 rounded-2xl"></div>
      <div className="absolute -right-1/4  top-56 rotate-45 h-48 w-48 backdrop-blur-md bg-[#4a4741]/20 rounded-2xl"></div>
      <h1 className="font-extralight text-3xl text-center py-10 text-[#4a4741]">
        Join our Newsletter
      </h1>
      <div className="text-white px-5 backdrop-blur-md bg-[black]/30 py-12 mb-10 w-[90%] m-auto rounded-2xl">
        <h2 className="py-1 border-b-[1px] w-max mx-auto">
          Be the First to Know
        </h2>
        <p className="text-center my-6 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about new
          updates, exclusive offers, and helpful tips straight to your inbox.
        </p>
        <form className="flex md:flex-row relative">
          <MyInput
            value={email}
            onChange={handleChange}
            type="email"
            placeholder="Enter your email"
            classname="px-4 py-2 border border-white rounded-3xl w-full md:w-auto pr-16 outline-none focus:outline-none focus:ring-0"
          />
          <button
            onClick={handleSubscribe}
            type="submit"
            className="bg-[#4a4741] text-xs text-white px-2 py-2 rounded-r-3xl hover:bg-[#3b342c] absolute right-0 top-0 h-full md:rounded-l-none  md:rounded-r-3xl"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
