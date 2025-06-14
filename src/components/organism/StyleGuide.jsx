import React from "react";
import MyBtn from "../atoms/MyBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  return (
    <section className="px-5 md:px-12 py-12 bg-[#fafafa] text-[#4a4741]">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extralight">
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

      <div className="mt-16">
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
      </div>
    </section>
  );
};

export default StyleGuide;
