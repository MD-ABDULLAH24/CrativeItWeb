import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

import backend from "../assets/popular/backend.jpg";
import dm from "../assets/popular/dm.jpg";
import affiliate from "../assets/popular/affiliate.jpg";

const coursesData = [
  {
    category: "All Course",
    title: "BACKEND DEVELOPMENT WITH NODE",
    image: backend,
    reviews: 675,
    students: 800,
    fee: "50,000 BDT",
  },
  {
    category: "All Course",
    title: "Digital Marketing Course",
    image: dm,
    reviews: 6800,
    students: 8500,
    fee: "50,000 BDT",
  },
  {
    category: "All Course",
    title: "Affiliate Marketing",
    image: affiliate,
    reviews: 168,
    students: 210,
    fee: "25,000 BDT",
  },
   {
    category: "All Course",
    title: "Digital Marketing Course",
    image: dm,
    reviews: 6800,
    students: 8500,
    fee: "50,000 BDT",
  },
   {
    category: "All Course",
    title: "BACKEND DEVELOPMENT WITH NODE",
    image: backend,
    reviews: 675,
    students: 800,
    fee: "50,000 BDT",
  },
];

const tabs = [
  "All Course",
  "Graphic & Multimedia",
  "Web & Software",
  "Digital Marketing",
  "3D Animation & Visualization",
];

function PopularCourse() {
  const [activeTab, setActiveTab] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const filteredCourses = coursesData;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, filteredCourses.length - 3)
    );
  };

  return (
    <div className="bg-gray-100 section-container rounded-[32px] p-6 sm:p-8 mx-4 sm:mx-8 my-8">
      <h2 className="text-center font-bold text-3xl sm:text-4xl mb-2">
        Popular Courses
      </h2>
      <p className="text-center max-w-[660px] pt-4 pb-6 sm:pt-8 sm:pb-8 mx-auto text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
        We have designed our courses with the most demanding professional
        skills. The knowledge, experience, and expertise gained through the
        program will ensure your desired job in the global market.
        <br />
        From the list below you can enroll to any online or offline courses at
        any time.
      </p>

      {/* Tabs */}
      <div className="flex justify-center border-b border-gray-200 mb-6 flex-wrap gap-2">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            onClick={() => setActiveTab(idx)}
            className={`bg-none border-none font-bold text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-4 cursor-pointer transition-colors
              ${
                activeTab === idx
                  ? "text-red-600 border-b-4 border-red-600"
                  : "text-gray-800"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Courses with Arrows */}
      <div className="flex items-center relative">
        <button
          onClick={handlePrev}
          className={`border-2 cursor-pointer border-red-600 rounded-full w-8 sm:w-10 h-8 sm:h-10 bg-white text-red-600 flex items-center justify-center mr-2 sm:mr-4 hover:bg-red-600 hover:text-white transition disabled:opacity-50`}
          disabled={startIndex === 0}
        >
          <FaArrowLeft />
        </button>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 justify-items-center w-full">
          {filteredCourses
            .slice(startIndex, startIndex + 3)
            .map((course, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-[300px] sm:max-w-[340px] md:max-w-[400px] border border-gray-200 flex flex-col h-auto sm:h-[220px] md:h-[380px]"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 sm:h-48 md:h-48 object-cover"
                />
                <div className="p-3 sm:p-4 flex flex-col flex-1">
                  <span className="text-[#ff7e31] cursor-pointer font-bold text-sm sm:text-sm">
                    {course.category}
                  </span>
                  <h3 className="font-bold text-base sm:text-lg my-1 sm:my-2">
                    {course.title}
                  </h3>
                  <div className="flex gap-[2px] items-center mb-2 text-xs sm:text-sm">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <span className="text-gray-900 font-bold mr-2">
                      {course.reviews} Review
                    </span>
                    <span className="text-gray-500 ml-2">
                      {course.students} Student
                    </span>
                  </div>

                  {/* Fee + Button */}
                  <div className="flex justify-between items-center mt-auto">
                    <span className="font-bold text-[14px] sm:text-[15px]">
                      Course Fee {course.fee}
                    </span>
                    <button className="border border-red-600 text-red-600 bg-white rounded-md px-2 sm:px-3 py-1 font-bold cursor-pointer hover:bg-[#ff7e31] hover:text-white transition text-xs sm:text-sm">
                      Click for discount
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <button
          onClick={handleNext}
          className={`border-2 cursor-pointer border-red-600 rounded-full w-8 sm:w-10 h-8 sm:h-10 bg-white text-red-600 flex items-center justify-center ml-2 sm:ml-4 hover:bg-red-600 hover:text-white transition disabled:opacity-50`}
          disabled={startIndex + 3 >= filteredCourses.length}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default PopularCourse;
