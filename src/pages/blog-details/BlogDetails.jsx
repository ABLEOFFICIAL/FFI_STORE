import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../blog/Blog";
import DarkNav from "../../components/molecules/DarkNav";
import { FaPlay } from "react-icons/fa6";
import Footer from "../../components/organism/Footer";
import Sidebar from "../../components/molecules/Sidebar";
import NavBarMd from "../../components/molecules/NavBarMd";

const BlogDetails = () => {
  const { id } = useParams();
  const clickedPost = blogPosts.find((post) => post.id === Number(id));
  // console.log(clickedPost);
  const play = useRef();
  const handlePlay = () => {
    if (play.current.paused) {
      play.current.play();
    } else {
      play.current.pause();
    }
  };

  return (
    <div>
      <DarkNav />
      <NavBarMd />
      <Sidebar />
      {clickedPost && (
        <div className="max-w-[1140px] mx-auto px-5 md:px-0">
          <div className="h-20 w-full"></div>

          <h2 className="py-5 text-lg text-[#4a4741] border-b border-b-[#b7b7b7] md:text-2xl md:px-0">
            FFI Blogs
          </h2>

          {/* blogs */}
          <div className="text-[#4a4741] my-10 space-y-16">
            {/* Blog Title */}
            <h1 className="w-full md:w-3/4 leading-8 md:leading-10 text-lg md:text-xl">
              {clickedPost.title}
              <span className="block italic text-xs md:text-sm">
                (By {clickedPost.author})
              </span>
            </h1>

            {/* Video Section */}
            <div className="relative flex justify-center">
              <video
                ref={play}
                src={clickedPost.video}
                loop
                muted
                className="w-72 h-60 object-cover object-center md:w-[500px] md:h-[400px]"
              ></video>
              <FaPlay
                onClick={handlePlay}
                className="absolute top-[48%] left-[48%] size-10 text-red-500 cursor-pointer"
              />
            </div>

            {/* First Paragraph */}
            <p className="w-full md:w-3/4 mx-auto leading-7 md:leading-8 text-sm md:text-base">
              {clickedPost.point1}
            </p>

            {/* Point 2 */}
            <div className="space-y-5 md:space-y-10">
              <h1 className="text-2xl w-full md:w-3/4">
                {clickedPost.point2title}
              </h1>
              <p className="w-full md:w-3/4 mx-auto leading-7 md:leading-8 text-sm md:text-base">
                {clickedPost.point2text}
              </p>
            </div>

            {/* Image */}
            <div>
              <img
                src={clickedPost.img}
                className="h-[30vh] w-full object-cover object-center md:h-[50vh]  rounded-lg"
              />
            </div>

            {/* Point 3 */}
            <div className="space-y-5">
              <h1 className="text-2xl w-full md:w-3/4">
                {clickedPost.point3title}
              </h1>
              <p className="w-full md:w-3/4 mx-auto leading-7 md:leading-8 text-sm md:text-base">
                {clickedPost.point3text}
              </p>
            </div>

            {/* Point 4 with list */}
            <div className="space-y-5">
              <h1 className="text-2xl w-full md:w-3/4">
                {clickedPost.point4title}
              </h1>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                {clickedPost.arr1.map((item, idx) => (
                  <li key={idx} className="w-full md:w-3/4 mx-auto leading-7">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Point 5 Single Paragraph */}
            <div>
              <p className="w-full md:w-3/4 mx-auto leading-7 md:leading-8 text-sm md:text-base">
                <span className="font-bold">{clickedPost.point5title}</span>:{" "}
                {clickedPost.point5text}
              </p>
            </div>

            {/* Point 5 Title + Text Block */}
            <div className="space-y-5">
              <h1 className="text-2xl w-full md:w-3/4">
                {clickedPost.point5title}
              </h1>
              <p className="w-full md:w-3/4 mx-auto leading-7 md:leading-8 text-sm md:text-base">
                {clickedPost.point5text}
              </p>
            </div>

            {/* Summary */}
            <div>
              <p className="w-full md:w-3/4 mx-auto leading-7 md:leading-8 text-sm md:text-base">
                <span className="font-bold">Summary</span>:{" "}
                {clickedPost.summary}
              </p>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default BlogDetails;
/* f7f1e8 */
/* 4a4741 */
