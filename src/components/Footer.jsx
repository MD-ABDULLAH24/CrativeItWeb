import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3a2e2a] text-[#e5e5e5] pt-12 pb-8">
      <div className="section-container  mx-auto px-4">
        {/* Top Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Admission Is Going on
          </h2>
          <p className="mb-6 text-[#bdbdbd]">
            Enroll to any online or offline course now, take one step ahead towards a competent career
          </p>
          <div className="flex justify-center gap-4">
            <button className="border border-white text-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-[#3a2e2a] transition">
              Join Free Seminar
            </button>
            <button className="border border-white text-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-[#3a2e2a] transition">
              Browse Course
            </button>
          </div>
        </div>
        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:ml-25 gap-8 mt-12">
          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-white">Contact</h4>
            <div className="flex items-start gap-2 mb-2">
              <FaMapMarkerAlt className="mt-1 text-[#e5e5e5]" />
              <span>
                Head Office:<br />
                Momtaz Plaza (4th Floor)<br />
                House # 07 , Road # 04<br />
                Dhanmondi, Dhaka- 1205
              </span>
            </div>
            <div className="flex items-start gap-2 mb-2">
              <FaPhoneAlt className="mt-1 text-[#e5e5e5]" />
              <span>
                +880 1777308777<br />
                +880 1624660000<br />
                +880 1624888444<br />
                +880 1966177777<br />
                +880 1625555444<br />
                +880 1990779900
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[#e5e5e5]" />
              <span>info@creativeitinstitute.com</span>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>Free Seminar Schedule</li>
              <li>Mentors</li>
              <li>Success Story</li>
              <li>Our Gallery</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          {/* Popular Courses */}
          <div>
            <h4 className="font-bold mb-4 text-white">Popular Courses</h4>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>Professional Graphic Design</li>
              <li>Digital Marketing</li>
              <li>Mern Stack Development</li>
              <li>Motion Graphics</li>
              <li>Professional 3D Animation</li>
              <li>Content Writing</li>
            </ul>
          </div>
          {/* Others */}
          <div>
            <h4 className="font-bold mb-4 text-white">Others</h4>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Our Facility</li>
              <li>Our Achievement</li>
              <li>Career Placement</li>
              <li>Freelancing</li>
              <li>Students Feedback</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;