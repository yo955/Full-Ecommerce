"use client";
import SectionLayout from "@/components/common/CustomSection";
import SwiperButton from "@/components/common/Swiper/SwiperButton";
import CustomSwiper from "@/components/common/Swiper/Swiper";
import CategoryCard from "@/components/common/Category/CategoryCard";
import useGetCategory from "@/hooks/Product/useGetCategories";
import Loading from "@/loading/Loading";
import Music from "@/components/pages/Home/musicAdvertise/Music";
import Features from "@/components/pages/Home/Features/Features";
import Services from "@/components/pages/Home/Services/Services";
import UpBtn from "@/components/common/UpBtn";
import HomeSwiper from "@/components/pages/Home/Swiper";
// import BestSellingProducts from "@/components/common/BestSelling/BestSellingProducts";


const Home = () => {
  const { data: Categories, isLoading } = useGetCategory();
  return (
    // Swiper component for the home page
    <div className="w-full">
      <div className="home-section">
        <HomeSwiper />
      </div>

      <SectionLayout>
        <SwiperButton />
      </SectionLayout>

      <SectionLayout title="Browse By Category" para="Categories">
        {isLoading ? (
          <Loading />
        ) : (
          Categories && <CustomSwiper data={Categories} Card={CategoryCard} />
        )}
      </SectionLayout>

      <Music />
      <SectionLayout title="Featured" para="New Arrival">
        <Features />
      </SectionLayout>
      
      <Services />
      <UpBtn />
    </div>
  );
};

export default Home;
