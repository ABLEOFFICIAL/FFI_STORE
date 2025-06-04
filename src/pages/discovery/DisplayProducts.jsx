import { div } from "framer-motion/client";
import React, { useEffect } from "react";
import MyBtn from "../../components/atoms/MyBtn";

const DisplayProducts = () => {
  const ProductsAPI = "https://fakestoreapi.com/products";
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    fetch(ProductsAPI)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  return (
    <>
      {products && (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 z-10">
          {products.map((product) => (
            <div key={product.id} className="">
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
                  <MyBtn
                    to={`/product/${product.id}`}
                    classname={
                      "px-4 py-2 text-xs bg-[#4a4741] rounded-3xl text-[#f7f1e8]"
                    }
                  >
                    Shop
                  </MyBtn>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DisplayProducts;
