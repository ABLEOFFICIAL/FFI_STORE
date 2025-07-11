import React, { useContext, useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { WidthContext } from "../../context/WidthContext";
import OrderCard from "./OrderCard";
import mail from "../../assets/PHOTO-2025-07-09-18-53-43-removebg-preview.png";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../../config/firebase";
import useLikedProducts from "../../hooks/useLikedProducts";
import useFetch from "../../hooks/useFetch";
import { storeAPI } from "../discovery/DisplayProducts";
import MyBtn from "../../components/atoms/MyBtn";

const MainProfile = () => {
  const { categories, setCategories } = useContext(WidthContext);
  //   const [user, setUser] = useState(null);
  //   const [wishList, setWishList] = useState([]);
  console.log(categories);

  const { likedProducts, like, dislike, userId } = useLikedProducts();
  console.log(likedProducts);
  const { data, loading, error } = useFetch(storeAPI);
  const wishList = data?.filter((item) =>
    likedProducts.includes(item.id.toString())
  );
  console.log(wishList);

  return (
    <>
      {categories == "Profile" && (
        <div className="w-3/4 h-[800px] bg-white rounded-sm p-3 text-[#4a4741]">
          <div className="border-b-[1px] border-neutral-500/30">
            <h2 className="text-2xl font-medium py-3">Account Overview</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-5">
            <ProfileCard>
              <h2 className="text-[20px] font-normal py-3 px-5 border-b-[1px] border-neutral-500/30">
                Account Details
              </h2>
              <div className=" px-5 py-2">
                <h3 className="font-normal text-lg">ekwesi Joshua</h3>
                <p className="text-neutral-600 text-sm">
                  ekwesijoshua@gmail.com
                </p>
              </div>
            </ProfileCard>
            <ProfileCard>
              <h2 className="text-[20px] font-normal py-3 px-5 border-b-[1px] border-neutral-500/30">
                Address Book
              </h2>
              <div className=" px-5 py-2">
                <h3 className="font-normal text-lg">
                  Your default shipping address:
                </h3>
                <div className="text-neutral-600 text-sm leading-7">
                  <p>Joshua Ekwesi</p>
                  <p>ifite awka</p>
                  <p>holy family youth village hostel, amansea</p>
                  <p>AWKA TOWN, Anambra </p>
                  <p>+234 8144755843 / +234 7038716053</p>
                </div>
              </div>
            </ProfileCard>
          </div>
        </div>
      )}
      {categories == "Orders" && (
        <div className="w-3/4 h-[800px] bg-white rounded-sm p-3 text-[#4a4741]">
          <div className="border-b-[1px] border-neutral-500/30">
            <h2 className="text-2xl font-medium py-3">Orders</h2>
          </div>
          <div className="flex flex-col gap-8 my-5">
            <OrderCard>
              <div className="flex items-center gap-3">
                <img src="/bag1.jpg" className="w-12 bg-cover bg-center" />
                <div className=" px-5 py-2 leading-7">
                  <h3 className="font-normal text-lg">
                    Loremipsum dolorsit amet
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Order 1643872611102
                  </p>
                  <p className="text-base font-medium">On 26-10-2024</p>
                </div>
              </div>
              <span className="bg-green-400 rounded-sm p-2 text-xs text-white">
                Delivered
              </span>
              <span className="text-sm">See details</span>
            </OrderCard>
            <OrderCard>
              <div className="flex items-center gap-3">
                <img src="/bag1.jpg" className="w-12 bg-cover bg-center" />
                <div className=" px-5 py-2 leading-7">
                  <h3 className="font-normal text-lg">
                    Loremipsum dolorsit amet
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Order 1643872611102
                  </p>
                  <p className="text-base font-medium">On 26-10-2024</p>
                </div>
              </div>
              <span className="bg-red-400 rounded-sm p-2 text-xs text-white">
                Pending
              </span>
              <span className="text-sm">See details</span>
            </OrderCard>
          </div>
        </div>
      )}
      {categories == "Inbox" && (
        <div className="w-3/4 h-[800px] bg-white rounded-sm p-3 text-[#4a4741]">
          <div className="border-b-[1px] border-neutral-500/30">
            <h2 className="text-2xl font-medium py-3">Inbox Messages</h2>
          </div>
          <div className="flex justify-center items-center  my-10">
            <div className=" h-60 w-3/5 flex flex-col items-center justify-between text-center">
              <img src={mail} className="w-32 bg-blue-500 p-4 rounded-full" />
              <h5>You don't have any messages</h5>
              <p>
                Here you will be able to see all the messages that we send you.
                Stay tuned
              </p>
            </div>
          </div>
        </div>
      )}
      {categories === "Wishlist" && (
        <div className="w-3/4 min-h-[800px] bg-white rounded-sm p-3 text-[#4a4741]">
          <div className="border-b-[1px] border-neutral-500/30">
            <h2 className="text-2xl font-medium py-3">Wishlist</h2>
          </div>
          {wishList.length === 0 ? (
            <div className="flex justify-center items-center my-10 text-center w-full">
              <p className="text-neutral-500">Your wishlist is empty.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-5 my-10">
              {wishList.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#f7f1e8] rounded-2xl p-4 flex gap-8"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 rounded-sm object-contain"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">
                      <span className="hidden md:block">{item.title}</span>
                    </h4>
                    <p className="text-sm">
                      <span className="font-semibold">
                        ₦{(item.price * (item.quantity || 1)).toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <div className="hidden md:flex gap-3 justify-center items-center p-5">
                    <MyBtn>Remove</MyBtn>
                    <MyBtn classname="bg-[#4a4741] px-4 py-2 text-base rounded-3xl text-[#f7f1e8]">
                      Add to Cart
                    </MyBtn>
                    {/* <span className="text-2xl font-medium">
                      ₦{(item.price * (item.quantity || 1)).toFixed(2)}
                    </span> */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MainProfile;
