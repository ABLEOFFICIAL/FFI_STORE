import React, { useState } from "react";
import MyBtn from "../atoms/MyBtn";

const StyleMoments = () => {
  const [moments, setMoments] = useState([
    {
      id: 1,
      title: "Starting Her Day",
      quote:
        "Every outfit from ELEGANCE+ gives me that 'I’m ready to win' energy.",
      author: "Chiamaka B.",
      role: "ELEGANCE+ Woman",
      img: "/sit.jpg",
      overlay: "/stat3.avif",
    },
    {
      id: 2,
      title: "Stepping Out",
      quote: "Wearing this, I don’t just feel dressed—I feel defined",
      author: "Ugochi M.",
      role: "ELEGANCE+ Muse",
      img: "/step.jpg",
      overlay: "/stat4.avif",
    },
    {
      id: 3,
      title: "Weathering the Mood",
      quote:
        "The comfort, the fit, the compliments—I never knew clothing could feel like this.",
      author: "Ada O.",
      role: "ELEGANCE+ Loyalist",
      img: "/feel.avif",
      overlay: "/stat5.avif",
    },
    {
      id: 4,
      title: " Power in the Pause",
      quote:
        "It's not just fashion. It's how I reset, recharge, and remind myself who I am..",
      author: "Lena M.",
      role: " ELEGANCE+ Muse",
      img: "/mood.avif",
      overlay: "/stat6.avif",
    },
  ]);
  return (
    <div className="text-[#4a4741]">
      <div className="flex flex-col gap-5 items-start  px-5">
        <p className="font-semibold text-2xl">Form meets Fashion</p>
        <h1 className="text-4xl font-light">
          Effortless elegance, designed to move with you.
        </h1>
        <p className="text-sm font-medium">
          By your side—day or night—our pieces are tailored to fit your story.
          Feel empowered in outfits that blend timeless design with everyday
          comfort. Your wardrobe should work for you, not the other way around.
        </p>
        <MyBtn classname={"bg-[#4a4741] text-[#f7f1e8] px-5 py-3 rounded-3xl"}>
          How to style
        </MyBtn>
      </div>
      <div>
        {moments.map((item) => {
          return (
            <div key={item.id}>
              <h1 className=" px-5 text-3xl font-extralight py-5">
                {item.title}
              </h1>
              <div className="relative h-[90vh]">
                <img src={item.img} className="h-[60vh] object-cover w-full" />
                <img
                  src={item.overlay}
                  className="absolute top-72 left-10 backdrop-blur-3xl bg-black/20 w-[80%] rounded-2xl"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StyleMoments;
