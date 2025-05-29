import React, { useEffect, useState } from "react";
import Products from "../molecules/Products";

const Featured = () => {
  const [featured, setFeatured] = useState();

  useEffect(() => {
    fetch("/featured.json")
      .then((res) => res.json())
      .then((data) => {
        setFeatured(data);
      });
  }, []);
  return (
    <div className="pb-20">
      <div className="text-[#4a4741] px-5">
        <h1 className="font-semibold py-2">Curated Elegance</h1>
        <p className="text-4xl font-extralight py-6">Inspire your next look.</p>
      </div>
      <div>
        {featured && (
          <div className="w-96 m-auto overflow-auto">
            <div className="flex gap-5 w-max">
              {featured.map((item) => {
                return (
                  <Products key={item.id} image={item.image} name={item.name} />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Featured;
// f7f1e8
