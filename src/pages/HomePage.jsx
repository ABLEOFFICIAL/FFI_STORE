import React from "react";
import TopBar from "../components/atoms/TopBar";
import Hero from "../components/organism/Hero";
import NavBar from "../components/molecules/NavBar";
import Explore from "../components/organism/Explore";
import FFIDisplay from "../components/organism/FFIDisplay";

const HomePage = () => {
  return (
    <div className="relative text-white">
      <TopBar />
      <NavBar />
      <Hero />
      <Explore />
      <FFIDisplay />
    </div>
  );
};

export default HomePage;
