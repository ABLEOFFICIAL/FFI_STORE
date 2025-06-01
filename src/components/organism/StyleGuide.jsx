import React from "react";

const StyleGuide = () => {
  return (
    <section className="px-4 md:px-12 py-12 bg-[#fafafa] text-[#1f1f1f]">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Style Tips & Digital Styling Guide
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Explore our expert tips on how to achieve a luxurious, fashionable
          look with confidence.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Tip Cards go here */}
      </div>
    </section>
  );
};

export default StyleGuide;
