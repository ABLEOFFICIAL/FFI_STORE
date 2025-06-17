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

      {/* <div className="mt-16">
        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          navigation={true} // Adds navigation arrows
          pagination={{ clickable: true }} // Adds clickable pagination dots
          coverflowEffect={{
            rotate: 0, // Minimal rotation for flat appearance
            stretch: -20, // Negative stretch to bring slides closer, creating overlap
            depth: 200, // Increased depth for more pronounced layering
            modifier: 3, // Higher modifier for stronger effect
            slideShadows: true, // Shadows for visual depth
          }}
          className="w-full max-w-5xl mx-auto"
        >
          {tips.map((tip, index) => (
            <SwiperSlide
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden w-80 swiper-slide-custom"
            >
              <img
                src={tip.image}
                className="w-full h-56 object-cover"
                alt={tip.title}
              />
              <div className="p-4">
                <h4 className="font-semibold text-lg">{tip.title}</h4>
                <p className="text-sm text-gray-500">{tip.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
      <section className="my-10">
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
      </section>
    </section>
  );
};

export default StyleGuide;
