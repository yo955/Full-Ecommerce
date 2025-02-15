"use client";
import Sidebar from "./sidebar/Sidebar";
import Advertise from "./advertise/Advertise";
import SectionLayout from "@/components/common/CustomSection";
import SwiperButton from "@/components/common/Swiper/SwiperButton";
import CustomSwiper from "@/components/common/Swiper/Swiper";
import useGetProducts from "@/hooks/useGetProducts";
import ProductItem from "@/components/common/products/Product";

// import Products from "./products/page";

const HomeSection = () => {
  const { data: products } = useGetProducts();

  return (
    <article>
      <div className="home-section">
        <Sidebar />
        <Advertise />
      </div>
      <SectionLayout>
        <SwiperButton />
      </SectionLayout>
      <SectionLayout title="Browse By Category" para="Categories">
        {products && <CustomSwiper data={products} Card={ProductItem} />}
      </SectionLayout>
    </article>
  );
};

export default HomeSection;
