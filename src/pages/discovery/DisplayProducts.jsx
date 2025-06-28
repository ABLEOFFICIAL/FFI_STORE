import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { db } from "../../../config/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import useFetch from "../../hooks/useFetch";
import useLikedProducts from "../../hooks/useLikedProducts";

// Heart Icons
export const Like = ({ className, onClick }) => (
  <CiHeart onClick={onClick} className={className} />
);

export const Liked = ({ className, onClick }) => (
  <FaHeart onClick={onClick} className={className} />
);
export const storeAPI = "http://localhost:3000/products";

const DisplayProducts = () => {
  const { data, loading, error } = useFetch(storeAPI);
  // const [likedProducts, setLikedProducts] = useState([]);

  const { likedProducts, like, dislike, userId } = useLikedProducts();

  // Handle like/dislike
  // const handleLike = (id) => {
  //   if (userId === "guest") {
  //     alert("Please sign in to like products.");
  //     return;
  //   }
  //   setLikedProducts((prev) => (prev.includes(id) ? prev : [...prev, id]));
  // };

  // const handleDislike = (id) => {
  //   setLikedProducts((prev) => prev.filter((pid) => pid !== id));
  // };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error fetching products: {error.message}</div>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 z-10 max-w-[1150px] mx-auto mb-10">
      {data?.map((product) => {
        const isLiked = likedProducts.includes(product.id);

        return (
          <NavLink to={`/discover/${product.id}`} key={product.id}>
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 md:h-72 object-cover mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-4"
              />
              {isLiked ? (
                <Liked
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dislike(product.id);
                  }}
                  className="absolute top-2 right-2 bg-[#4a4741] p-1.5 text-[#f7f1e8] rounded-full size-7"
                />
              ) : (
                <Like
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    like(product.id);
                  }}
                  className="absolute top-2 right-2 bg-[#4a4741] p-1 text-[#f7f1e8] rounded-full size-8"
                />
              )}
            </div>
            <div>
              <h2 className="text-sm font-light mb-2">
                {product.title.slice(0, 20)}...
              </h2>
              <div className="flex justify-between">
                <p className="text-gray-700 font-semibold mb-2">
                  ${product.price}
                </p>
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default DisplayProducts;
