"use client";
import Advertise from "./advertise/Advertise";
import SectionLayout from "@/components/common/CustomSection";
import SwiperButton from "@/components/common/Swiper/SwiperButton";
import CustomSwiper from "@/components/common/Swiper/Swiper";
import CategoryCard from "@/components/common/Category/CategoryCard";
import useGetCategory from "@/hooks/useGetCategories";
import BestSellingProducts from "@/components/common/BestSelling/BestSellingProducts";
import Features from "./Features/Features";
import Services from "./Services/Services";
import Loading from "@/loading/Loading";
import UpBtn from "../common/ui/UpBtn";
import Music from "./musicAdvertise/Music";

const HomeSection = () => {
  const {data: Categories, isLoading} = useGetCategory();
  return (
    <article>
      <div className="home-section">
        <Advertise/>
      </div>
      <SectionLayout>
        <SwiperButton/>
      </SectionLayout>
      <SectionLayout title="Browse By Category" para="Categories">
        {isLoading ? (
          <Loading/>
        ) : (
          Categories && <CustomSwiper data={Categories} Card={CategoryCard}/>
        )}
      </SectionLayout>
      {/*<SectionLayout title="Best Selling Products" para="This Month">*/}
      {/*  <BestSellingProducts/>*/}
      {/*</SectionLayout>*/}
      <Music/>
      <SectionLayout title="Featured" para="New Arrival">
        <Features/>
      </SectionLayout>
      <Services/>
      <UpBtn/>
    </article>
  );
};

export default HomeSection;
