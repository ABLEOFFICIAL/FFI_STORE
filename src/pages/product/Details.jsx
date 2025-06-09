import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ArrowLeft from "../../components/atoms/ArrowLeft";
import Cart from "../../components/atoms/Cart";
import useToggle from "../../hooks/useToggle";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../../config/firebase";
const ProductDetail = () => {
  const { id } = useParams();
  const { toggle, handleToggle } = useToggle();
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("sm");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <p className="text-center p-10">Loading...</p>;
  if (error)
    return (
      <p className="text-center p-10 text-red-500">Something went wrong!</p>
    );

  const product = data?.find((item) => item.id === parseInt(id));
  const productCategory = data?.filter(
    (item) => item.category === product?.category
  );
  const categoryArray = Object.values(productCategory || []);

  if (!product) return <p className="text-center p-10">Product not found.</p>;

  const handleAddToCart = async () => {
    if (!user) {
      // alert("Please log in to add items to the cart.");
      navigate("/LogAcct");
      return;
    }

    const userId = user.uid;
    console.log(auth.currentUser); // Should show UID if logged in
    const cartRef = doc(db, "carts", userId, "items", product.id.toString());

    try {
      const cartSnap = await getDoc(cartRef);
      if (cartSnap.exists()) {
        await updateDoc(cartRef, {
          quantity: cartSnap.data().quantity + 1,
        });
      } else {
        await setDoc(cartRef, {
          name: product.title,
          price: product.price,
          imageUrl: product.image,
          selectedSize,
          quantity: 1,
        });
        // trigger to show a modal(optional) and a number on the cart basket
      }
      // alert(`${product.title} (Size: ${selectedSize}) added to cart`);
    } catch (err) {
      console.error("Error adding to cart:", err);
      // alert("Failed to add item to cart.");
    }
  };

  const handleSize = (size) => {
    setSelectedSize(size);
  };

  return (
    <main className="min-h-max p-5 bg-linear-to-b from-0% to-[#4a4741]/ text-[#4a4741] pb-20">
      <div className="flex justify-between pb-3">
        <ArrowLeft onclick={() => navigate(-1)} classname="size-7" />
        <h3 className="font-light text-xl">Product Details</h3>
        <NavLink to="/cart">
          <Cart classname="size-5" />
        </NavLink>
      </div>
      <section className="h-auto">
        <figure className="h-72 w-full bg-white py-2 rounded-2xl md:h-auto">
          <img
            src={product.image}
            alt={product.title}
            className="w-[60%] m-auto h-full object-cover"
          />
        </figure>

        <div className="flex flex-col gap-6 pt-4">
          <header>
            <h1 className="text-xl font-bold w-[60%]">{product.title}</h1>
            <p className="text-xl font-medium">${product.price.toFixed(2)}</p>
            <p className="mt-2 font-light text-sm w-80">
              {toggle
                ? product.description
                : `${product.description.slice(0, 100)}... `}
              <span
                onClick={handleToggle}
                className="font-semibold text-xs text-gray-500 cursor-pointer"
              >
                {toggle ? "show less" : "show more"}
              </span>
            </p>
          </header>

          <section>
            <h3 className="font-semibold">Size</h3>
            <div className="flex justify-between w-[80%] my-4 cursor-pointer">
              {["sm", "lg", "xl", "xxl", "xxxl"].map((size) => (
                <span
                  key={size}
                  onClick={() => handleSize(size)}
                  className={`rounded-full py-2 px-3 text-sm cursor-pointer ${
                    selectedSize === size
                      ? "bg-[#4a4741] text-[#f7f1e8]"
                      : "bg-white"
                  }`}
                >
                  {size}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3>You might also like</h3>
            <div className="grid grid-cols-2 gap-5">
              {categoryArray.map((item) => (
                <NavLink to={`/product/${item.id}`} key={item.id}>
                  <img
                    src={item.image}
                    className="h-48 object-center object-contain bg-white py-2 rounded-2xl px-3 w-full"
                    alt={item.title}
                  />
                  <h4 className="py-2">{item.title.slice(0, 20)}...</h4>
                </NavLink>
              ))}
            </div>
          </section>

          <section className="fixed bottom-0 left-0 w-full bg-[#f7f1e8] border-t-[1px] border-[#4a4741] rounded-2xl p-4 flex justify-between items-center shadow-lg z-10">
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-sm">Price</span>
              <p className="text-lg font-medium">${product.price.toFixed(2)}</p>
            </div>
            <button
              onClick={handleAddToCart}
              className="text-sm bg-[#4a4741] text-[#f7f1e8] px-6 py-3 rounded-3xl hover:bg-[#4a4741]/90 transition-colors"
            >
              Add to Cart
            </button>
          </section>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
/* f7f1e8 */
/* 4a4741 */
