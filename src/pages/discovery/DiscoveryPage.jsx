import React, { useContext } from "react";
import Header from "./Header";
import AdBlock from "./AdBlock";
import FilterBlock from "./FilterBlock";
import Sidebar from "../../components/molecules/Sidebar";
import DisplayProducts from "./DisplayProducts";
import Footer from "../../components/organism/Footer";
import NavBarMd from "../../components/molecules/NavBarMd";
// import { PreloaderContext } from "../../context/PreLoaderContext";

const DiscoveryPage = () => {
  // const { loading } = useContext(PreloaderContext);
  return (
    <>
      <div>
        <NavBarMd />
        <Header />
        <Sidebar />
        <AdBlock />
        <FilterBlock />
        <DisplayProducts />
        <Footer />
      </div>
    </>
  );
};

export default DiscoveryPage;
