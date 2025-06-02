import React from "react";

const Newsletter = () => {
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
          iusto magnam accusamus.
        </p>
        <form className="flex md:flex-row relative">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-white rounded-3xl w-full md:w-auto pr-16 outline-none focus:outline-none focus:ring-0"
          />
          <button
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
