import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";

// Dummy images, replace with your assets
import backend from "../assets/popular/backend.jpg";
import dm from "../assets/popular/dm.jpg";
import python from "../assets/popular/python.jpg";
import mern from "../assets/popular/mern.jpg";
import machineLearning from "../assets/popular/machineLearning.jpg";
import frontend from "../assets/popular/frontEnd.jpg"
import diploma from "../assets/popular/diploma.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const tabs = [
  "All Course",
  "Graphic & Multimedia",
  "Web & Software",
  "Digital Marketing",
  "3D Animation & Visualization",
];

const courses = [
  {
    category: "All Course",
    title: "Frontend development with react",
    image: frontend,
    reviews: "850+",
    students: 1200,
    fee: "50,000 BDT",
  },
  {
    category: "All Course",
    title: "Diploma in full Stack Development",
    image: diploma,
    reviews: "700+",
    students: 2000,
    fee: "110,000 BDT",
  },
  {
    category: "All Course",
    title: "App Development With Kotlin",
    image: backend,
    reviews: 1220,
    students: 2400,
    fee: "50,000 BDT",
  },
  {
    category: "All Course",
    title: "Python Django",
    image: dm,
    reviews: 256,
    students: 320,
    fee: "50,000 BDT",
  },
  {
    category: "All Course",
    title: "Python Django",
    image: python,
    reviews: 256,
    students: 320,
    fee: "50,000 BDT",
  },
  {
    category: "All Course",
    title: "Mern Stack Development",
    image: mern,
    reviews: 680,
    students: 850,
    fee: "95,000 BDT",
  },
  {
    category: "All Course",
    title: "Python Machine Learning",
    image: machineLearning,
    reviews: 896,
    students: 1120,
    fee: "50,000 BDT",
  },
];

const PopularCourses = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="rounded-[32px] section-container p-6 sm:p-8 mx-4 sm:mx-8 my-8 bg-gray-50">
      <h2 className="text-center font-bold text-4xl mb-2">Popular Courses</h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        We have designed our courses with the most demanding professional skills. The knowledge,
        experience, and expertise gained through the program will ensure your desired job in the global market.
        <br />
        From the list below you can enroll to any online or offline courses at any time.
      </p>

      {/* Tabs */}
      <div className="flex flex-col sm:flex-row justify-center border-b border-gray-200 mb-6 gap-2 sm:gap-0">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            onClick={() => setActiveTab(idx)}
            className={`font-semibold text-base px-4 py-2 transition-colors
              ${activeTab === idx ? "text-red-600 border-b-4 border-red-600" : "text-gray-800"}
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Slider with Arrows */}
      <div className="flex items-center justify-center gap-2 relative">
        {/* Prev Arrow (hidden on mobile) */}
        <button
          onClick={() => swiperRef && swiperRef.slidePrev()}
          className="hidden sm:flex border-2 cursor-pointer border-red-600 rounded-full w-10 h-10 bg-white text-red-600 items-center justify-center hover:bg-red-600 hover:text-white transition absolute left-[-40px] top-1/2 -translate-y-1/2 z-10"
        >
          <IoIosArrowBack />
        </button>

        {/* Swiper */}
        <Swiper
          slidesPerView={1} // default for mobile
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          spaceBetween={24}
          onSwiper={setSwiperRef}
          className="w-full"
        >
          {courses.map((course, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col h-[360px] max-w-[250px] md:max-w-[380px] mx-auto">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-1">
                  <span className="text-[#ff7e31] font-bold text-sm mb-1">
                    {course.category}
                  </span>
                  <h3 className="font-bold text-[20px] pb-2  my-1">
                    {course.title}
                  </h3>
                  <div className="flex gap-1 items-center mb-2 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                    <span className="text-gray-900 font-bold mr-2">
                      {course.reviews} Review
                    </span>
                    <span className="text-gray-500 ml-2">
                      {course.students} Student
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="font-bold text-[15px]">
                      Course Fee {course.fee}
                    </span>
                    <button className="border border-red-600 text-red-600 bg-white rounded-md px-3 py-1 font-bold cursor-pointer hover:bg-[#ff7e31] hover:text-white transition text-xs">
                      Click for discount
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next Arrow (hidden on mobile) */}
        <button
          onClick={() => swiperRef && swiperRef.slideNext()}
          className="hidden sm:flex border-2 cursor-pointer border-red-600 rounded-full w-10 h-10 bg-white text-red-600 items-center justify-center hover:bg-red-600 hover:text-white transition absolute right-[-40px] top-1/2 -translate-y-1/2 z-10"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default PopularCourses;
