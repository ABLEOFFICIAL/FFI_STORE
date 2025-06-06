import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import MyBtn from "../../components/atoms/MyBtn";
import { NavLink } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const DisplayProducts = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  // const ProductsAPI = "";
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch(ProductsAPI)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //     });
  // }, []);
  return (
    <>
      {data && (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 z-10">
          {data.map((product) => (
            <NavLink
              to={`/product/${product.id}`}
              key={product.id}
              className=""
            >
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover mb-4 bg-white shadow-md  hover:shadow-lg transition-shadow duration-300 rounded-lg p-4"
                />
              </div>
              <div>
                <h2 className="text-sm font-light mb-2">
                  {product.title.slice(0, 20)}...
                </h2>
                <div className="flex justify-between">
                  <p className="text-gray-700 font-semibold mb-2">
                    ${product.price}
                  </p>
                  {/* <MyBtn
                    to={`/product/${product.id}`}
                    classname={
                      "px-4 py-2 text-xs bg-[#4a4741] rounded-3xl text-[#f7f1e8]"
                    }
                  >
                    Shop
                  </MyBtn> */}
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default DisplayProducts;
