import React from "react";
import { FaStar } from "react-icons/fa";

// Dummy images, replace with your actual assets
import graphic from "../assets/popular/graphics.jpg";
import motion from "../assets/popular/motion.jpg";
import uxui from "../assets/popular/uxui.jpg";
import mern from "../assets/popular/mern.jpg";
import kotlin from "../assets/popular/kotlin.jpg";
import django from "../assets/popular/backend.jpg";
import digital from "../assets/popular/dm.jpg";
import affiliate from "../assets/popular/affiliate.jpg";
import adsense from "../assets/popular/ad.jpg";


const courseData = [
  {
    category: "Graphic & Multimedia",
    courses: [
      {
        image: graphic,
        title: "Professional Graphic Design",
        reviews: "14,000",
        students: "6,500",
        fee: "50,000 BDT",
      },
      {
        image: motion,
        title: "Motion Graphics",
        reviews: "4,200",
        students: "5,200",
        fee: "50,000 BDT",
      },
      {
        image: uxui,
        title: "UX/UI Design",
        reviews: "2,900",
        students: "3,500",
        fee: "50,000 BDT",
      },
    ],
  },
  {
    category: "Web & Software",
    courses: [
      {
        image: mern,
        title: "MERN Stack Development",
        reviews: "680",
        students: "850",
        fee: "95,000 BDT",
      },
      {
        image: kotlin,
        title: "App Development With Kotlin",
        reviews: "1,220",
        students: "2,400",
        fee: "50,000 BDT",
      },
      {
        image: django,
        title: "Python Django",
        reviews: "256",
        students: "320",
        fee: "50,000 BDT",
      },
    ],
  },
  {
    category: "Digital Marketing",
    courses: [
      {
        image: digital,
        title: "Digital Marketing Course",
        reviews: "6,800",
        students: "8,500",
        fee: "50,000 BDT",
      },
      {
        image: affiliate,
        title: "Affiliate Marketing",
        reviews: "168",
        students: "210",
        fee: "25,000 BDT",
      },
      {
        image: adsense,
        title: "Google AdSense",
        reviews: "170",
        students: "120",
        fee: "20,000 BDT",
      },
    ],
  },
];

const AllCourse = () => {
  return (
    <div className="py-12 px-2 section-container">
      {courseData.map((section, idx) => (
        <div key={idx} className="mb-10">
          <h3 className="font-bold text-xl mb-4">{section.category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {section.courses.map((course, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4 flex flex-col flex-1">
                  <span className="text-[#ff7e31] font-bold text-xs mb-1">
                    All Course
                  </span>
                  <h4 className="font-bold text-base my-1">
                    {course.title}
                  </h4>
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
                  <div className="flex justify-between pt-4 items-center mt-auto">
                    <span className="font-bold text-[15px]">
                      Course Fee {course.fee}
                    </span>
                    <button className="border border-red-600 text-red-600 bg-white rounded-md px-3 py-1 font-bold cursor-pointer hover:bg-[#ff7e31] hover:text-white transition text-xs">
                      Click for discount
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-6">
        <button className="bg-red-600 text-white font-bold px-8 py-2 rounded-lg hover:bg-red-700 transition">
          All Course
        </button>
      </div>
    </div>
  );
};

export default AllCourse;