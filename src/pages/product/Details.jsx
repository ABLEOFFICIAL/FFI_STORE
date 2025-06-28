import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ArrowLeft from "../../components/atoms/ArrowLeft";
import ArrowRight from "../../components/atoms/ArrowRight";
import Cart from "../../components/atoms/Cart";
import useToggle from "../../hooks/useToggle";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";
import { db, auth } from "../../../config/firebase";
import { Like, Liked } from "../discovery/DisplayProducts";
import useLikedProducts from "../../hooks/useLikedProducts";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { MdOutlineZoomInMap } from "react-icons/md";
import bag1 from "../../assets/premium_photo-1678739395192-bfdd13322d34.avif";
import bag2 from "../../assets/bag2-bg.avif";

export const ZoomIn = ({ onClick }) => {
  return (
    <MdOutlineZoomOutMap
      onClick={onClick}
      className="size-7 bg-black/20 p-1 rounded-full"
    />
  );
};
export const ZoomOut = ({ onClick }) => {
  return (
    <MdOutlineZoomInMap
      onClick={onClick}
      className="size-7 bg-black/20 p-1 rounded-full"
    />
  );
};

const ProductDetail = () => {
  const { likedProducts, like, dislike } = useLikedProducts();
  const [zoom, setZoom] = useState(false);
  const [selectedView, setSelectedView] = useState(0);

  const imgRef = useRef(null);
  const { id } = useParams();
  console.log(id);

  const { toggle, handleToggle } = useToggle();
  const storeAPI = "http://localhost:3000/products";
  const { data, loading, error } = useFetch(storeAPI);
  console.log(data);

  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("sm");
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0); // Tracks number of unique products

  // Handle user authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        setCartCount(0); // Reset cart count if user logs out
      }
    });
    return () => unsubscribe();
  }, []);

  // Fetch and listen to cart items in real-time
  useEffect(() => {
    if (!user) return;

    const userId = user.uid;
    const cartCollectionRef = collection(db, "carts", userId, "items");

    // Set up real-time listener for cart items
    const unsubscribe = onSnapshot(
      cartCollectionRef,
      (snapshot) => {
        const uniqueProducts = snapshot.size; // Count number of documents (unique products)
        setCartCount(uniqueProducts);
      },
      (err) => {
        console.error("Error listening to cart updates:", err);
        setCartCount(0);
      }
    );

    return () => unsubscribe(); // Clean up listener on unmount
  }, [user]);

  if (loading) return <p className="text-center p-10">Loading...</p>;
  if (error)
    return (
      <p className="text-center p-10 text-red-500">Something went wrong!</p>
    );

  const product = data?.find((item) => item.id.toString() === id.toString());
  console.log(product);

  {
    const isLiked = product && likedProducts.includes(product.id);
  }

  const productCategory = data?.filter(
    (item) => item.category === product?.category
  );
  const categoryArray = Object.values(productCategory || []);

  if (!product) return <p className="text-center p-10">Product not found.</p>;

  const handleAddToCart = async () => {
    if (!user) {
      navigate("/LogAcct");
      return;
    }

    const userId = user.uid;
    const cartRef = doc(db, "carts", userId, "items", product.id.toString());

    try {
      const cartSnap = await getDoc(cartRef);
      if (cartSnap.exists()) {
        // Product is already in cart — just update quantity
        await updateDoc(cartRef, {
          quantity: cartSnap.data().quantity + 1,
        });
      } else {
        // Product is not in cart — add it
        await setDoc(cartRef, {
          name: product.title,
          price: product.price,
          imageUrl: product.image,
          selectedSize,
          quantity: 1,
        });
      }
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  const handleSize = (size) => {
    setSelectedSize(size);
  };

  // handle the enlarge function
  const handleImageView = () => {
    setZoom((prev) => !prev);
  };
  const views = product.images;
  const showClickedImage = (e) => {
    console.log(imgRef.current.src);
    console.log(e.target.src);
    imgRef.current.src = e.target.src;
  };
  // handle directions
  const handleRight = () => {
    setSelectedView((prev) => {
      const updated = (prev + 1) % 3;
      return updated;
    });
  };
  const handleLeft = () => {
    setSelectedView((prev) => {
      const updated = (prev - 1 + 3) % 3;
      return updated;
    });
  };
  const isLiked = likedProducts.includes(product.id);

  return (
    <main className="min-h-max p-5 bg-linear-to-b from-0% to-[#4a4741]/ text-[#4a4741] pb-20">
      <div className="flex justify-between pb-3">
        <ArrowLeft onclick={() => navigate(-1)} classname="size-7" />
        <h3 className="font-light text-xl">Product Details</h3>
        <NavLink to="/cart">
          <Cart classname="size-5" cartCount={cartCount} />
        </NavLink>
      </div>
      <section className="h-auto">
        <section>
          <figure
            className={`${
              zoom
                ? "h-[80vh] py-10 z-50 shadow-4xl fixed top-10 left-0"
                : "h-72 py-2"
            } w-full bg-white rounded-2xl md:h-auto relative flex justify-center items-center`}
          >
            {views.map((img, idx) => {
              return (
                selectedView === idx && (
                  <img
                    key={idx}
                    ref={imgRef}
                    src={img}
                    alt={product.title}
                    className="w-[60%] m-auto  h-[270px] object-cover"
                  />
                )
              );
            })}
            <div className="absolute bottom-5 w-[90%] mx-auto flex justify-between">
              {zoom ? (
                <ZoomOut onClick={handleImageView} />
              ) : (
                <ZoomIn onClick={handleImageView} />
              )}
              <div className="flex gap-3 ">
                <ArrowLeft
                  onclick={handleLeft}
                  classname="size-8 bg-[#4a4741] text-white rounded-full p-1"
                />
                <ArrowRight
                  onclick={handleRight}
                  classname="size-8 bg-[#4a4741] text-white rounded-full p-1"
                />
              </div>
            </div>
          </figure>
          <div className="flex justify-start gap-5 my-4">
            {views.map((item, idx) => {
              return (
                <img
                  key={idx}
                  onClick={showClickedImage}
                  src={item}
                  className="w-20 h-20 rounded border-[1px] border-[#4a4741] p-2 object-cover object-center bg-white"
                />
              );
            })}
            {/* <img
              onClick={showClickedImage}
              src={product.image}
              alt="view-1"
              className="w-20 h-20 rounded border-[1px] border-[#4a4741] p-2 object-cover object-center bg-white"
            />
            <img
              onClick={showClickedImage}
              src={bag1}
              // src="/"
              alt="view-2"
              className="w-20 h-20 rounded border-[1px] border-[#4a4741] p-2 object-cover object-center bg-white"
            />
            <img
              onClick={showClickedImage}
              src={bag2}
              // src="/"
              alt="view-3"
              className="w-20 h-20 rounded border-[1px] border-[#4a4741] p-2 object-cover object-center bg-white"
            /> */}
          </div>
        </section>

        <div className="flex flex-col gap-6 pt-4">
          <header>
            <div
              className="flex justify-between
            "
            >
              <h1 className="text-xl font-bold w-[60%]">{product.title}</h1>
              {isLiked ? (
                <Liked
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dislike(product.id);
                  }}
                  className=" bg-[#4a4741] p-1.5 text-[#f7f1e8] rounded-full size-7"
                />
              ) : (
                <Like
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    like(product.id);
                  }}
                  className=" bg-[#4a4741] p-1 text-[#f7f1e8] rounded-full size-8"
                />
              )}
            </div>
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
            <p className="text-sm py-5">
              <span className="font-bold ">category</span>: {product.category}
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

          <section className="pb-10">
            <h3 className="text-2xl font-light text-center py-5">
              You might also like
            </h3>
            <div className="grid grid-cols-2 gap-5">
              {categoryArray.map((item) => (
                <NavLink
                  to={`/discover/${item.id}`}
                  key={item.id}
                  className="relative"
                >
                  <img
                    src={item.image}
                    className="h-48 object-center object-contain bg-white py-2 rounded-2xl px-3 w-full"
                    alt={item.title}
                  />
                  {likedProducts.includes(item.id) ? (
                    <Liked
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        dislike(item.id);
                      }}
                      className="absolute top-2 right-2 bg-[#4a4741] p-1.5 text-[#f7f1e8] rounded-full size-7"
                    />
                  ) : (
                    <Like
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        like(item.id);
                      }}
                      className="absolute top-2 right-2 bg-[#4a4741] p-1 text-[#f7f1e8] rounded-full size-8"
                    />
                  )}
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
