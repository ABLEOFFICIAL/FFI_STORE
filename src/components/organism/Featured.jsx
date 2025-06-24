import React, { useEffect, useRef, useState } from "react";
import Products from "../molecules/Products";
import MyBtn from "../atoms/MyBtn";
import { motion } from "framer-motion";
import ArrowRight from "../atoms/ArrowRight";
import ArrowLeft from "../atoms/ArrowLeft";

const Featured = () => {
  const [featured, setFeatured] = useState();
  const [scrollPercent, setScrollPercent] = useState(0);
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const scrollRef = useRef();

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const percent = (scrollLeft / maxScrollLeft) * 100;
    setScrollPercent(percent);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    fetch("/featured.json")
      .then((res) => res.json())
      .then((data) => {
        const updated = data.map((i) => ({ ...i, display: false }));
        setFeatured(updated);
      });
  }, []);

  const handleDisplay = (item) => {
    fetch("/featured.json")
      .then((res) => res.json())
      .then((data) => {
        const updated = data.map((i) =>
          i.id === item.id ? { ...i, display: !i.display } : i
        );
        setFeatured(updated);
      });
  };

  const handleNext = () => {
    setPositionIndexes((previndexes) => {
      const updated = previndexes.map(
        (previndex) => (previndex + 1) % images.length
      );
      return updated;
    });
  };
  const positions = ["center", "left1", "left", "right", "right1"];
  const images = [
    // "/dress1.jpg",
    "/heel1.jpg",
    "/bag1.jpg",
    "/wig1.jpg",
    "/jewel1.jpg",
    // "/fan1.jpg",
    "/dress2.jpg",
  ];
  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-90%", scale: 0.7, zIndex: 2 },
    left: { x: "-180%", scale: 0.5, zIndex: 1 },
    right: { x: "180%", scale: 0.5, zIndex: 1 },
    right1: { x: "90%", scale: 0.7, zIndex: 2 },
  };

  return (
    <div className="pb-20 md:px-28 md:pt-28 pt-10 md:bg-white ">
      <div className="text-[#4a4741] px-5">
        <h1 className="font-semibold py-2 md:text-center">Curated Elegance</h1>
        <div className="flex justify-between items-center md:flex-col md:justify-center md:items-center md:pb-7">
          <p className="text-4xl font-extralight py-2">
            Inspire your next look
          </p>
          <MyBtn
            to={"/discover"}
            classname={"px-5 py-3 rounded-3xl bg-[#4a4741] text-[#f7f1e8]"}
          >
            Discover
          </MyBtn>
        </div>
      </div>

      <div
        ref={scrollRef}
        style={{
          scrollbarWidth: "none",
        }}
        className="w-96 m-auto overflow-auto md:hidden py-10 px-5"
      >
        {featured && (
          <div className="relative flex gap-5 w-max ">
            {featured.map((item, index) => {
              return (
                <Products
                  classname="w-[200px] h-[250px] shrink-0"
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  to={`/product/${item.id}`}
                  onClick={() => handleDisplay(item)}
                />
              );
            })}
          </div>
        )}
      </div>
      {/* scroll bar */}
      <div className="h-[1px] w-72 mx-auto bg-[#c3c3c2] my-10 md:hidden">
        <div
          style={{ width: `${scrollPercent}%` }}
          className={`h-[1px] bg-[#4a4741]`}
        ></div>
      </div>
      {/* displaying products on large screens */}
      <div className="hidden md:flex items-center flex-col justify-center h-[50vh]">
        {images.map((item, index) => {
          return (
            <motion.img
              key={index}
              src={item}
              className="rounded-lg"
              initial="center"
              animate={positions[positionIndexes[index]]}
              variants={imageVariants}
              transition={{ duration: 0.5 }}
              style={{ width: "20%", position: "absolute" }}
            />
          );
        })}
      </div>
      <button
        onClick={handleNext}
        className="text-[#f7f1e8] bg-[#4a4741] rounded-3xl px-4 text-sm mx-auto w-40 md:block py-3 mt-10 hidden "
      >
        View styles
      </button>
    </div>
  );
};

export default Featured;
// f7f1e8
