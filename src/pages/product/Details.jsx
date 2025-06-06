import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ArrowLeft from "../../components/atoms/ArrowLeft";
import Cart from "../../components/atoms/Cart";

const ProductDetail = () => {
  const { id } = useParams();
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

  if (!product) return <p className="text-center p-10">Product not found.</p>;

  const handleAddToCart = () => {
    // Add to cart logic goes here
    console.log("Added to cart:", product.title);
  };

  return (
    <main className="min-h-screen p-5 bg-linear-to-b  from-0% to-[#4a4741]/ text-[#4a4741]">
      <div className="flex justify-between pb-3">
        <ArrowLeft onclick={() => navigate(-1)} classname={"size-7"} />
        <h3 className="font-light text-xl">Product Details</h3>
        <Cart classname={"size-5"} />
      </div>
      <section className="h-64">
        {/* bg-white shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2 max-w-5xl mx-auto */}
        {/* Product Image */}
        <figure className="h-full w-full bg-white py-2 rounded-2xl md:h-auto">
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
              {product.description}
            </p>
          </header>

          <section>
            <h3 className="font-semibold ">Size</h3>
            <div className="flex justify-between w-[80%] my-4">
              <span className="rounded-full py-2 px-3 text-sm bg-[#4a4741] text-[#f7f1e8]">
                sm
              </span>
              <span className="rounded-full py-2 px-3 text-sm bg-white">
                lg
              </span>
              <span className="rounded-full py-2 px-3 text-sm bg-white">
                xl
              </span>
              <span className="rounded-full py-2 px-3 text-sm bg-white">
                xxl
              </span>
              <span className="rounded-full py-2 px-3 text-sm bg-white">
                xxxl
              </span>
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
