import React, { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { collection, onSnapshot } from "firebase/firestore";
import { db, auth } from "../../../config/firebase";
import { useNavigate } from "react-router-dom";

const Cart = ({ classname }) => {
  const [cartCount, setCartCount] = useState(0); // Changed to store total quantity
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        setCartCount(0); // Reset count if user logs out
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    const cartCollectionRef = collection(db, "carts", user.uid, "items");

    // Set up real-time listener for cart items
    const unsubscribe = onSnapshot(
      cartCollectionRef,
      (snapshot) => {
        let totalQuantity = 0;
        snapshot.forEach((doc) => {
          totalQuantity += doc.data().quantity || 0;
        });
        setCartCount(totalQuantity);
      },
      (err) => {
        console.error("Error listening to cart updates:", err);
        setCartCount(0);
      }
    );

    return () => unsubscribe(); // Clean up listener on unmount
  }, [user]);

  return (
    <div className="relative">
      <BsCart3 className={classname} />
      {cartCount > 0 && (
        <span className="absolute -top-3 -right-2 bg-[#4a4741] text-[#f7f1e8] px-1.5 py-0.5 rounded-full text-xs">
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default Cart;
