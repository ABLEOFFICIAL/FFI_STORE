import React, { useContext, useEffect, useRef, useState } from "react";
import MyBtn from "../atoms/MyBtn";
import XBar from "../atoms/XBar";
import Plus from "../atoms/Plus";
import { WidthContext } from "../../context/WidthContext";
import ArrowLeft from "../atoms/ArrowLeft";
import ArrowRight from "../atoms/ArrowRight";

const FFIDisplay = () => {
  const [ffiCategory, setFfiCategory] = useState();
  const [scrollPercent, setScrollPercent] = useState(0);
  const scrollRef = useRef(null); // ref to track the scrollable container
  const { screenWidth } = useContext(WidthContext);

  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => {
        const updated = data.map((item) => ({
          ...item,
          showText: false,
          LgShow: false,
        }));
        setFfiCategory(updated);
      });
  }, []);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const percent = (scrollLeft / maxScrollLeft) * 100;
    setScrollPercent(percent);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handlePlus = (box) => {
    if (screenWidth < 768) {
      const updateCat = ffiCategory.map((i) =>
        i.id === box.id ? { ...i, showText: !i.showText } : i
      );
      setFfiCategory(updateCat);
    } else {
      const updateCat = ffiCategory.map((i) =>
        i.id === box.id ? { ...i, LgShow: !i.LgShow } : i
      );
      setFfiCategory(updateCat);
    }
  };

  const handleArrowRight = () => {
    const currentIndex = ffiCategory.findIndex(
      (item) => item.showText === true
    );
    if (currentIndex !== -1 && currentIndex < ffiCategory.length - 1) {
      const updated = ffiCategory.map((item, idx) => ({
        ...item,
        showText: idx === currentIndex + 1,
      }));
      setFfiCategory(updated);
    }
  };

  const handleArrowLeft = () => {
    const currentIndex = ffiCategory.findIndex(
      (item) => item.showText === true
    );
    if (currentIndex > 0) {
      const updated = ffiCategory.map((item, idx) => ({
        ...item,
        showText: idx === currentIndex - 1,
      }));
      setFfiCategory(updated);
    }
  };

  return (
    <div className="px-5 py-16">
      <div className="flex flex-col item-center  gap-8 md:justify-center  md:py-20 ">
        <h1 className="text-[rgb(74,71,65)] text-4xl font-extralight text-center md:text-7xl md:w-[50%] md:font-light md:leading-24 md:mx-auto">
          FFI Membership gives your body a{" "}
          <em className="slant font-serif italic">voice</em>
        </h1>
        <MyBtn
          to={"/why-ffi"}
          classname="bg-[rgb(74,71,65)] w-32 text-center mx-auto px-5 py-3 rounded-4xl"
        >
          Why FFI
        </MyBtn>
      </div>
      <div
        ref={scrollRef}
        style={{
          scrollbarWidth: "none",
        }}
        className="w-96 mx-auto overflow-auto pt-16 pb-5 md:w-[85%] md:m-auto md:h-[90vh] md:py-28"
      >
        {ffiCategory && (
          <div className="flex w-max gap-8 md:h-full">
            {ffiCategory.map((box, index) => {
              return (
                <div key={index}>
                  {box.showText ? (
                    <div className="fixed h-screen top-0 left-0 z-30">
                      <div
                        style={{
                          background: `url('${box.image}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        className="h-1/2"
                      >
                        <div className="bg-linear-to-b from-black/0 to-black w-full h-96 p-7 flex flex-col justify-between">
                          <div className="flex justify-between items-center">
                            <span className="bg-white/40 backdrop-blur-3xl px-5 py-2 rounded-3xl">
                              {box.Tag}
                            </span>
                            <XBar
                              onclick={() => handlePlus(box)}
                              classname="p-2 stroke-2 size-10 bg-white  text-[#4a4741] rounded-full cursor-pointer"
                            />
                          </div>
                          <div>
                            <div>
                              <h1 className="text-3xl">{box.Heading}</h1>
                              <p className={box.showText ? "block" : "hidden"}>
                                {box.Paragraph}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-black p-7 h-1/2">
                        <div className="bg-neutral-900 h-[70%] rounded-xl px-6 py-10 flex flex-col justify-between">
                          <h3 className="font-semibold">{box.ProfileName}</h3>
                          <p className="font-light text-lg">
                            {box.SpotlightTitle}
                          </p>
                          <p>"{box.Quote}"</p>
                        </div>
                        <div className="flex items-center justify-between py-5">
                          <MyBtn
                            to={"/learn-more"}
                            classname={
                              box.showText
                                ? "block bg-[#f7f1e8] text-[#4a4741] p-3 rounded-3xl"
                                : "hidden"
                            }
                          >
                            Learn More
                          </MyBtn>
                          <div className="flex gap-5">
                            <ArrowLeft
                              onclick={handleArrowLeft}
                              classname={
                                "p-3 bg-neutral-900 rounded-full size-13"
                              }
                            />
                            <ArrowRight
                              onclick={handleArrowRight}
                              classname={
                                "p-3 bg-neutral-900 rounded-full size-13"
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {box.LgShow ? (
                        <>
                          <div className="md:h-full">
                            <div
                              style={{
                                background: `url('${box.image}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "top",
                              }}
                              className="rounded-lg h-[384px] md:h-full w-[320px] md:w-[1200px]"
                            >
                              <div className="bg-linear-to-b from-black/0 to-black/70 w-80 h-96 rounded-lg p-7 flex flex-col justify-between md:h-full md:w-full">
                                <div className="flex justify-between items-center">
                                  <span className="bg-white/40 backdrop-blur-3xl px-5 py-2 rounded-3xl">
                                    {box.Tag}
                                  </span>
                                  {box.LgShow ? (
                                    <>
                                      <XBar
                                        onclick={() => handlePlus(box)}
                                        classname="p-2 stroke-2 size-10 bg-white  text-[#4a4741] rounded-full cursor-pointer"
                                      />
                                    </>
                                  ) : (
                                    <Plus
                                      onclick={() => handlePlus(box)}
                                      classname="p-2 size-10 bg-white  text-[#4a4741] rounded-full cursor-pointer"
                                    />
                                  )}
                                </div>
                                <div className="flex justify-between">
                                  <div className="flex flex-col gap-8">
                                    <h1 className="text-3xl md:text-3xl md:font-extralight md:w-[40%]">
                                      {box.Heading}
                                    </h1>
                                    <p
                                      className={
                                        box.LgShow ? "block w-[40%]" : "hidden"
                                      }
                                    >
                                      {box.Paragraph}
                                    </p>
                                    <MyBtn
                                      to={"/learn-more"}
                                      classname={
                                        "bg-[#f7f1e8] text-[#4a4741] px-7 py-3 rounded-3xl w-48 text-center"
                                      }
                                    >
                                      Learn More
                                    </MyBtn>
                                  </div>
                                  <div className="backdrop-blur-md h-min bg-neutral-100/30 rounded-xl px-6 py-5 flex flex-col gap-3">
                                    <h3 className="font-semibold">
                                      {box.ProfileName}
                                    </h3>
                                    <p className="font-light text-lg">
                                      {box.SpotlightTitle}
                                    </p>
                                    <p>"{box.Quote}"</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="md:h-full">
                            <div
                              style={{
                                background: `url('${box.image}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                              className="rounded-lg h-[384px] md:h-full w-[320px] md:w-[700px]"
                            >
                              <div className="bg-linear-to-b from-black/0 to-black/70 w-80 h-96 rounded-lg p-7 flex flex-col justify-between md:h-full md:w-full">
                                <div className="flex justify-between items-center">
                                  <span className="bg-white/40 backdrop-blur-3xl px-5 py-2 rounded-3xl">
                                    {box.Tag}
                                  </span>
                                  <Plus
                                    onclick={() => handlePlus(box)}
                                    classname="p-2 size-10 bg-white  text-[#4a4741] rounded-full cursor-pointer"
                                  />
                                </div>
                                <div>
                                  <div>
                                    <h1 className="text-3xl md:text-4xl md:font-extralight md:w-[70%]">
                                      {box.Heading}
                                    </h1>
                                    <p
                                      className={
                                        box.showText ? "block" : "hidden"
                                      }
                                    >
                                      {box.Paragraph}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* scroll bar */}
      <div className="h-[1px] w-72 mx-auto bg-[#c3c3c2] my-10">
        <div
          style={{ width: `${scrollPercent}%` }}
          className={`h-[1px] bg-[#4a4741]`}
        ></div>
      </div>
    </div>
  );
};

export default FFIDisplay;
