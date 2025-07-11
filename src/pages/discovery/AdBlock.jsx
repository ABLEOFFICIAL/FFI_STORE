import React, { useEffect } from "react";
import MyBtn from "../../components/atoms/MyBtn";
import { useState } from "react";

const AdBlock = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const Ads = [
    {
      id: 1,
      title: "Flash Sales",
      description: "Get up to 90% off",
      image: "/ad1.png",
    },
    {
      id: 2,
      title: "Awesome Deals",
      description: "get the chance to win a Bag",
      image: "/ad3.jpg",
    },
    {
      id: 3,
      title: "Dont miss out",
      description: "₦500 off your first order",
      image: "/ad2.jpg",
    },
    {
      id: 4,
      title: "FFI Delivery",
      description: "Get your order delivered in 24 hours",
      image: "/delivery.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % Ads.length;
        return nextIndex;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <div className="mx-5 h-auto w-[90vw] m-auto overflow-auto max-w-[1150px] md:mx-auto block md:hidden">
      <div className="flex w-max  mx-auto">
        {Ads.map((ad, idx) => {
          if (selectedIndex === idx) {
            return (
              <div
                key={ad.id}
                className="h-56 w-[90vw] md:w-[650px] md:h-[400px] relative text-[#f7f1e8] rounded-2xl md:rounded-none mx-auto"
                style={{
                  backgroundImage: `url(${ad.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute top-0 left-0 bg-linear-to-l from-neutral-950/0 md:rounded-none to-neutral-950/60 h-full w-full inline-flex flex-col justify-center gap-2 px-3 rounded-2xl">
                  <h3 className="text-3xl italic font-semibold">{ad.title}</h3>
                  <p>{ad.description}</p>
                  <MyBtn
                    to={"/flash-sales"}
                    classname="bg-[#f7f1e8] text-[#4a4741] px-5 py-3 rounded-3xl w-32"
                  >
                    Shop Now
                  </MyBtn>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      {/* try looping balls */}
      <div className="w-18 m-auto mt-3 flex justify-between items-center">
        {Ads.map((_, idx) => (
          <div
            key={idx}
            className="flex justify-center items-center w-2 h-2 bg-[#4a4741] rounded-full"
          >
            {selectedIndex === idx && (
              <div className="w-1 h-1 bg-white rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdBlock;
