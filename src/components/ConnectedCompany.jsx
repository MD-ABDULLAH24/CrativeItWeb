import React, { useState } from "react";

// Dummy images, replace with your actual assets
import ict from "../assets/connectedCompany/1_partner_logo.png";
import nLogo from "../assets/connectedCompany/3_partner_logo.png";
import university from "../assets/connectedCompany/4_partner_logo.png";
import bepza from "../assets/connectedCompany/5_partner_logo.png";
import women from "../assets/connectedCompany/6_partner_logo.png";

import krishi from "../assets/connectedCompany/7_partner_logo.png";
import du from "../assets/connectedCompany/8_partner_logo.png";
import green from "../assets/connectedCompany/9_partner_logo.png";

import oxford from "../assets/connectedCompany/10_partner_logo.png";
import nu from "../assets/connectedCompany/11_partner_logo.png";
import eastern from "../assets/connectedCompany/12_partner_logo.png";
import city from "../assets/connectedCompany/13_partner_logo.png";

// Categories
const workingWith = [ict, nLogo, university, bepza, women,ict, nLogo, oxford, nu, eastern,  eastern, city, university, bepza, women,ict, nLogo, university, bepza, ];
const membersOf = [krishi, du, green, oxford, nu, eastern, city ,nu, eastern, city];
const ourConcerns = [nu, eastern, city];

// Merge all logos for initial "Working With"
const allLogos = [...workingWith, ...membersOf, ...ourConcerns];

const ConnectedCompany = () => {
  const [activeTab, setActiveTab] = useState("Working With");

  // Decide which logos to show
  let logosToShow = [];
  if (activeTab === "Working With") logosToShow = allLogos;
  if (activeTab === "Members Of") logosToShow = membersOf;
  if (activeTab === "Our Concerns") logosToShow = ourConcerns;

  return (
    <div className="section-container mx-auto py-12 px-4">
      <h2 className="text-center font-bold text-3xl md:text-4xl mb-8">
        3000+ Companies Are <br /> Connected to Us
      </h2>

      {/* Tabs with equal width */}
      <div className="flex justify-center mb-8 flex-wrap gap-4">
        {["Working With", "Members Of", "Our Concerns"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 text-center font-semibold text-[14px] md:text-lg py-2 border-b-2 ${
              activeTab === tab
                ? "border-red-600 text-red-600"
                : "border-transparent text-gray-600 hover:text-red-600"
            } transition-colors`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Logos Grid with fixed height for each item */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center min-h-[300px]">
        {logosToShow.map((img, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center h-15 w-full"
          >
            <img
              src={img}
              alt={`${activeTab} logo`}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectedCompany;
