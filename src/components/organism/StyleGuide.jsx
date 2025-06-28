import React, { useEffect, useState } from "react";
import MyBtn from "../atoms/MyBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ArrowLeft from "../atoms/ArrowLeft";
import ArrowRight from "../atoms/ArrowRight";
import { Like, Liked, storeAPI } from "../../pages/discovery/DisplayProducts";
import useFetch from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";
import useLikedProducts from "../../hooks/useLikedProducts";

const tips = [
  {
    title: "Layering Like a Pro",
    desc: "Master the monochrome look for an effortlessly sleek vibe.",
    image: "/slide1.jpg",
  },
  {
    title: "Bold Accessories",
    desc: "Use statement pieces to elevate a simple outfit.",
    image: "/slide2.jpg",
  },
  {
    title: "Tailored Fit",
    desc: "A perfect fit adds class to any look. Tailor what matters.",
    image: "/slide3.jpg",
  },
  {
    title: "Textures That Speak",
    desc: "Play with textures like silk, leather, or wool for depth.",
    image: "/slide4.jpg",
  },
  {
    title: "Monochrome Magic",
    desc: "Create a refined look with one color in different tones.",
    image: "/slide5.jpg",
  },
  {
    title: "Minimalism Is Key",
    desc: "Less is more when aiming for a luxury aesthetic.",
    image: "/slide6.jpg",
  },
];

const StyleGuide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data, loading, error } = useFetch(storeAPI);

  const FeaturedProducts = data?.filter((item) => item.trending === true);
  const { likedProducts, like, dislike, userId } = useLikedProducts();
  // console.log(FeaturedProducts);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % 6;
        return nextIndex;
      });
    }, 4000);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const handleStyleTips = () => {
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % 6;
      return nextIndex;
    });
  };
  const handleLeftDirection = () => {
    setCurrentIndex((prev) => {
      const nextIndex = (prev - 1 + 6) % 6;
      return nextIndex;
    });
  };
  return (
    <section className="px-5 md:px-12 py-12 bg-[#fafafa] text-[#4a4741]">
      <div className="text-center mb-10">
        <h2 className="text-3xl w-4/5 mx-auto pt-10 pb-5 md:text-4xl font-extralight">
          Style Tips & Digital Styling Guide
        </h2>
        <p className="mt-2 max-w-xl mx-auto">
          Explore our expert tips on how to achieve a luxurious, fashionable
          look with confidence.
        </p>
      </div>

      <MyBtn
        to={"/guide"}
        classname={
          "block px-6 py-3 rounded-full transition bg-[#4a4741] w-max text-[#f7f1e8] text-center m-auto"
        }
      >
        Explore the Use Guide
      </MyBtn>
      {/* <section className="my-10">
        <div className="relative">
          {tips.map((tip, idx) => {
            return (
              currentIndex === idx && (
                <div key={idx}>
                  <img
                    src={tip.image}
                    className="w-full h-72 object-contain object-center rounded-xl"
                  />
                </div>
              )
            );
          })}
          <ArrowLeft
            onclick={handleLeftDirection}
            classname={
              "absolute top-1/2 left-3 bg-black/20 rounded-full p-2 size-12"
            }
          />
          <ArrowRight
            onclick={handleStyleTips}
            classname={
              "absolute top-1/2 right-3 bg-black/20 rounded-full p-2 size-12"
            }
          />
        </div>
      </section> */}
      <section className="md:max-w-[80vw] md:mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 z-10  sm:grid-cols-2">
          {FeaturedProducts &&
            FeaturedProducts.slice(0, 8).map((product) => {
              const isLiked = likedProducts.includes(product.id);

              return (
                <NavLink to={`/discover/${product.id}`} key={product.id}>
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full md:h-96 h-48 object-cover mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-4"
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
      </section>
    </section>
  );
};

export default StyleGuide;
