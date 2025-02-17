"use client";
import Sidebar from "./sidebar/Sidebar";
import Advertise from "./advertise/Advertise";
import SectionLayout from "@/components/common/CustomSection";
import SwiperButton from "@/components/common/Swiper/SwiperButton";
import CustomSwiper from "@/components/common/Swiper/Swiper";
import CategoryCard from "@/components/common/Category/CategoryCard";
import useGetCategory from "@/hooks/useGetCategories";
import ProductCard from "@/components/common/products/ProductCard";
import useGetProducts from "@/hooks/useGetProducts";

const HomeSection = () => {
  const { data: Categories } = useGetCategory();
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
        {Categories && <CustomSwiper data={Categories} Card={CategoryCard} />}
      </SectionLayout>
      <SectionLayout title="Best Selling Products" para="This Month">
        {products && <CustomSwiper data={products} Card={ProductCard} />}
      </SectionLayout>
    </article>
  );
};

export default HomeSection;
