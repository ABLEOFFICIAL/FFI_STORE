import React, { useState, useEffect } from "react";

const TopBar = () => {
  const topInfo = [
    "Discover timeless elegance — new arrivals just dropped!",
    "Elevate your wardrobe with exclusive designs — Shop our latest collection.",
    "Elegance redefined — Your journey to flawless style starts here.",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log(topInfo);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % topInfo.length);
    }, 5000); // change message every 3 seconds

    return () => clearInterval(interval); // clean up
  }, [topInfo.length]);

  return (
    <div className="px-5">
      <p className="text-center text-black font-semibold m-auto">
        {topInfo[currentIndex]}
      </p>
    </div>
  );
};

export default TopBar;
