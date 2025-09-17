import React from "react";
import seminarImg from "../assets/seminer.jpg"; 

const FreeSeminer = () => {
  return (
    <div className="bg-[#fff6f3] rounded-[32px] shadow p-6 md:p-10  flex flex-col md:flex-row items-center gap-8 section-container mx-auto my-8">
      {/* Left Content */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Join Our Free Seminars
        </h2>
        <p className="text-gray-600 mb-6">
          Need guidelines to choose a suitable course? Join our free seminars to consult with our experts, they will guide you to pick the course that matches your interest and discuss the career prospects.
        </p>
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-[#ffe6db] rounded-xl px-4 py-3 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-[#222]">17</span>
            <span className="text-sm text-gray-500">Sep , 25</span>
          </div>
          <div className="flex-1 bg-white rounded-xl px-4 py-3 flex items-center justify-between shadow border border-gray-100">
            <div>
              <div className="font-bold text-gray-900">Google Ads & Shopify SEO</div>
              <div className="text-xs text-gray-500">Online , Time: Online 08 : 00 PM</div>
            </div>
            <button className="border border-red-600 text-red-600 rounded-md px-4 py-1 font-bold hover:bg-red-600 hover:text-white transition text-xs">
              Join
            </button>
          </div>
        </div>
        <button className="bg-red-600 cursor-pointer text-white font-bold px-6 py-2 rounded-lg hover:bg-red-700 transition">
          Free Seminar Schedule
        </button>
      </div>
      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={seminarImg}
          alt="Seminar"
          className="max-h-[340px] w-full rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default FreeSeminer;