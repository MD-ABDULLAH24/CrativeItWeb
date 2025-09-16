import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBagShopping, FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import logo_2 from "../assets/logo_2.png";
import { IoBookOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const NavItem = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/success", label: "Success Story" },
  { path: "/freelancing", label: "Freelancing" },
  { path: "/contact", label: "Contact" },
];

const NavItems = ({ toggleMenu }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-6 gap-6">
      {NavItem.map((item, index) => (
        <li key={index} onClick={toggleMenu}>
          <NavLink
            to={item.path}
            className="text-[#1f1e1e] text-[18px]  font-bold"
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMenuScroll, setIsMenuScroll] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsMenuScroll(true);
      } else {
        setIsMenuScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed ${
        isMenuScroll ? "top-0" : "top-[42px]"
      }  left-0 right-0 z-10 transition-all duration-500 ease-in-out   ${
        isMenuScroll ? "bg-white shadow-md" : "bg-transparent text-white"
      }`}
    >
      <nav className="max-w-screen-xl container mx-auto flex justify-between items-center py-1 md:py-6 px-4">
        {/* logo  */}
        <Link to="/" className=" hidden md:block">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="md:hidden absolute  left-[55%] transform -translate-x-1/2">
          <Link to="/" className="">
            <img src={logo_2} alt="Logo Small" className="w-[90%]" />
          </Link>
        </div>

        {/* mobile menu  */}
        <div
          onClick={toggleMenu}
          className="md:hidden text-xl cursor-pointer hover:text-primary"
        >
          {menuOpen ? null : <RiMenu2Fill className="font-bold text-black text-[25px]" />}
        </div>

        {/* desktop menu item */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-end mr-8 ">
          <NavItems />
        </div>

        {/* Mobile Menu Items  */}

        <div
          className={`fixed top-0 left-0 w-[90%] h-[80%] bg-[#faf0f0]  flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div
            className="cursor-pointer absolute top-15 right-5 text-xl"
            onClick={toggleMenu}
          >
            <RxCross1 className="text-black text-2xl" />
            
          </div>
          <NavItems toggleMenu={toggleMenu} />
          <button className="flex items-center cursor-pointer gap-2 text-[18px] font-semibold  bg-red-600 rounded-lg bg-gradient-to-r from-[#ff0000] to-[#f14e4e] px-[19px] py-[13px]">
            <span>
              <IoBookOutline />
            </span>
            Browse Course
          </button>
        </div>

        {/*  Button */}
        <div className="hidden md:block cursor-pointer relative">
          <button className="flex items-center gap-2 text-[18px] font-semibold  bg-red-600 rounded-lg bg-gradient-to-r from-[#ff0000] to-[#f14e4e] px-[19px] py-[13px]">
            <span>
              <IoBookOutline />
            </span>
            Browse Course
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
