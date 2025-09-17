import React from "react";
import specialityImg from "../assets/speciality.png"; 

const OurSpeciality = () => {
  return (
    <div className="bg-[#f7f8fc] rounded-[32px] p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 section-container mx-auto my-8">
      {/* Left Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={specialityImg}
          alt="Project-based class"
          className="max-h-[340px] w-full rounded-2xl object-cover"
        />
      </div>
      {/* Right Content */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          Providing project-based classes<br />is our specialty
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          We believe in skills gained through practical projects. A great number of people struggle to start their career in the tech field for only having conceptual knowledge. Creative IT makes sure to provide hands-on training to prepare you for job markets. Our course module contains projects that are designed to track your progress. During the course, you will be able to make a portfolio yourself to showcase your practical skills to the potential employers.
        </p>
      </div>
    </div>
  );
};

export default OurSpeciality;