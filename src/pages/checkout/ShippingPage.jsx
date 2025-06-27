import React from "react";
import { PageHeaders } from "../cart/AddToCart";
import MyInput from "../../components/atoms/MyInput";
import "./checkout.css";
import { FaCheck } from "react-icons/fa6";
import useToggle from "../../hooks/useToggle";
import MyBtn from "../../components/atoms/MyBtn";

export const CheckMark = ({ onClick }) => {
  return (
    <FaCheck
      onClick={onClick}
      className="size-5 border-[1px] border-[#4a4741] p-1 rounded-sm"
    />
  );
};

export const CheckOutBtn = ({ value, to }) => {
  return (
    <div className="mt-10 mb-2">
      <MyBtn
        to={to}
        classname="w-full py-3 rounded-full bg-[#4a4741] text-[#f7f1e8] block text-center"
      >
        {value}
      </MyBtn>
    </div>
  );
};

export const CheckoutHeader = ({ header, smallh }) => {
  return (
    <div>
      <span className="text-sm text-neutral-500 ">{smallh}</span>
      <h2 className="text-2xl font-light">{header}</h2>
    </div>
  );
};

const ShippingPage = () => {
  const { toggle, handleToggle } = useToggle();
  return (
    <section className="p-5">
      <PageHeaders title="Check Out" />
      <CheckoutHeader smallh="Step1" header="Shipping" />
      <form className="my-10 input-form">
        <div className="pb-5">
          <MyInput classname="input-card" />
          <span className="input-label">Name</span>
        </div>
        <div className="pb-5">
          <MyInput classname="input-card" />
          <span className="input-label">Country</span>
        </div>
        <div className="pb-5">
          <MyInput classname="input-card" />
          <span className="input-label">Street Name</span>
        </div>
        <div className="pb-5">
          <MyInput classname="input-card" />
          <span className="input-label">City</span>
        </div>
        <div className="pb-5">
          <MyInput classname="input-card" />
          <span className="input-label">state / PROVINCE</span>
        </div>
        <div className="pb-5">
          <MyInput classname="input-card" />
          <span className="input-label">Zip Code</span>
        </div>
        <div className="pb-5">
          <MyInput classname="input-card" />
          <span className="input-label">Phone Number</span>
        </div>
      </form>

      <div>
        <h3 className="font-bold text-lg py-5 text-[#4a4741]">
          Billing Address
        </h3>
        <div className="flex gap-3">
          {toggle ? (
            <CheckMark onClick={handleToggle} />
          ) : (
            <span
              onClick={handleToggle}
              className="h-5 w-5 border-[1px] border-[#4a4741] block rounded-sm"
            ></span>
          )}

          <span className="text-[#4a4741]">Save as default address</span>
        </div>
      </div>
      <CheckOutBtn to={"/payment"} value="Continue To Payment" />
    </section>
  );
};

export default ShippingPage;
