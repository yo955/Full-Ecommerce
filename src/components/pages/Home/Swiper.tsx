"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

  const mainBath = "/images/banners";
  const bannerImages = [`${mainBath}/01.jpg`, `${mainBath}/02.jpg`, `${mainBath}/03.jpg`];

const HomeSwiper = () => {
  if (!bannerImages || bannerImages.length === 0) return <p className="text-center">لا توجد صور متاحة</p>;

  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{clickable: true}}
        autoplay={{delay: 3000, disableOnInteraction: false}}
        loop
        className="w-full h-full"
      >
        {bannerImages.map((img, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <Image src={img} alt={`Slide ${index + 1}`} fill className="object-cover"/>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        /* تغيير لون النقاط (Pagination) */
        .swiper-pagination-bullet {
          background-color: #ffffff !important; /* Tailwind: yellow-400 */
          opacity: 1 !important;
        }

        .swiper-pagination-bullet-active {
          background-color: #fbbf24 !important; /* Tailwind: yellow-500 */
        }

        /* تغيير لون أزرار التنقل */
        .swiper-button-next,
        .swiper-button-prev {
          color: #ffffff !important; /* Tailwind: yellow-400 */
        }
      `}</style>
    </div>
  );
};

export default HomeSwiper;
