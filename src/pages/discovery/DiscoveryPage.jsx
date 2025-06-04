import React from "react";
import Header from "./Header";
import AdBlock from "./AdBlock";
import FilterBlock from "./FilterBlock";
import Sidebar from "../../components/molecules/Sidebar";
import DisplayProducts from "./DisplayProducts";

const DiscoveryPage = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <AdBlock />
      <FilterBlock />
      <DisplayProducts />
    </div>
  );
};

export default DiscoveryPage;
