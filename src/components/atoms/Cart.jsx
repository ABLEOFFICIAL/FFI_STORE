import React, { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../../config/firebase";
import { useNavigate } from "react-router-dom";

const Cart = ({ classname }) => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        setCartItems([]);
      }
    });

    return () => unsubscribe();
  }, []);

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
        setCartItems([]);
      }
    };

    fetchCart();
  }, [user]);

  return (
    <div className="relative">
      <BsCart3 className={classname} />
      {cartItems.length > 0 && (
        <span className="absolute -top-3 -right-2 bg-[#4a4741] text-[#f7f1e8] px-1.5 py-0.5 rounded-full text-xs">
          {cartItems.length}
        </span>
      )}
    </div>
  );
};

export default Cart;
