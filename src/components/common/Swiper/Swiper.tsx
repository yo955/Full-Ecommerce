"use client";
import { useRef, useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper"; // Import SwiperCore type
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@/styles/swiper/CustomSwiper.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useGetProducts from "@/hooks/useGetProducts";
import ProductItem from "../products/Product";

const CustomSwiper = () => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null); // Use SwiperCore type
  const { data: products } = useGetProducts();

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.navigation.prevEl = prevRef.current;
      swiperInstance.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  useEffect(() => {
    if (swiperInstance && products) {
      swiperInstance.update();
    }
  }, [products, swiperInstance]);

  return (
    <div className={styles.swiperContainer}>
      {/* Custom Navigation Arrows */}
      <div className={styles.customNavigation}>
        <div ref={prevRef} className={styles.customSwiperButton}>
          <ChevronLeft size={24} />
        </div>
        <div ref={nextRef} className={styles.customSwiperButton}>
          <ChevronRight size={24} />
        </div>
      </div>

      {/* Swiper Component */}
      <Swiper
        key={products ? products.length : 0}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        loop
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        breakpoints={{
          320: { slidesPerView: 1.5, spaceBetween: 20 },
          480: { slidesPerView: 3.5, spaceBetween: 30 },
          640: { slidesPerView: 4.5, spaceBetween: 50 },
        }}
        className={styles.swiper}
      >
        {products?.map((product) => (
          <SwiperSlide key={product.ProductId}>
            <ProductItem {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;