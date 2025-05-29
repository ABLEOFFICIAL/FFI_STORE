import React, { useEffect, useState } from "react";
import Products from "../molecules/Products";
import { motion } from "framer-motion";

const Featured = () => {
  const [featured, setFeatured] = useState();

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
      <div>
        {featured && (
          <div className="w-96 m-auto overflow-auto">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="relative flex gap-5 w-max"
            >
              {[...featured, ...featured].map((item, index) => {
                return (
                  <Products
                    classname={item.display ? "" : "h-[60vh] w-[90vw]"}
                    onclick={() => handleDisplay(item)}
                    key={index}
                    image={item.image}
                    name={item.name}
                  />
                );
              })}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Featured;
// f7f1e8
// h-[80vh] z-30 m-auto
