"use client";
import { useRef, useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Sass styles
import styles from "@/styles/swiper/CustomSwiper.module.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useGetProducts from "@/hooks/useGetProducts";
import ProductItem from "../products/Product";

const CustomSwiper = () => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const { data: products } = useGetProducts();
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

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
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop
        spaceBetween={50}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        breakpoints={{
          320: { slidesPerView: 1.5, spaceBetween: 20 },
          480: { slidesPerView: 3.5, spaceBetween: 30 },
          640: { slidesPerView: 4.5, spaceBetween: 50 },
        }}
        className={styles.swiper}
      >
        {/* Map over the list of products and wrap each in a SwiperSlide */}
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
