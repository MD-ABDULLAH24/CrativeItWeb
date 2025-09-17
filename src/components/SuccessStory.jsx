import React from "react";
import { FaPlay } from "react-icons/fa";

import digital from "../assets/successImg/digitalMarketing.jpg";
import interior from "../assets/successImg/interiorDesign.jpg";
import animation from "../assets/successImg/3Danimation.jpg";
import mernStack from "../assets/successImg/mernstack.jpg";

const stories = [
  {
    image: digital,
  },
  {
    image: interior,
  },
  {
    image: animation,
  },
  {
    image: mernStack,
  },
];

const SuccessStory = () => {
  return (
    <div className="py-12 px-3 md:px-0">
      <h2 className="text-center font-bold text-4xl mb-2">Success Stories</h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        The presence of our students in the ever expanding IT industry motivates
        us, drives us to guide more people towards a sustainable future.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  max-w-5xl mx-auto mb-8">
        {stories.map((story, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl overflow-hidden shadow-lg bg-white"
          >
            <img
              src={story.image}
              alt={story.name}
              className="w-full h-[150px] md:h-[290px] object-cover"
            />
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white cursor-pointer bg-opacity-80 rounded-full p-2 shadow-lg">
                <FaPlay className="text-red-600 text-xl" />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-red-600 cursor-pointer text-white font-bold px-8 py-2 rounded-lg hover:bg-red-700 transition">
          See More
        </button>
      </div>
    </div>
  );
};

export default SuccessStory;
