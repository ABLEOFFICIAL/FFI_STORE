import React, { useState } from "react";
import { PageHeaders } from "../cart/AddToCart";
import { CheckOutBtn, CheckoutHeader } from "./ShippingPage";
import img1 from "../../assets/bb6f8d89176709c1f671afc9abe20ab0-removebg-preview.png";
import img2 from "../../assets/Getting_gaining_black_icon-removebg-preview.png";
import img3 from "../../assets/0f86075d899c9069b235c23b792d70ef-removebg-preview.png";
import img4 from "../../assets/bef1bca7bb930f868c679a5c6b37056a-removebg-preview.png";
import useToggle from "../../hooks/useToggle";

const PaymentPage = () => {
  //   const { toggle, handleToggle } = useToggle();
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [selectedCard, setSelectedCard] = useState("visa");
  const handleCard = () => {
    {
      selectedCard === "visa"
        ? setSelectedCard("master")
        : setSelectedCard("visa");
    }
  };
  const handlePayment = () => {
    {
      paymentMethod === "credit"
        ? setPaymentMethod("transfer")
        : setPaymentMethod("credit");
    }
  };
  return (
    <section className="p-5">
      <PageHeaders title="Check Out" />
      <CheckoutHeader smallh="Step2" header="Payment" />
      <div className="flex gap-5 mt-10">
        <div
          onClick={handlePayment}
          className="bg-[#4a4741] text-[#f7f1e8] w-[120px] flex flex-col justify-center items-center shadow-md rounded-lg p-2"
        >
          <img
            src={img2}
            className="w-18 h-13 object-cover object-center filter invert"
          />
          <span>Transfer</span>
        </div>
        <div
          onClick={handlePayment}
          className="bg-[#4a4741] text-[#f7f1e8] w-[120px] flex flex-col justify-center items-center shadow-md rounded-lg p-2"
        >
          <img
            src={img1}
            className="w-18 h-13 object-cover object-center filter invert"
          />
          <span>Credit Card</span>
        </div>
      </div>
      {paymentMethod === "credit" && (
        <section className="my-14">
          <div className="flex justify-between items-center px-2 pr-4  bg-white h-[15vh] rounded-lg shadow-md mb-7">
            <img src={img3} className="w-20" />
            <p>VisaCard</p>
            {selectedCard === "visa" ? (
              <span className="w-7 bg-transparent h-7 p-3 border-[1px] border-[#4a4741] rounded-full flex justify-center items-center">
                <span className="block w-3 bg-[#4a4741] h-3 p-2 rounded-full"></span>
              </span>
            ) : (
              <span
                onClick={handleCard}
                className="block w-7 h-7 border-[1px] border-[#4a4741] rounded-full"
              ></span>
            )}
          </div>
          <div className="flex justify-between items-center px-2 pr-4  bg-white h-[15vh] rounded-lg shadow-md ">
            <img src={img4} className="w-20" />
            <p>MasterCard</p>
            {selectedCard === "master" ? (
              <span className="w-7 bg-transparent h-7 p-3 border-[1px] border-[#4a4741] rounded-full flex justify-center items-center">
                <span className="block w-3 bg-[#4a4741] h-3 p-2 rounded-full"></span>
              </span>
            ) : (
              <span
                onClick={handleCard}
                className="block w-7 h-7 border-[1px] border-[#4a4741] rounded-full"
              ></span>
            )}
          </div>
        </section>
      )}
      {paymentMethod === "transfer" && (
        <section className="my-14">
          <h2>accountnumber</h2>
        </section>
      )}
      <CheckOutBtn value="Continue To Payment" />
    </section>
  );
};

export default PaymentPage;
