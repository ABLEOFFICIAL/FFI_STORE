import React, { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../../config/firebase";
import { useNavigate } from "react-router-dom";

const Cart = ({ classname }) => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (!user) {
      setCartItems([]);
      return;
    }

    const fetchCart = async () => {
      // setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, [user]);

  return (
    <div className="relative">
      <BsCart3 className={classname} />
      <span
        className={`bg-[#4a4741] text-[#f7f1e8] px-1.5 py-0.5 rounded-full absolute -top-3 -right-2 text-xs ${
          cartItems.length === 0 ? "hidden" : "block"
        }`}
      >
        {cartItems.length}
      </span>
    </div>
  );
};

export default Cart;
