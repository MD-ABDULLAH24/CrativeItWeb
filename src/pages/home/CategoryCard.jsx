import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import graphics from "../../assets/categoryImg/graphics.png";
import web from "../../assets/categoryImg/web.png";
import digital_marketing from "../../assets/categoryImg/digital.png";
import animation from "../../assets/categoryImg/3d.png";
import film from "../../assets/categoryImg/ve.png";
import english from "../../assets/categoryImg/lg.png";
import diploma from "../../assets/categoryImg/diploma.png";
import aws from "../../assets/categoryImg/aws.png";
import networking from "../../assets/categoryImg/networking.png";

const cards = [
  { img: graphics, title: "Graphic & Multimedia" },
  { img: web, title: "Web & Software" },
  { img: digital_marketing, title: "Digital Marketing" },
  { img: animation, title: "3D Animation" },
  { img: film, title: "Film & Media" },
  { img: english, title: "English Language" },
  { img: diploma, title: "1 Year Diploma Programs" },
  { img: aws, title: "Cloud Computing" },
  { img: networking, title: "Networking & Cybersecurity" },
];

const CategoryCard = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="section-container px-3  relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="flex cursor-pointer mb-20 flex-col items-center px-2 min-h-[140px] justify-center mt-4  rounded-lg shadow bg-white">
              <img src={card.img} alt="" className="w-12 h-12 mb-2" />
              <h1 className="text-center text-lg font-bold">{card.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryCard;
