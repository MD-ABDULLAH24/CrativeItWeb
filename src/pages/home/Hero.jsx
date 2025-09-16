import React from "react";
import banner from "../../assets/hero.png";
import check from "../../assets/Check.png";
import Button from "../../components/Button";
import iso from "../../assets/iso.png";
import bannerImg from "../../assets/bannerImg.jpg";
import { CiPlay1 } from "react-icons/ci";
import CategoryCard from "./CategoryCard";

const Hero = () => {
  return (
    <section
      className="md:h-[850px] h-[1180px] relative bg-cover bg-center md:pb-[300px] text-black"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="section-container px-4 md:px-8 pt-24 md:pt-32 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center md:items-start justify-start pt-30 md:pt-40 lg:pt-50">
          <h2 className="text-[14px] md:text-[17px]  flex gap-2 font-bold ">
            <img src={check} alt="check" />
            Unleash Your Potential
          </h2>
          <h1 className="text-[24px] sm:text-[36px] md:text-[36px] lg:text-[43px] font-bold py-[18px] text-center md:text-left max-w-[500px] ">
            Become an IT Pro & Rule the{" "}
            <span className="bg-gradient-to-r from-[#ff0000] to-[#f14e4e] bg-clip-text text-transparent">
              Digital World
            </span>
          </h1>
          <p className="max-w-[500px] pb-[22px] text-[20px]">
            With a vision to turn manpower into assets, Creative IT Institute is
            ready to enhance your learning experience with skilled mentors and
            an updated curriculum. Pick your desired course from more than 45
            trendy options.
          </p>
          <div className="flex gap-5">
            <Button btnText="Browse Course" />
            <Button className="hidden  md:flex" btnText="Join free seminar" />
          </div>
          <p className="flex gap-2 pt-8 items-center font-semibold text-[20px] max-w-[400px]">
            <img src={iso} alt="ISO" />
            One of the best ISO certified IT Training Institutes in Bangladesh
          </p>
        </div>
        {/* right side  */}
        <div className="md:pt-60 pt-10 lg:flex justify-center relative">
          <img
            src={bannerImg}
            alt=""
            className="border-8  border-white rounded-2xl w-full max-w-6xl"
          />
          {/* Play Icon */}
          <div className="absolute md:top-[40%] top-[22%]  left-1/2 -translate-x-1/2  inset-0 flex justify-center items-center">
            <button className="bg-white md:w-16 w-12 md:h-16 h-12 cursor-pointer rounded-full flex justify-center items-center hover:scale-110 transition-transform">
              <CiPlay1 className="text-red-500 font-bold text-2xl " />
            </button>
          </div>
        </div>
      </div>
      <CategoryCard/>
    </section>
  );
};

export default Hero;
