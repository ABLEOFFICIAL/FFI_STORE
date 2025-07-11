import React from "react";
import { PageHeaders } from "../cart/AddToCart";
import MyInput from "../../components/atoms/MyInput";
import "./checkout.css";
import { FaCheck } from "react-icons/fa6";
import useToggle from "../../hooks/useToggle";
import MyBtn from "../../components/atoms/MyBtn";

// Checkmark Component
export const CheckMark = ({ onClick }) => {
  return (
    <FaCheck
      onClick={onClick}
      className="size-5 border border-[#4a4741] p-1 rounded-sm"
    />
  );
};

// Button Component
export const CheckOutBtn = ({ value, to }) => {
  return (
    <div className="mt-10 mb-2">
      <MyBtn
        to={to}
        classname="w-full py-3 rounded-full bg-[#4a4741] text-[#f7f1e8] block text-center md:py-5"
      >
        {value}
      </MyBtn>
    </div>
  );
};

// Header
export const CheckoutHeader = ({ header, smallh }) => {
  return (
    <div className="mb-6">
      <span className="text-sm text-neutral-500">{smallh}</span>
      <h2 className="text-2xl font-light text-[#4a4741]">{header}</h2>
    </div>
  );
};

// Main Component
const ShippingPage = () => {
  const { toggle, handleToggle } = useToggle();

  return (
    <section className="p-5 md:p-10 max-w-[1140px] mx-auto">
      <PageHeaders title="Check Out" />
      <CheckoutHeader smallh="Step 1" header="Shipping" />

      <form className="input-form my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <MyInput classname="input-card" placeholder=" " />
          <span className="input-label">Name</span>
        </div>
        <div className="relative">
          <MyInput classname="input-card" placeholder=" " />
          <span className="input-label">Country</span>
        </div>
        <div className="relative">
          <MyInput classname="input-card" placeholder=" " />
          <span className="input-label">Street Name</span>
        </div>
        <div className="relative">
          <MyInput classname="input-card" placeholder=" " />
          <span className="input-label">City</span>
        </div>
        <div className="relative">
          <MyInput classname="input-card" placeholder=" " />
          <span className="input-label">State / Province</span>
        </div>
        <div className="relative">
          <MyInput classname="input-card" placeholder=" " />
          <span className="input-label">Zip Code</span>
        </div>
        <div className="relative md:col-span-2">
          <MyInput classname="input-card" placeholder=" " />
          <span className="input-label">Phone Number</span>
        </div>
      </form>

      <div className="md:mt-14">
        <h3 className="font-bold text-lg py-5 text-[#4a4741]">
          Billing Address
        </h3>
        <div className="flex items-center gap-3">
          {toggle ? (
            <CheckMark onClick={handleToggle} />
          ) : (
            <span
              onClick={handleToggle}
              className="h-5 w-5 border border-[#4a4741] block rounded-sm cursor-pointer"
            ></span>
          )}
          <span className="text-[#4a4741]">Save as default address</span>
        </div>
      </div>

      <CheckOutBtn to="/payment" value="Continue To Payment" />
    </section>
  );
};

export default ShippingPage;
