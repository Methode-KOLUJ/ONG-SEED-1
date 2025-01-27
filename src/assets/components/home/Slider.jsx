import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom"; // Import du composant Link

const Slider = ({ slides }) => {
  return (
    <div className="w-full max-w-5xl mx-auto top-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="rounded-lg overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[580px] object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/65 flex flex-col justify-center items-center text-white p-6">
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 text-teal-500 dark:text-blue-600 text-center">{slide.title}</h2>
                <p className="sm:text-xl md:text-xl lg:text-2xl xl:text-3xl mb-6 font-semibold text-center">{slide.description}</p>
                <Link
                  to={slide.link} 
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-red-600 dark:hover:bg-red-700 font-extrabold text-white px-5 py-3 rounded-lg transition duration-500 ease-in-out"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
