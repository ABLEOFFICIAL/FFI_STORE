import React, { useContext, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./components/organism/NotFound";
import DiscoveryPage from "./pages/discovery/DiscoveryPage";
import Details from "./pages/product/Details";
import LogAcct from "./pages/signIn/LogAcct";
import CreateAcct from "./pages/signUp/CreateAcct";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import AddToCart from "./pages/cart/AddToCart";
import Blog from "./pages/blog/Blog";
import FeaturedBlogPost from "./pages/featureBlog/FeaturedBlogPost";
import { PreloaderContext } from "./context/PreLoaderContext.jsx";
import Preloader from "./components/atoms/PreLoader.jsx";
import BlogDetails from "./pages/blog-details/BlogDetails.jsx";
import ShippingPage from "./pages/checkout/ShippingPage.jsx";
import PaymentPage from "./pages/checkout/PaymentPage.jsx";

// Define routes for the application

const App = () => {
  // const { loading, setLoading } = useContext(PreloaderContext);
  const location = useLocation();

  // useEffect(() => {
  //   // When route changes, show loader briefly
  //   setLoading(true);

  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // Show loader for 1 second (you can adjust this)

  //   return () => clearTimeout(timer);
  // }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discover" element={<DiscoveryPage />} />
        <Route path="/discover/:id" element={<Details />} />
        <Route path="/LogAcct" element={<LogAcct />} />
        <Route path="/CreateAcct" element={<CreateAcct />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/style-with-us" element={<Blog />} />
        <Route path="/featureBlog/:id" element={<FeaturedBlogPost />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/check-out" element={<ShippingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
