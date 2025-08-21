"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

type SimpleSliderProps = {
    children: React.ReactNode;
    spaceBetween?: number;
};

const CategorySlider: React.FC<SimpleSliderProps> = ({
    children,
    spaceBetween = 20,
}) => {
    return (
        <div className="relative">
            {/*  Navigation Buttons */}
            <div className="absolute -top-16 right-0 flex gap-2 z-10">
                <button
                    className="custom-prev w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                    className="custom-next w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <ChevronRight className="w-5 h-5 text-white" />
                </button>
            </div>

            {/* Slider */}
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                spaceBetween={spaceBetween}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1280: {
                        slidesPerView: 5,
                    },
                }}
                className="pb-10"
            >
                {Array.isArray(children)
                    ? children.map((child, index) => (
                        <SwiperSlide className="!w-80 md:!w-58" key={index}>{child}</SwiperSlide>
                    ))
                    : children}
            </Swiper>
        </div>
    );
};

export default CategorySlider;
