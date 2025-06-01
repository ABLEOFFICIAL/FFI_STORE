import React from "react";
import TopBar from "../components/atoms/TopBar";
import Hero from "../components/organism/Hero";
import NavBar from "../components/molecules/NavBar";
import Explore from "../components/organism/Explore";
import FFIDisplay from "../components/organism/FFIDisplay";
import StyleMoments from "../components/organism/StyleMoments";
import Featured from "../components/organism/Featured";
import Sidebar from "../components/molecules/Sidebar";
import StyleGuide from "../components/organism/StyleGuide";

const HomePage = () => {
  return (
    <div className="relative text-white overflow-hidden">
      <TopBar />
      <NavBar />
      <Sidebar />
      <Hero />
      <Explore />
      <FFIDisplay />
      <StyleMoments />
      <Featured />
      <StyleGuide />
    </div>
  );
};

export default HomePage;
