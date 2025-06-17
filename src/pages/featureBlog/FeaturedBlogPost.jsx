import React from "react";
import { useParams } from "react-router-dom";
import { features } from "../blog/Blog";
import DarkNav from "../../components/molecules/DarkNav";
import Footer from "../../components/organism/Footer";
import Sidebar from "../../components/molecules/Sidebar";

const FeaturedBlogPost = () => {
  const { id } = useParams(); // Destructure id from params
  const clickedPost = features.find((blog) => blog.id === Number(id)); // Use find for single item, Number for safety
  // console.log(clickedPost);
  // Split the title into words
  const titleWords = clickedPost.title.trim().split(/\s+/);
  // Get all words except the last two
  const mainTitle = titleWords.slice(0, -2).join(" ");
  // Get the last two words
  const lastTwoWords = titleWords.slice(-2).join(" ");

  // Handle case where post is not found
  if (!clickedPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <div>
      <DarkNav />
      <Sidebar />
      <div
        style={{ backgroundImage: `url('${clickedPost.img1}')` }}
        className="h-[49vh] w-screen bg-center bg-cover text-[#f7f1e8] relative flex justify-center items-end"
      >
        <h1 className="py-10 text-3xl font-light text-center">
          {mainTitle} <span className="slant">{lastTwoWords}</span>
        </h1>
      </div>
      <p className="w-[80%] ml-auto px-3 py-10 leading-7 pb-24 italic">
        {clickedPost.post1}
      </p>
      <img
        src={clickedPost.img2}
        className="h-[40vh] bg-center bg-cover  w-full"
      />
      <p className="w-[80%] mx-auto text-center pt-10 pb-10">
        {clickedPost.post2}...
      </p>
      <div className="pb-20">
        <span className="block w-1/2 ml-auto">"{clickedPost.quote}"</span>
        <span className="block w-1/2 ml-auto text-sm font-semibold">
          {clickedPost.quoteAuthor}
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default FeaturedBlogPost;
