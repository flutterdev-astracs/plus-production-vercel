"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Image from "next/image";

const SliderSection = () => {
  return (
    <>
      <div className="width-container py-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides
          initialSlide={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            540: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}

          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src={`/slider1.webp`} alt="" width={500} height={500} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={`/slider2.webp`} alt="" width={500} height={500} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={`/slider3.webp`} alt="" width={500} height={500} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={`/slider1.webp`} alt="" width={500} height={500} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={`/slider2.webp`} alt="" width={500} height={500} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={`/slider2.webp`} alt="" width={500} height={500} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={`/slider1.webp`} alt="" width={500} height={500} />
          </SwiperSlide>

          <div className="swiper-button-prev ">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40" cy="40" r="40" fill="#431A40" />
              <path
                d="M55 39.9091L25 39.9091M25 39.9091L35.9091 29M25 39.9091L35.9091 50.8182"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="swiper-button-next   ">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="40"
                cy="40"
                r="40"
                transform="matrix(-1 0 0 1 80 0)"
                fill="#431A40"
              />
              <path
                d="M25 39.9091L55 39.9091M55 39.9091L44.0909 29M55 39.9091L44.0909 50.8182"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default SliderSection;
