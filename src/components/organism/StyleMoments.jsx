import React, { useContext, useState } from "react";
import MyBtn from "../atoms/MyBtn";
import { WidthContext } from "../../context/WidthContext";

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
  const { screenWidth } = useContext(WidthContext);
  return (
    <div className="text-[#4a4741] md:px-28">
      <div className="flex flex-col gap-5 items-start  px-5">
        <p className="font-semibold text-2xl md:text-3xl md:font-normal">
          Form meets Fashion
        </p>
        <div className="flex flex-col gap-5 md:flex md:flex-row md:justify-between md:pb-20">
          <h1 className="text-4xl font-light md:w-[60%] md:text-7xl md:leading-20">
            Effortless elegance, designed to move
            <span className="slant md:ml-5">with you.</span>
          </h1>
          <div className="flex flex-col gap-5 md:w-[40%] md:flex md:flex-col md:items-start md:gap-5">
            <p className="text-sm font-medium md:text-lg md:font-normal md:py-10">
              By your side—day or night—our pieces are tailored to fit your
              story. Feel empowered in outfits that blend timeless design with
              everyday comfort. Your wardrobe should work for you, not the other
              way around.
            </p>
            <MyBtn
              to={"how-to-style"}
              classname={
                "bg-[#4a4741] text-[#f7f1e8] px-5 py-3 rounded-3xl md:text-lg w-40 text-center "
              }
            >
              How to style
            </MyBtn>
          </div>
        </div>
      </div>
      <div>
        {moments.map((item) => {
          return screenWidth < 768 ? (
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
          ) : (
            <div key={item.id} className="flex flex-col gap-5 px-5"></div>
          );
        })}
      </div>
    </div>
  );
};

export default StyleMoments;
