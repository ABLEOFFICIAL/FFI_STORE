import React, { useState } from "react";
import sim from "../../assets/Screenshot_2025-06-28_at_02.06.12-removebg-preview.png";
import logo from "../../assets/logoImg.png";
import card from "../../assets/bef1bca7bb930f868c679a5c6b37056a-removebg-preview.png";
import { PageHeaders } from "../cart/AddToCart";
import { CheckOutBtn, CheckoutHeader } from "./ShippingPage";
import MyInput from "../../components/atoms/MyInput";
import useToggle from "../../hooks/useToggle";

const ConfirmDetails = () => {
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
    <section className="p-5">
      <PageHeaders title="Check Out" />
      <CheckoutHeader smallh="Step 4" header="Card Details" />

      <div className=" rounded-lg h-[30vh] px-7 py-5 flex flex-col justify-between bg-blue-500 text-white mt-5">
        <div className="flex justify-between items-center ">
          <img src={sim} className="w-8" />
          <img src={logo} className="w-8" />
        </div>
        <div className="">
          <span className="tracking-widest text-lg">**** **** **** 1234</span>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-2">
            <span className="text-sm ">Card Holder Name</span>
            <span className="text-sm italic font-bold">John Henry</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm ">Expiry Date</span>
            <span className="text-sm italic font-bold">05/23</span>
          </div>
          <img src={card} className="w-10" />
        </div>
      </div>
      <div>
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
      </div>
      <CheckOutBtn to={"/confirm"} value="Pay Now" />
    </section>
  );
};

export default ConfirmDetails;
