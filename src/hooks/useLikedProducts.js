import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../../config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const useLikedProducts = () => {
  const [userId, setUserId] = useState("guest");
  const [likedProducts, setLikedProducts] = useState([]);

  // Track authentication
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserId(user?.uid || "guest");
    });
    return () => unsubscribe();
  }, []);

  // Load likes
  useEffect(() => {
    const loadLikedProducts = async () => {
      if (userId === "guest") return;
      try {
        const docRef = doc(db, "likes", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setLikedProducts(docSnap.data().likedProducts || []);
        }
      } catch (error) {
        console.error("Error loading likes:", error);
      }
    };

    loadLikedProducts();
  }, [userId]);

  // Save likes
  const saveLikedProducts = async (products) => {
    if (userId === "guest") return;
    try {
      await setDoc(doc(db, "likes", userId), { likedProducts: products });
    } catch (error) {
      console.error("Error saving likes:", error);
    }
  };

  const like = (id) => {
    if (userId === "guest") return;
    setLikedProducts((prev) => {
      const updated = prev.includes(id) ? prev : [...prev, id];
      saveLikedProducts(updated);
      return updated;
    });
  };

  const dislike = (id) => {
    setLikedProducts((prev) => {
      const updated = prev.filter((pid) => pid !== id);
      saveLikedProducts(updated);
      return updated;
    });
  };

  return { likedProducts, like, dislike, userId };
};

export default useLikedProducts;
