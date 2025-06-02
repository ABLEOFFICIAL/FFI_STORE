import { div, h1 } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export const Card = ({ name, testimony, img }) => {
  return (
    <div className="flex flex-col justify-between items-center text-center bg-white w-80 px-5 py-8 rounded-xl h-72 m-auto">
      <img
        className="w-14 h-14 object-cover object-center rounded-full"
        src={img}
      />
      <h5 className="font-bold pt-1 pb-3">{name}</h5>
      <p>{testimony}</p>
      <div className="flex justify-center items-center gap-1 py-4">
        <FaStar className="text-[#4a4741] text-xs" />
        <FaStar className="text-[#4a4741] text-xs" />
        <FaStar className="text-[#4a4741] text-xs" />
        <FaStar className="text-[#4a4741] text-xs" />
        <FaStar className="text-[#4a4741] text-xs" />
      </div>
    </div>
  );
};

const Testimonial = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const details = [
    {
      name: "Ugochi F, p",
      img: "/user2.jpeg",
      testimony:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, natus.",
    },
    {
      name: "Francis Pop",
      img: "/user1.jpeg",
      testimony:
        "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ea aut placeat deleniti repellendus corrupti!",
    },
    {
      name: "Elesh Cairo",
      img: "/sit.jpg",
      testimony:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, natus.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % details.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [details.length]);
  return (
    <section className="text-[#4a4741] py-20 px-5">
      <div>
        <h1 className="py-8 text-3xl">Testimonials</h1>
      </div>
      <div className="overflow-auto flex justify-center">
        <div className="flex flex-col justify-center items-center gap-5 w-max">
          {details.map((card, idx) => {
            return (
              selectedIndex === idx && (
                <Card
                  name={card.name}
                  testimony={card.testimony}
                  img={card.img}
                  key={idx}
                />
              )
            );
          })}
        </div>
      </div>

      {/* try looping balls */}
      <div className="w-24 m-auto my-8 flex justify-between items-center">
        {details.map((d, idx) => (
          <div
            key={idx}
            className="flex justify-center items-center w-3 h-3 bg-[#4a4741] rounded-full"
          >
            {selectedIndex === idx && (
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
