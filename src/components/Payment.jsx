import React from "react";
import bkash from "../assets/Payment/bkash.png";
import rocket from "../assets/Payment/rocket.png"
import sslcommerz from "../assets/Payment/sslcommerz.jpg"
import logo from "../assets/logo_2.png"
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const merchants = [
  {
    logo: bkash,
    name: "bKash",
    numbers: ["01990779766", "01309014614"],
  },
  
  {
    logo: rocket,
    name: "Rocket",
    numbers: ["013090146143"],
  },
  {
    logo: sslcommerz,
    name: "SSLCOMMERZ",
    numbers: [],
  },
];

const Payment = () => {
  return (
    <div className="bg-white section-container pt-8 pb-2">
      <h3 className="text-center font-semibold text-lg mb-8">Our Payment Merchant</h3>
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {merchants.map((m, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow p-6 flex flex-col items-center min-w-[200px]"
          >
            <img src={m.logo} alt={m.name} className="h-10 mb-2" />
            <div className="font-bold mb-1">{m.name}</div>
            {m.numbers.map((num, i) => (
              <div key={i} className="text-gray-700">{num}</div>
            ))}
          </div>
        ))}
      </div>
      <hr className="my-6 border-gray-200" />
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4">
        {/* Left */}
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <img src={logo} alt="Creative IT Institute" className="h-8" />
         
        </div>
        {/* Center */}
        <div className="text-xs text-gray-600 text-center md:text-left mb-2 md:mb-0">
          Copyright © 2025 Creative IT Institute. All right reserved | <a href="#" className="text-red-600">Sitemap</a>
          <br />
          e-TIN: 570007703094, TL: TRAD/DSCC/228155/2019
        </div>
        {/* Right */}
        <div className="flex gap-4">
          <a href="#" className="text-gray-700 hover:text-red-600"><FaFacebookF size={22} /></a>
          <a href="#" className="text-gray-700 hover:text-red-600"><FaLinkedinIn size={22} /></a>
          <a href="#" className="text-gray-700 hover:text-red-600"><FaInstagram size={22} /></a>
          <a href="#" className="text-gray-700 hover:text-red-600"><FaYoutube size={22} /></a>
        </div>
      </div>
    </div>
  );
};

export default Payment;