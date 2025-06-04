import React from "react";
import MyBtn from "../../components/atoms/MyBtn";

const AdBlock = () => {
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
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Dont miss out",
      description: "₦500 off your first order",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "FFI Delivery",
      description: "Get your order delivered in 24 hours",
      image: "https://via.placeholder.com/150",
    },
  ];
  return (
    <div className="mx-5 h-56 w-[90vw] m-auto overflow-auto">
      <div className="flex w-max">
        {Ads.map((ad) => {
          return (
            <div
              key={ad.id}
              className="h-56 w-[90vw] relative text-[#f7f1e8] rounded-2xl"
              style={{
                backgroundImage: `url(${ad.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute top-0 left-0 bg-linear-to-l from-neutral-950/0 to-neutral-950/60 h-full w-full inline-flex flex-col justify-center  gap-2 px-3 rounded-2xl">
                <h3 className="text-3xl italic font-semibold ">{ad.title}</h3>
                <p className="">{ad.description}</p>
                <MyBtn
                  classname={
                    "bg-[#f7f1e8] text-[#4a4741] px-5 py-3 rounded-3xl w-32"
                  }
                >
                  Shop Now
                </MyBtn>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdBlock;
