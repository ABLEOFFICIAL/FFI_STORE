import React from "react";
import TopBar from "../components/atoms/TopBar";
import Hero from "../components/organism/Hero";
import NavBar from "../components/molecules/NavBar";
import Explore from "../components/organism/Explore";
import FFIDisplay from "../components/organism/FFIDisplay";
import StyleMoments from "../components/organism/StyleMoments";
import Featured from "../components/organism/Featured";

const HomePage = () => {
  return (
    <div className="relative text-white overflow-hidden">
      <TopBar />
      <NavBar />
      <Hero />
      <Explore />
      <FFIDisplay />
      <StyleMoments />
      <Featured />
    </div>
  );
};

export default HomePage;
