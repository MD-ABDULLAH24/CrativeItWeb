import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Achievement = [
  {
    value: "2000+",
    title: "Students Choose Creative IT",
    desc: "Creative IT has become a trusted training institute for not only Bangladeshi residents but also those living abroad. More than 20,000 passionate learners are working in different markets after completing courses from our institute passionate learners are working in different markets.",
    bg: "bg-[#f8fceb]",
    text: "text-[#222]",
    valueColor: "text-[#222]",
    titleColor: "text-[#222]",
  },
  
  {
    value: "89%",
    title: "Success Ratio",
    desc: "Excelling at work needs hands-on experience. The practical approach towards problems puts our students ahead of any other competitors in global job markets. All the courses are structured considering the job prospects to make you well prepared for a bright career.",
    bg: "bg-[#e9f7ff]",
    text: "text-[#222]",
    valueColor: "text-[#00b3ff]",
    titleColor: "text-[#222]",
  },
  {
    value: "34000+",
    title: "Works As Expert Freelancer",
    desc: "After course completion, a significant number of our students find jobs in multiple sectors. Many of the devoted students start working in the IT domain before completing the courses. Earning dollars from the global marketplace, they become self-reliant and contribute to the progress of our country.",
    bg: "bg-[#f6ffe9]",
    text: "text-[#222]",
    valueColor: "text-[#4cae00]",
    titleColor: "text-[#222]",
  },
  {
    value: "89%",
    title: "Success Ratio",
    desc: "Excelling at work needs hands-on experience. The practical approach towards problems puts our students ahead of any other competitors in global job markets. All the courses are structured considering the job prospects to make you well prepared for a bright career.",
    bg: "bg-[#e9f7ff]",
    text: "text-[#222]",
    valueColor: "text-[#00b3ff]",
    titleColor: "text-[#222]",
  },
  {
    value: "2000+",
    title: "Students Choose Creative IT",
    desc: "Creative IT has become a trusted training institute for not only Bangladeshi residents but also those living abroad. More than 20,000 passionate learners are working in different markets after completing courses from our institute passionate learners are working in different markets.",
    bg: "bg-[#f8fceb]",
    text: "text-[#222]",
    valueColor: "text-[#222]",
    titleColor: "text-[#222]",
  },
  
];

const achievement  = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="flex section-container  items-center justify-center py-8">
      {/* Prev Arrow */}
      <button
        onClick={() => swiperRef && swiperRef.slidePrev()}
        className="border-1 cursor-pointer hidden border-red-600 rounded-full w-10 h-10 bg-white text-red-600 md:flex items-center justify-center hover:bg-red-600 hover:text-white transition mx-2"
      >
        <IoIosArrowBack />
      </button>
      {/* Swiper */}
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 32 },
        }}
        spaceBetween={32}
        onSwiper={setSwiperRef}
        className="w-full max-w-6xl"
      >
        {Achievement.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className={`rounded-[40px] p-8 h-full flex flex-col justify-center ${item.bg} ${item.text} shadow`}>
              <div className={`text-4xl font-bold mb-2 ${item.valueColor}`}>{item.value}</div>
              <div className={`font-semibold text-lg mb-2 ${item.titleColor}`}>{item.title}</div>
              <div className="text-base leading-relaxed">{item.desc}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Next Arrow */}
      <button
        onClick={() => swiperRef && swiperRef.slideNext()}
        className="border-1 hidden cursor-pointer border-red-600 rounded-full w-10 h-10 bg-white text-red-600 md:flex items-center justify-center hover:bg-red-600 hover:text-white transition mx-2"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default achievement;