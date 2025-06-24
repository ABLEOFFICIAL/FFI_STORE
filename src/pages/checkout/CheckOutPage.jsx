import React from "react";
import { PageHeaders } from "../cart/AddToCart";
import MyInput from "../../components/atoms/MyInput";
import "./checkout.css";

const CheckOutPage = () => {
  return (
    <section className="p-5">
      <PageHeaders title="Check Out" />
      <div>
        <span className="text-sm text-neutral-500 ">Step1</span>
        <h2 className="text-2xl font-light">Shipping</h2>
      </div>
      <form className="my-10 input-form">
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
        <div>
          <MyInput classname="input-card" />
          <span className="input-label">Name</span>
        </div>
      </form>
    </section>
  );
};

export default CheckOutPage;
