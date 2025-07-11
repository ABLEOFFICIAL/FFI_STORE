import React, { useContext } from "react";
import Header from "./Header";
import AdBlock from "./AdBlock";
import FilterBlock from "./FilterBlock";
import Sidebar from "../../components/molecules/Sidebar";
import DisplayProducts from "./DisplayProducts";
import Footer from "../../components/organism/Footer";
import NavBarMd from "../../components/molecules/NavBarMd";
import Category from "./Category";
// import { PreloaderContext } from "../../context/PreLoaderContext";

const DiscoveryPage = () => {
  // const { loading } = useContext(PreloaderContext);
  return (
    <>
      <div>
        {/* <NavBarMd /> */}
        <div className="md:flex md:min-h-[100vh]">
          <div className="hidden md:block">
            <Category />
          </div>
          <div className="md:flex-1">
            <Header />
            <Sidebar />
            <AdBlock />
            <FilterBlock />
            <DisplayProducts />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DiscoveryPage;
