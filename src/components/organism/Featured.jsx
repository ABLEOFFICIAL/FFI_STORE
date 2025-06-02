import React, { useEffect, useRef, useState } from "react";
import Products from "../molecules/Products";
// import { motion } from "framer-motion";

const Featured = () => {
  const [featured, setFeatured] = useState();
  const [scrollPercent, setScrollPercent] = useState(0);
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

  return (
    <div className="pb-20">
      <div className="text-[#4a4741] px-5">
        <h1 className="font-semibold py-2">Curated Elegance</h1>
        <p className="text-4xl font-extralight py-6">Inspire your next look.</p>
      </div>

      <div
        ref={scrollRef}
        style={{
          scrollbarWidth: "none",
        }}
        className="w-96 m-auto overflow-auto"
      >
        {featured && (
          <div className="relative flex gap-5 w-max">
            {featured.map((item, index) => {
              return (
                <Products
                  classname={item.display ? "" : "h-[60vh] w-[90vw]"}
                  onclick={() => handleDisplay(item)}
                  key={index}
                  image={item.image}
                  name={item.name}
                  to={`/prducts/${item.id}`}
                />
              );
            })}
          </div>
        )}
      </div>
      {/* scroll bar */}
      <div className="h-[1px] w-72 mx-auto bg-[#c3c3c2] my-10">
        <div
          style={{ width: `${scrollPercent}%` }}
          className={`h-[1px] bg-[#4a4741]`}
        ></div>
      </div>
    </div>
  );
};

export default Featured;
// f7f1e8
// h-[80vh] z-30 m-auto
