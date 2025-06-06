import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ArrowLeft from "../../components/atoms/ArrowLeft";
import Cart from "../../components/atoms/Cart";
import useToggle from "../../hooks/useToggle";
import { object } from "framer-motion/client";

const ProductDetail = () => {
  const { id } = useParams();
  const { toggle, handleToggle } = useToggle();
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  const navigate = useNavigate();

  if (loading) return <p className="text-center p-10">Loading...</p>;
  if (error)
    return (
      <p className="text-center p-10 text-red-500">Something went wrong!</p>
    );

  const product = data?.find((item) => item.id === parseInt(id));
  const productCategory = data?.filter(
    (item) => item.category === product.category
  );
  const categoryArray = Object.values(productCategory);
  console.log(categoryArray);

  if (!product) return <p className="text-center p-10">Product not found.</p>;

  const handleAddToCart = () => {
    // Add to cart logic goes here
    console.log("Added to cart:", product.title);
  };

  // select size
  const handleSize = (e) => {
    const allSizes = document.querySelectorAll(".size");

    // Remove active class from all sizes
    allSizes.forEach((size) => {
      size.classList.remove("active");
    });

    // Add active class to the clicked one
    e.target.classList.add("active");

    // Optionally store selected size
    const updated = { ...product, size: e.target.textContent };
    console.log(updated);
  };

  return (
    <main className="min-h-max p-5 bg-linear-to-b  from-0% to-[#4a4741]/ text-[#4a4741]">
      <div className="flex justify-between pb-3">
        <ArrowLeft onclick={() => navigate(-1)} classname={"size-7"} />
        <h3 className="font-light text-xl">Product Details</h3>
        <Cart classname={"size-5"} />
      </div>
      <section className="h-64">
        {/* bg-white shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2 max-w-5xl mx-auto */}
        {/* Product Image */}
        <figure className="h-72 w-full bg-white py-2 rounded-2xl md:h-auto">
          <img
            src={product.image}
            alt={product.title}
            className="w-[60%] m-auto h-full object-cover"
          />
        </figure>

        {/* Product Info */}
        <div className="flex flex-col gap-6 pt-4">
          <header>
            <h1 className="text-xl font-bold w-[60%]">{product.title}</h1>
            <p className="text-xl font-medium">${product.price.toFixed(2)}</p>
            <p className="mt-2 font-light text-sm w-80">
              {toggle
                ? product.description
                : `${product.description.slice(0, 150)}... `}

              <span
                onClick={handleToggle}
                className="font-semibold text-xs text-gray-500 cursor-pointer"
              >
                {toggle ? "show less" : "show more"}
              </span>
            </p>
          </header>

          <section>
            <h3 className="font-semibold ">Size</h3>
            <div className="flex justify-between w-[80%] my-4 cursor-pointer">
              <span
                onClick={handleSize}
                className="size active rounded-full py-2 px-3 text-sm cursor-pointer"
              >
                sm
              </span>
              <span
                onClick={handleSize}
                className="size rounded-full py-2 px-3 text-sm bg-white"
              >
                lg
              </span>
              <span
                onClick={handleSize}
                className="size rounded-full py-2 px-3 text-sm bg-white cursor-pointer"
              >
                xl
              </span>
              <span
                onClick={handleSize}
                className="size rounded-full py-2 px-3 text-sm bg-white cursor-pointer"
              >
                xxl
              </span>
              <span
                onClick={handleSize}
                className="size rounded-full py-2 px-3 text-sm bg-white cursor-pointer"
              >
                xxxl
              </span>
            </div>
          </section>

          <section>
            <h3>You might also like</h3>
            <div className="grid grid-cols-2 gap-5">
              {categoryArray.map((item) => {
                return (
                  <NavLink to={`/product/${item.id}`} key={item.id}>
                    <img
                      src={item.image}
                      className="h-48 object-center object-contain bg-white py-2 rounded-2xl px-3"
                    />
                    <h4>{item.title}</h4>
                  </NavLink>
                );
              })}
            </div>
          </section>

          <section className="flex justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-sm">Price</span>
              <p className="text-lg font-medium">${product.price.toFixed(2)}</p>
            </div>
            <button
              onClick={handleAddToCart}
              className="self-start text-sm bg-[#4a4741] text-[#f7f1e8] px-5 py-3 rounded-3xl"
            >
              Add to Cart
            </button>
          </section>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
/* f7f1e8 */
/* 4a4741 */
