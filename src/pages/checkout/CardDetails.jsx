import React, { useState } from "react";
import { PageHeaders } from "../cart/AddToCart";
import { CheckMark, CheckOutBtn, CheckoutHeader } from "./ShippingPage";
import MyInput from "../../components/atoms/MyInput";
import useToggle from "../../hooks/useToggle";

const CardDetails = () => {
  const { toggle, handleToggle } = useToggle();

  const [data, setData] = useState({
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-10 max-w-[1170px] mx-auto flex flex-col justify-between">
      <div>
        <PageHeaders title="Check Out" />
        <CheckoutHeader smallh="Step 3" header="Add Card Details" />

        <div className="my-10">
          {/* Name on Card */}
          <MyInput
            name="name"
            type="text"
            placeholder="Name On Card"
            value={data.name}
            onChange={handleInput}
            classname="w-full p-[1rem] border border-[#4a4741] rounded-lg focus:outline-none mb-5"
          />

          {/* Card Number */}
          <MyInput
            name="cardNumber"
            type="text"
            placeholder="Card Number"
            value={data.cardNumber}
            onChange={handleInput}
            classname="w-full p-[1rem] border border-[#4a4741] rounded-lg focus:outline-none mb-5"
          />

          {/* Expiry & CVC */}
          <div className="flex gap-4">
            <MyInput
              name="month"
              type="text"
              placeholder="MM"
              value={data.month}
              onChange={handleInput}
              classname="w-full sm:w-1/3 p-[1rem] border border-[#4a4741] rounded-lg focus:outline-none"
            />
            <MyInput
              name="year"
              type="text"
              placeholder="YY"
              value={data.year}
              onChange={handleInput}
              classname="w-full sm:w-1/3 p-[1rem] border border-[#4a4741] rounded-lg focus:outline-none"
            />{" "}
          </div>
          <div className="mt-5 flex justify-between items-center">
            <MyInput
              name="cvc"
              type="text"
              placeholder="CVC"
              value={data.cvc}
              onChange={handleInput}
              classname="w-1/2 sm:w-1/3 p-[1rem] border border-[#4a4741] rounded-lg focus:outline-none"
            />
            <span className="w-1/2 text-sm px-2">
              3 or 4 digits usually found on the signature strip
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          {toggle ? (
            <CheckMark onClick={handleToggle} />
          ) : (
            <span
              onClick={handleToggle}
              className="h-5 w-5 border-[1px] border-[#4a4741] block rounded-sm"
            ></span>
          )}

          <span className="text-[#4a4741]">Save as default</span>
        </div>
      </div>

      <CheckOutBtn to={"/confirm"} value="Add Details" />
    </div>
  );
};

export default CardDetails;
