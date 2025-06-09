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

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        navigate("/login"); // Redirect to login if not authenticated
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

  return (
    <main className="min-h-screen p-5 bg-linear-to-b from-0% to-[#4a4741]/ text-[#4a4741]">
      <div className="flex justify-between pb-3">
        <ArrowLeft onclick={() => navigate(-1)} className="size-7" />
        <h3 className="font-light text-xl">Your Cart</h3>
        <div className="size-5" /> {/* Placeholder for alignment */}
      </div>
      <section>
        {!user ? (
          <p className="text-center p-10">Please log in to view your cart.</p>
        ) : cartItems.length === 0 ? (
          <p className="text-center p-10">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col gap-4">
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
                  <h4 className="font-semibold">{item.name.slice(0, 30)}...</h4>
                  <p className="text-sm">Size: {item.selectedSize}</p>
                  <p className="text-sm">
                    ${item.price.toFixed(2)} x {item.quantity} = $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <h3 className="text-xl font-semibold mt-4">
              Total: ${total.toFixed(2)}
            </h3>
          </div>
        )}
      </section>
    </main>
  );
};

export default CartPage;
