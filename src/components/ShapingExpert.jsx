import React from "react";
import expertImg from "../assets/shaping.jpg"; // Update with your actual image path

const stats = [
  { value: "90000+", label: "Successful Students" },
  { value: "34000+", label: "Expert Freelancers" },
  { value: "42000+", label: "Skilled Job Holders" },
  { value: "600+", label: "Industry Expert" },
  { value: "89%", label: "Success Ratio" },
  { value: "3000+", label: "Companies" },
];

const ShapingExpert = () => {
  return (
    <div className="section-container mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="flex-1">
          <div className="text-red-600 font-semibold mb-2 text-lg">
            16 Years of Excellence
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Shaping World-Class IT Experts
          </h1>
          <p className="text-gray-700 mb-8">
            Creative IT has been working with a vision to create IT experts for the past 16 years.
            In a fast pacing world, where every sector relies on technology, you need to develop IT skills to secure a better future. With the utmost dedication, we have been able to make more than 90,000 IT experts who are currently working in different sectors.
          </p>
          <div className="flex gap-4 mb-8">
            <button className="bg-red-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-red-700 transition">
              Browse Course
            </button>
            <button className="bg-red-500 text-white font-bold px-8 py-3 rounded-lg hover:bg-red-700 transition">
              Learn More
            </button>
          </div>
        </div>
        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={expertImg}
            alt="Shaping IT Experts"
            className="rounded-2xl object-cover max-h-[320px] w-full"
          />
        </div>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-12">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-gray-200 cursor-pointer rounded-2xl shadow p-6 flex flex-col items-center"
          >
            <div className="text-red-600 font-bold text-2xl md:text-3xl mb-1">{stat.value}</div>
            <div className="text-gray-900 font-semibold text-center">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShapingExpert;