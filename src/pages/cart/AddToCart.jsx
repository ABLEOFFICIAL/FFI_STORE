import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db, auth } from "../../../config/firebase";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../../components/atoms/ArrowLeft";
import MyBtn from "../../components/atoms/MyBtn";
// import MdDesktop from "../../components/molecules/MdDesktop";
import { RiDeleteBinLine } from "react-icons/ri";
import Header from "../discovery/Header";
import Footer from "../../components/organism/Footer";

export const PageHeaders = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between pb-3">
      <ArrowLeft onclick={() => navigate(-1)} classname="size-7" />
      <h3 className="font-light text-xl">{title}</h3>
      <div className="size-5" /> {/* Placeholder for alignment */}
    </div>
  );
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        navigate("/LogAcct"); // Redirect to login if not authenticated
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // Fetch cart items when user is available
  useEffect(() => {
    if (!user) return;

    const fetchCart = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "carts", user.uid, "items")
        );
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // console.log(items.length);

        setCartItems(items);
      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    };
    fetchCart();
  }, [user]);

  // Remove item from cart
  const removeFromCart = async (itemId) => {
    if (!user) return;
    try {
      await deleteDoc(doc(db, "carts", user.uid, "items", itemId));
      setCartItems(cartItems.filter((item) => item.id !== itemId));
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  // Update quantity
  const updateQuantity = async (itemId, newQuantity) => {
    if (!user || newQuantity < 1) return;
    try {
      const cartRef = doc(db, "carts", user.uid, "items", itemId);
      await updateDoc(cartRef, { quantity: newQuantity });
      setCartItems(
        cartItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (err) {
      console.error("Error updating quantity:", err);
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {}, []);

  return (
    <main className="min-h-screen">
      <Header />
      <div className="max-w-[1150px] mx-auto p-5 bg-linear-to-b from-0% to-[#4a4741]/ text-[#4a4741]">
        <section className="mt-10 min-h-[600px]">
          {!user ? (
            <p className="text-center p-10">Please log in to view your cart.</p>
          ) : cartItems.length === 0 ? (
            <p className="text-center p-10">Your cart is empty.</p>
          ) : (
            <div className="flex flex-col gap-4 md:flex-row ">
              <div className="flex flex-col gap-4 md:w-3/4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-4 flex gap-8"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-20 h-20 object-contain"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">
                        <span className="block md:hidden truncate">
                          {item.name.slice(0, 30)}...
                        </span>
                        <span className="hidden md:block">{item.name}</span>
                      </h4>
                      <p className="text-sm">Size: {item.selectedSize}</p>
                      <p className="text-sm">
                        {/* ${item.price.toFixed(2)} x {item.quantity} ={" "} */}
                        <span className="font-semibold md:hidden block">
                          {(item.price * item.quantity).toFixed(2)}
                        </span>
                      </p>
                      <div className="flex gap-2 mt-2 md:gap-4 items-center">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-2 py-1 bg-gray-200 rounded cursor-pointer md:text-lg md:px-3"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-2 py-1 bg-gray-200 rounded cursor-pointer md:text-lg md:px-3"
                        >
                          +
                        </button>
                        <button onClick={() => removeFromCart(item.id)}>
                          <RiDeleteBinLine className="size-5 cursor-pointer" />
                        </button>
                      </div>
                    </div>
                    <div className="hidden md:flex justify-center items-center p-5">
                      <span className="text-2xl font-medium">
                        {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 md:mt-0 rounded-2xl p-5 bg-white flex flex-row md:flex-col md:w-1/4 md:items-start justify-between items-center md:gap-4 h-max">
                <span className="text-sm font-medium border-b-[1px] border-[#4a4741] w-full py-2 hidden md:block">
                  Cart Summary
                </span>
                <h3 className="text-xl font-medium flex flex-col md:flex-row md:justify-between md:w-full">
                  <span className="text-lg">Total: </span>
                  <span> ${total.toFixed(2)}</span>
                </h3>
                <MyBtn
                  to={"/check-out"}
                  classname="bg-[#4a4741] py-3 px-5 rounded-3xl text-[#f7f1e8] md:w-full text-center"
                >
                  Check Out
                </MyBtn>
              </div>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default CartPage;
