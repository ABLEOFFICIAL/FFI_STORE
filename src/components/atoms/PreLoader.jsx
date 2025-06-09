import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4A4741] text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        <p className="text-lg font-medium">Loading your experience...</p>
      </div>
    </div>
  );
};

export default Preloader;
