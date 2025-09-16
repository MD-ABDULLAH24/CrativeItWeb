import React from "react";
import { IoBookOutline } from "react-icons/io5";

const Button = ({ btnText, className }) => {
  return (
    <button className={`flex items-center gap-2 text-[18px] font-semibold rounded-lg px-[19px] py-[13px] bg-red-500 text-white hover:bg-white hover:text-red-400 cursor-pointer transition-transform ${className}`}>
      <IoBookOutline />
      {btnText}
    </button>
  );
};


export default Button;
