import React, { useContext } from "react";
import TopBar from "../components/atoms/TopBar";
import Hero from "../components/organism/Hero";
import NavBar from "../components/molecules/NavBar";
import Explore from "../components/organism/Explore";
import FFIDisplay from "../components/organism/FFIDisplay";
import StyleMoments from "../components/organism/StyleMoments";
import Featured from "../components/organism/Featured";
import Sidebar from "../components/molecules/Sidebar";
import StyleGuide from "../components/organism/StyleGuide";
import Testimonial from "../components/organism/Testimonial";
import Newsletter from "../components/organism/Newsletter";
import Social from "../components/organism/Social";
import Footer from "../components/organism/Footer";
import { PreloaderContext } from "../context/PreLoaderContext";

const HomePage = () => {
  // const { loading } = useContext(PreloaderContext);

  return (
    <>
      {/* {!loading && ( */}
      <div className="relative text-white overflow-hidden">
        <TopBar />
        <NavBar initialTop="top-14 md:top-8" finaltop="top-2" />
        <Sidebar />
        <Hero />
        <Explore />
        <FFIDisplay />
        <StyleMoments />
        <Featured />
        <StyleGuide />
        <Testimonial />
        <Newsletter />
        <Social />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
