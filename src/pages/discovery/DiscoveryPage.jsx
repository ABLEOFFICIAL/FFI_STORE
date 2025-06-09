import React, { useContext } from "react";
import Header from "./Header";
import AdBlock from "./AdBlock";
import FilterBlock from "./FilterBlock";
import Sidebar from "../../components/molecules/Sidebar";
import DisplayProducts from "./DisplayProducts";
import { PreloaderContext } from "../../context/PreLoaderContext";

const DiscoveryPage = () => {
  const { loading } = useContext(PreloaderContext);
  return (
    <>
      {!loading && (
        <div>
          <Header />
          <Sidebar />
          <AdBlock />
          <FilterBlock />
          <DisplayProducts />
        </div>
      )}
    </>
  );
};

export default DiscoveryPage;
