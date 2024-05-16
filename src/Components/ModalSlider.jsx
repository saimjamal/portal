import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { RiEdit2Fill } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const SlidButton = ({ next }) => {
  const slide = useSwiper();

  if (next)
    return (
      <button
        onClick={() => slide.slideNext()}
        className="h-full flex justify-start items-center w-7 absolute top-0 right-0 z-50 bg-white-gradient-right"
      >
        <IoIosArrowForward className="-ml-8 text-[2rem]" />
      </button>
    );

  return (
    <button
      onClick={() => slide.slidePrev()}
      className="h-full flex justify-end items-center w-7 absolute top-0 left-0 z-50 bg-white-gradient"
    >
      <IoIosArrowBack className="-mr-6 text-[2rem]" />
    </button>
  );
};

export default function ModalSlider() {
  return (
    <div className="h-[300px]">
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        className="mySwiper relative h-full"
      >
        <SlidButton next={true} />
        <SlidButton next={false} />
        <SwiperSlide className="flex flex-col h- gap-9">
          <div>
            <img src="/house.jpg" className="w-full h-full rounded-lg" />
            <div className="flex gap-3 items-center">
              <span>Annotate </span>
              <RiEdit2Fill className="text-secondary-500" />
            </div>
          </div>
          <div>
            <img src="/house.jpg" className="w-full h-full rounded-lg" />
            <div className="flex gap-3 items-center">
              <span>Annotate </span>
              <RiEdit2Fill className="text-secondary-500" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col h- gap-9">
          <div>
            <img src="/house.jpg" className="w-full h-full rounded-lg" />
            <div className="flex gap-3 items-center">
              <span>Annotate </span>
              <RiEdit2Fill className="text-secondary-500" />
            </div>
          </div>
          <div>
            <img src="/house.jpg" className="w-full h-full rounded-lg" />
            <div className="flex gap-3 items-center">
              <span>Annotate </span>
              <RiEdit2Fill className="text-secondary-500" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col h- gap-9">
          <div>
            <img src="/house.jpg" className="w-full h-full rounded-lg" />
            <div className="flex gap-3 items-center">
              <span>Annotate </span>
              <RiEdit2Fill className="text-secondary-500" />
            </div>
          </div>
          <div>
            <img src="/house.jpg" className="w-full h-full rounded-lg" />
            <div className="flex gap-3 items-center">
              <span>Annotate </span>
              <RiEdit2Fill className="text-secondary-500" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col h- gap-9">
          <div>
            <img src="/house.jpg" className="w-full h-full rounded-lg" />
            <div className="flex gap-3 items-center">
              <span>Annotate </span>
              <RiEdit2Fill className="text-secondary-500" />
            </div>
          </div>
          <div>
            <img src="/house.jpg" className="w-full h-full rounded-lg" />
            <div className="flex gap-3 items-center">
              <span>Annotate </span>
              <RiEdit2Fill className="text-secondary-500" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col h- gap-9">
          <div>
            <img src="/house.jpg" className="w-full h-full rounded-lg" />
            <div className="flex gap-3 items-center">
              <span>Annotate </span>
              <RiEdit2Fill className="text-secondary-500" />
            </div>
          </div>
          <div>
            <img src="/house.jpg" className="w-full h-full rounded-lg" />
            <div className="flex gap-3 items-center">
              <span>Annotate </span>
              <RiEdit2Fill className="text-secondary-500" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col h- gap-9">
          <div>
            <img src="/house.jpg" className="w-full h-full rounded-lg" />
            <div className="flex gap-3 items-center">
              <span>Annotate </span>
              <RiEdit2Fill className="text-secondary-500" />
            </div>
          </div>
          <div>
            <img src="/house.jpg" className="w-full h-full rounded-lg" />
            <div className="flex gap-3 items-center">
              <span>Annotate </span>
              <RiEdit2Fill className="text-secondary-500" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col h- gap-9">
          <div>
            <img src="/house.jpg" className="w-full h-full rounded-lg" />
            <div className="flex gap-3 items-center">
              <span>Annotate </span>
              <RiEdit2Fill className="text-secondary-500" />
            </div>
          </div>
          <div>
            <img src="/house.jpg" className="w-full h-full rounded-lg" />
            <div className="flex gap-3 items-center">
              <span>Annotate </span>
              <RiEdit2Fill className="text-secondary-500" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col h- gap-9">
          <div>
            <img src="/house.jpg" className="w-full h-full rounded-lg" />
            <div className="flex gap-3 items-center">
              <span>Annotate </span>
              <RiEdit2Fill className="text-secondary-500" />
            </div>
          </div>
          <div>
            <img src="/house.jpg" className="w-full h-full rounded-lg" />
            <div className="flex gap-3 items-center">
              <span>Annotate </span>
              <RiEdit2Fill className="text-secondary-500" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col h- gap-9">
          <div>
            <img src="/house.jpg" className="w-full h-full rounded-lg" />
            <div className="flex gap-3 items-center">
              <span>Annotate </span>
              <RiEdit2Fill className="text-secondary-500" />
            </div>
          </div>
          <div>
            <img src="/house.jpg" className="w-full h-full rounded-lg" />
            <div className="flex gap-3 items-center">
              <span>Annotate </span>
              <RiEdit2Fill className="text-secondary-500" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col h- gap-9">
          <div>
            <img src="/house.jpg" className="w-full h-full rounded-lg" />
            <div className="flex gap-3 items-center">
              <span>Annotate </span>
              <RiEdit2Fill className="text-secondary-500" />
            </div>
          </div>
          <div>
            <img src="/house.jpg" className="w-full h-full rounded-lg" />
            <div className="flex gap-3 items-center">
              <span>Annotate </span>
              <RiEdit2Fill className="text-secondary-500" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
