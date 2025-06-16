import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../blog/Blog";
import NavBar from "../../components/molecules/NavBar";
import { FaPlay } from "react-icons/fa6";
import Footer from "../../components/organism/Footer";

const BlogDetails = () => {
  const { id } = useParams();
  const clickedPost = blogPosts.find((post) => post.id === Number(id));
  console.log(clickedPost);
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
      <NavBar />
      {clickedPost && (
        <div>
          <div className="h-20 w-screen"></div>
          <h2 className="py-5 mx-5 text-lg text-[#4a4741] border-b-[1px] border-b-[#b7b7b7]">
            FFI Blogs
          </h2>
          {/* blogs */}
          <div className="px-5 text-[#4a4741] my-10">
            <h1 className="w-4/5 leading-8">
              {clickedPost.title}{" "}
              <span className="block italic text-xs">
                (By {clickedPost.author})
              </span>
            </h1>
            <div className="relative">
              <video
                ref={play}
                src={clickedPost.video}
                loop
                muted
                className="w-72 h-60 object-cover object-center m-auto my-10"
              ></video>
              <FaPlay
                onClick={handlePlay}
                className="absolute top-[48%] left-[48%] size-10 text-red-500"
              />
            </div>
            <p className="w-4/5 mx-auto leading-7">{clickedPost.point1}</p>
            <div className="py-20">
              <h1 className="text-2xl w-4/5">{clickedPost.point2title}</h1>
              <p className="py-10 w-4/5 mx-auto leading-7">
                {clickedPost.point2text}
              </p>
            </div>
            <div>
              <img
                src={clickedPost.img}
                className="h-[30vh] w-full object-cover object-center"
              />
            </div>
            <div className="pb-20">
              <h1 className="text-2xl w-4/5">{clickedPost.point3title}</h1>
              <p className="py-10 w-4/5 mx-auto leading-7">
                {clickedPost.point3text}
              </p>
            </div>
            <div className="pb-20">
              <h1 className="text-2xl w-4/5 py-5">{clickedPost.point4title}</h1>
              {clickedPost.arr1.map((item, idx) => {
                return (
                  <li key={idx} className=" w-4/5 mx-auto leading-7">
                    {item}
                  </li>
                );
              })}
            </div>
            <div className="pb-20">
              <p className="w-4/5 mx-auto leading-7">
                {" "}
                <span className="font-bold">
                  {clickedPost.point5title}
                </span>: {clickedPost.point5text}
              </p>
            </div>
            <div className="py-20">
              <h1 className="text-2xl w-4/5">{clickedPost.point5title}</h1>
              <p className="py-10 w-4/5 mx-auto leading-7">
                {clickedPost.point5text}
              </p>
            </div>
            <div className="pb-20">
              <p className="w-4/5 mx-auto leading-7">
                {" "}
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
