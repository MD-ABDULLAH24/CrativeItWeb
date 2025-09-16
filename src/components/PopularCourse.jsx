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

function PopularCourse() {
  const [startIndex, setStartIndex] = useState(0);

  // Arrow for prev
  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? coursesData.length - 1 : prev - 1));
  };

  // Arrow for next
  const handleNext = () => {
    setStartIndex((prev) => (prev === coursesData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-gray-100 section-container rounded-[32px] p-6 sm:p-8 mx-4 sm:mx-8 my-8">
      <h2 className="text-center font-bold text-3xl sm:text-4xl mb-4">
        Popular Courses
      </h2>
      <p className="text-center max-w-[660px] mx-auto text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
        We have designed our courses with the most demanding professional
        skills. Enroll to any online or offline course at any time.
      </p>

      {/* Courses Slider */}
      <div className="flex items-center justify-center gap-4">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="border-2 border-red-600 rounded-full w-10 h-10 bg-white text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition"
        >
          <FaArrowLeft />
        </button>

        {/* Card Display */}
        <div className="w-full sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          {coursesData.map((course, idx) => {
            // Mobile: Only show current startIndex
            if (window.innerWidth < 640 && idx !== startIndex) return null;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-[380px] sm:max-w-[340px] md:max-w-[400px] border border-gray-200 flex flex-col h-[420px] sm:h-[220px] md:h-[380px]"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 sm:h-48 md:h-48 object-cover"
                />
                <div className="p-3 sm:p-4 flex flex-col flex-1">
                  <span className="text-[#ff7e31] font-bold text-sm sm:text-sm">
                    {course.category}
                  </span>
                  <h3 className="font-bold text-base sm:text-lg my-1 sm:my-2">
                    {course.title}
                  </h3>
                  <div className="flex gap-[2px] items-center mb-2 text-xs sm:text-sm">
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
                  <div className="md:flex  justify-between items-center mt-5">
                    <span className="font-bold  text-[14px] sm:text-[15px]">
                      Course Fee {course.fee}
                    </span>
                    <button className="border mt-2 md:mt-0 border-red-600 text-red-600 bg-white rounded-md px-3 py-1 font-bold cursor-pointer hover:bg-[#ff7e31] hover:text-white transition text-xs sm:text-sm">
                      Click for discount
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="border-2 border-red-600 rounded-full w-10 h-10 bg-white text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default PopularCourse;
