import React, { useContext } from "react";
import NavBar from "../../components/molecules/NavBar";
import Footer from "../../components/organism/Footer";
import Sidebar from "../../components/molecules/Sidebar";
import { FaUsers } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { LuPyramid } from "react-icons/lu";
import { PreloaderContext } from "../../context/PreLoaderContext";

const About = () => {
  const { loading } = useContext(PreloaderContext);

  const images = ["/sit.jpg", "/mood.avif", "/elegant-wig.webp"];

  const ffiData = {
    products: "2,000,000",
    employees: "500",
    years: 1,
  };
  return (
    <>
      {!loading && (
        <div>
          <NavBar />
          <Sidebar />
          <section>
            <div className="bg-[url('/feel.avif')] h-[60vh] bg-center bg-cover bg-no-repeat text-[#f7f1e8] flex justify-center items-center text-2xl">
              Our <span className="slant">Mission</span>
            </div>
            <p className="text-sm w-[80%] ml-auto leading-6 py-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              molestiae, impedit asperiores earum exercitationem maxime odio
              libero illum, voluptatem ratione consequatur. Iusto minima unde
              atque quam voluptatum omnis quisquam mollitia maxime deserunt
              commodi blanditiis eligendi tenetur, ea dicta esse quos, facere a
              eius fugiat rerum fugit debitis reprehenderit eveniet! Velit.
            </p>
          </section>

          <section className="py-20">
            <div className="bg-[url('/hero1.jpg')] h-[25vh] bg-center bg-cover bg-no-repeat text-[#f7f1e8] flex justify-center items-center text-2xl">
              <span className="slant">Stylish</span>
            </div>
            <p className="text-sm w-[80%] m-auto text-center leading-6 py-10 italic">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              molestiae, impedit asperiores earum exercitationem maxime odio
              libero illum, voluptatem ratione consequatur. Iusto minima unde
              atque quam voluptatum omnis quisquam mollitia maxime deserunt
              commodi blanditiis eligendi tenetur, ea dicta esse quos, facere a
              eius fugiat rerum fugit debitis reprehenderit eveniet! Velit.
            </p>
          </section>

          <div className="px-5">
            <h1 className="text-2xl w-[60%]">
              The Iconic{" "}
              <span className="slant block text-right">Difference</span>
            </h1>
            <section className="overflow-auto ">
              <div className="flex gap-5 w-max">
                {images.map((img) => {
                  return (
                    <div
                      key={img}
                      style={{
                        backgroundImage: `url(${img})`,
                        scrollbarWidth: "none",
                      }}
                      className={`bg-no-repeat bg-center bg-cover h-72 w-72 `}
                    ></div>
                  );
                })}
              </div>
            </section>
          </div>

          <section className="py-14 px-5">
            <p className="text-base border-b-[1px] pt-4 pb-6 leading-7">
              <span className="text-3xl font-light block">
                {ffiData.products}+
              </span>{" "}
              products sold worldwide
            </p>
            <p className="text-base border-b-[1px] pt-4 pb-6 leading-7">
              <span className="text-3xl font-light block">
                {ffiData.employees}+
              </span>{" "}
              Employees
            </p>
            <p className="text-base border-b-[1px] pt-4 pb-6 leading-7">
              <span className="text-3xl font-light block">
                {ffiData.years}+
              </span>{" "}
              PHD working across an in-house inter disciplinary science team
            </p>
          </section>

          <section className="py-20 px-5">
            <div className="bg-[url('/elegant-jewellry.avif')] h-[25vh] bg-center bg-cover bg-no-repeat text-[#f7f1e8] flex justify-center items-center text-2xl">
              ...
            </div>
            <h3 className="font-light text-2xl pt-10">Stylish icons</h3>
            <p className="text-sm leading-6 py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              molestiae totam nihil voluptatem aliquid, fugiat nobis laborum
              assumenda quo molestias provident in nam omnis illum, perspiciatis
              aperiam saepe, ex hic!
            </p>
          </section>

          <section className="px-5 bg-white py-16">
            <h2 className="text-2xl font-light pb-6">Our values</h2>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <FaUsers className="size-10 border-[1px] border-neutral-500 rounded p-2" />
                <h4 className="text-lg font-medium">Not Me, We: Ubuntu</h4>
                <p>
                  At Oura, we are one team. We each have a significant role to
                  play–but we don’t win in silos. We know in order to succeed,
                  we must do it together. We embrace the diversity of our
                  locations,perspectives, and experiences to succeed as one
                  company.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <FaUserTie className="size-10 border-[1px] border-neutral-500 rounded p-2" />
                <h4 className="text-lg font-medium">We Are Human First</h4>
                <p>
                  Humanity is present in all that we do. We are passionate about
                  building products that celebrate and support uniqueness,
                  inclusivity, and diversity. We meet people where they are, as
                  they are, and prioritize accessibility, by connecting with
                  kindness and empathy
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <IoCheckmark className="size-10 border-[1px] border-neutral-500 rounded p-2" />
                <h4 className="text-lg font-medium">Trust Matters</h4>
                <p>
                  If we say we’ll do something, we do it. We always show up with
                  integrity, and we prioritize privacy– because it doesn’t just
                  matter to us, but to you, as well. We do the right thing, even
                  when no one is looking. It is vital to us that our community
                  and teammates know that they can rely on our products,
                  information, and perspective.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <LuPyramid className="size-10 border-[1px] border-neutral-500 rounded p-2" />
                <h4 className="text-lg font-medium">We Aim Higher</h4>
                <p>
                  Good enough isn’t good enough—we want to be the best. We are
                  bravely curious and optimistic about our ideas for the future,
                  and exploration is in our DNA. We act with courage, challenge
                  the status quo, take risks, and discover new. We execute with
                  excellence.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <FaRegEye className="size-10 border-[1px] border-neutral-500 rounded p-2" />
                <h4 className="text-lg font-medium">We find solutions</h4>
                <p>
                  We confront obstacles head-on. Even if we disagree, we share
                  one common goal: solving the problem, together.
                </p>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      )}
    </>
  );
};

export default About;
/* f7f1e8 */
/* 4a4741 */
