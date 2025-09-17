import React from "react";
import appImg from "../assets/app.png"; // Update with your actual image path
import playStore from "../assets/play.png"; // Update with your actual Play Store badge image

const CreativeItApp = () => {
  return (
    <div className="bg-white rounded-[32px] shadow-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto my-8">
      {/* Left Content */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Download the<br />
          Creative IT App<br />
          – Learn Anytime,<br />
          Anywhere!
        </h2>
        <p className="text-gray-600 mb-6">
          Get instant access to courses, resources, and updates. Start your journey today!
        </p>
        
          <img
            src={playStore}
            alt="Get the app from Play Store"
            className="h-12"
          />
       
      </div>
      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={appImg}
          alt="Creative IT App Preview"
          className="max-h-[340px] w-auto rounded-2xl bg-pink-100 p-2"
        />
      </div>
    </div>
  );
};

export default CreativeItApp;