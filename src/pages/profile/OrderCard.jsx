import React from "react";

const OrderCard = ({ children }) => {
  return (
    <div className="w-full h-32 border-[1px] border-[#4a4741] rounded-xl flex justify-between items-center gap-4 px-5">
      {children}
    </div>
  );
};

export default OrderCard;
