import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { blogPosts, features } from "../blog/Blog";
import DarkNav from "../../components/molecules/DarkNav";
import Footer from "../../components/organism/Footer";
import Sidebar from "../../components/molecules/Sidebar";
import NavBarMd from "../../components/molecules/NavBarMd";

const FeaturedBlogPost = () => {
  const { id } = useParams();
  const clickedPost = features.find((blog) => blog.id === Number(id));

  if (!clickedPost) {
    return <div>Blog post not found</div>;
  }

  const titleWords = clickedPost.title.trim().split(/\s+/);
  const mainTitle = titleWords.slice(0, -2).join(" ");
  const lastTwoWords = titleWords.slice(-2).join(" ");

  return (
    <div className="">
      <DarkNav />
      <NavBarMd />
      <Sidebar />

      {/* FULL WIDTH BANNER STAYS SAME */}
      <div
        // style={{ backgroundImage: `url('${clickedPost.img1}')` }}
        className="bg-[#4a4741] h-[30vh] w-screen bg-center bg-cover text-[#f7f1e8] relative flex justify-center items-center "
      >
        <h1 className="py-10 text-3xl font-light text-center">
          {mainTitle} <span className="slant">{lastTwoWords}</span>
        </h1>
      </div>

      {/* CONTAINER FOR MAIN CONTENT */}
      <div className="max-w-[1140px] mx-auto px-4 py-24 leading-8">
        <h1 className="font-medium text-2xl ">
          Transform yourself with amazing atyles
        </h1>
        <p className="py-5 pb-20 w-4/5">{clickedPost.post1}</p>

        <img
          src={clickedPost.img1}
          alt="Blog post visual"
          className="h-[40vh] md:h-[55vh] w-full object-cover  rounded-lg"
        />

        <p className="text-center pt-10 pb-10 w-4/5 mx-auto">
          {clickedPost.post2}...
        </p>

        <div className="pb-20 text-right">
          <span className="block w-full md:w-1/2 ml-auto">
            "{clickedPost.quote}"
          </span>
          <span className="block w-full md:w-1/2 ml-auto text-sm font-semibold">
            {clickedPost.quoteAuthor}
          </span>
        </div>
      </div>

      <section className="px-5 pb-10 max-w-[1140px] mx-auto">
        <h1 className="text-3xl font-extralight pt-20">You may also like</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
          {blogPosts &&
            blogPosts.slice(0, 3).map((blog) => {
              return (
                <NavLink
                  to={`/blog-details/${blog.id}`}
                  key={blog.id}
                  className="flex flex-col gap-8 py-10"
                >
                  <img
                    src={blog.img}
                    className="rounded-2xl w-full h-[35vh] object-cover object-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="flex flex-col gap-3 w-[94%]">
                    <h2 className="text-2xl">{blog.title}</h2>
                    <p>{blog.summary.slice(0, 50)}...</p>
                  </div>
                </NavLink>
              );
            })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturedBlogPost;
