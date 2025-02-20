"use client";
import Sidebar from "./sidebar/Sidebar";
import Advertise from "./advertise/Advertise";
import SectionLayout from "@/components/common/CustomSection";
import SwiperButton from "@/components/common/Swiper/SwiperButton";
import CustomSwiper from "@/components/common/Swiper/Swiper";
import CategoryCard from "@/components/common/Category/CategoryCard";
import useGetCategory from "@/hooks/useGetCategories";
import BestSellingProducts from "@/components/common/BestSelling/BestSellingProducts";
import Music from "@/components/Home/HeadSection/musicAdvertise/Music";
import Features from "./Features/Features";
import Services from "./Services/Services";
import UpBtn from "@/components/common/upBtn/UpBtn";

const HomeSection = () => {
  const { data: Categories } = useGetCategory();
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
        <BestSellingProducts />
      </SectionLayout>
      <Music />
      <SectionLayout title="Featured" para="New Arrival">
        <Features />
      </SectionLayout>
      <Services />

      <UpBtn />
    </article>
  );
};

export default HomeSection;
