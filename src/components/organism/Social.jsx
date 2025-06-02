// components/organism/SocialGallery.jsx

import React from "react";

// const galleryData = [
//   {
//     id: 1,
//     img: "/PHOTO-2025-06-02-21-43-58.jpg",
//     user: "@styledbychi",
//   },
//   {
//     id: 2,
//     img: "/PHOTO-2025-06-02-21-43-59.jpg",
//     user: "@urbnqueen",
//   },
//   // Add more images...
// ];

const Social = () => {
  return (
    <section className="py-10 px-5 text-center text-[#4a4741]">
      <h2 className="text-3xl text-extralight mb-5">Styled By You</h2>
      <p className="mb-6">Tag us with #UrbnStyle for a chance to be featured</p>
      <div className="relative flex justify-center items-center">
        <img
          className="w-60 rounded-2xl border-4 border-white"
          src="/img1.jpeg"
          alt=""
        />
        <img
          src="/PHOTO-2025-06-02-22-18-31-removebg-preview.png"
          alt=""
          className="absolute w-44 top-32 -right-4"
        />
        <img
          src="/insta-comment-removebg-preview.png"
          alt=""
          className="absolute w-20 top-10 left-7"
        />
      </div>
    </section>
  );
};

export default Social;
