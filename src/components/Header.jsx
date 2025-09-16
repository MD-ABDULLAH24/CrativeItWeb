import React, { useState } from "react";
import { CiMail } from "react-icons/ci";

import { MdEmail, MdLocalPhone } from "react-icons/md";

const Header = () => {
  const [activeLang, setActiveLang] = useState("BN");

  return (
    <div className="bg-red-600 hidden md:block text-white text-sm">
      <div className="max-w-screen-xl container mx-auto flex justify-between items-center px-4 py-1.5">
        {/* Left side: Phone & Email */}
        <div className="flex space-x-6">
          <a
            href="tel:01777308777"
            className="font-medium text-[18px] flex items-center gap-4"
          >
            <MdLocalPhone />
            01777308777
          </a>
          <a
            href="mailto:info@creativeitinstitute.com"
            className="font-medium text-[18px] flex items-center gap-4"
          >
            <MdEmail />
            info@creativeitinstitute.com
          </a>
        </div>

        {/* Right side: Language Toggle Button */}
        <div className="flex space-x-2 py-1 px-1.5 rounded-2xl  bg-white">
          <button
            onClick={() => setActiveLang("BN")}
            className={`px-1 py-1 rounded font-bold text-[12px] transition cursor-pointer ${
              activeLang === "BN"
                ? "bg-red-700 text-white"
                : "bg-white text-red-600 "
            }`}
          >
            BN
          </button>
          <button
            onClick={() => setActiveLang("EN")}
            className={`px-2 py-1 rounded font-bold text-[12px] transition cursor-pointer ${
              activeLang === "EN"
                ? "bg-red-700 text-white"
                : "bg-white text-red-600 "
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
