"use client";
import SectionLayout from "@/components/common/CustomSection";
import SwiperButton from "@/components/common/Swiper/SwiperButton";
import CustomSwiper from "@/components/common/Swiper/Swiper";
import CategoryCard from "@/components/common/Category/CategoryCard";
import useGetCategory from "@/hooks/Product/useGetCategories";
import Advertise from "@/components/Home/advertise/Advertise";
import Loading from "@/loading/Loading";
import Music from "@/components/Home/musicAdvertise/Music";
import Features from "@/components/Home/Features/Features";
import Services from "@/components/Home/Services/Services";
import UpBtn from "@/components/common/ui/UpBtn";
// import BestSellingProducts from "@/components/common/BestSelling/BestSellingProducts";


const Home = () => {
  const { data: Categories, isLoading } = useGetCategory();
  return (
    <article>
      <div className="home-section">
        <Advertise />
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
    </article>
  );
};

export default Home;
