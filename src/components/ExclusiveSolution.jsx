import React from "react";
import { FaHandHoldingHeart, FaBriefcase, FaPlayCircle } from "react-icons/fa";

const solutions = [
  {
    icon: <FaHandHoldingHeart className="text-purple-500 text-3xl mb-2" />,
    title: "Lifetime Support",
    desc: "The bond between Creative IT and its students is lifelong. We strengthen our bond with you by providing lifelong support that helps you overcome any problem in your career path even after completing their course. The personalized feedback that you receive from us, helps you grow, every day.",
    bg: "bg-[#f9fef3]",
  },
  {
    icon: <FaBriefcase className="text-[#00b3ff] text-3xl mb-2" />,
    title: "Career Placement Support",
    desc: "Our career placement department is ready to help you find a lucrative job. We ensure your resume gets into the hands of the right hiring manager. So far this department has helped more than 42000 students to find jobs in competitive global platforms. Promising a better future, we have successfully raised the job placement rate to 46% in 2024.",
    bg: "bg-[#f9fef3]",
  },
  {
    icon: <FaPlayCircle className="text-[#4cae00] text-3xl mb-2" />,
    title: "Class Videos",
    desc: "No need to worry if you miss a topic in the class. We record most of our classes so that students who miss a session can still get the information they need. They can watch the videos again and again until they understand the topic thoroughly. Our motto is to provide you a flexible learning experience to gradually improve your competence.",
    bg: "bg-[#f9fef3]",
  },
];

const ExclusiveSolution = () => {
  return (
    <div className="py-12 px-2">
      <h2 className="text-center font-bold text-4xl mb-2">
        Exclusive Solutions that Set Us Apart
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Our aim is to make your learning experience the best possible by providing you with additional facilities that will help you to grow without bounds.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
        {solutions.map((sol, idx) => (
          <div
            key={idx}
            className={`rounded-[32px] p-8 shadow ${sol.bg} flex flex-col`}
          >
            {sol.icon}
            <h3 className="font-bold text-xl mb-2">{sol.title}</h3>
            <p className="text-gray-700">{sol.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-red-600 cursor-pointer text-white font-bold px-8 py-2 rounded-lg hover:bg-red-700 transition">
          Our Facility
        </button>
      </div>
    </div>
  );
};

export default ExclusiveSolution;