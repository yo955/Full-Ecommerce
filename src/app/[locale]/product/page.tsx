import PathLinks from "@/components/common/ui/PathLinks";
import ProductImgs from "./ProductImgs";
import ProductInfo from "./ProductInfo";
// import CustomSwiper from "@/components/common/Swiper/Swiper";

const ProductPage = () => {
  return (
    <div className="my-12 mx-auto lg:w-[80%] md:w-[95%] sm:w-[100%]">
      <PathLinks titles={["product"]} />
      <div className="top-section flex  custom-mid:flex-col justify-between gap-14">
        <ProductImgs />
        <ProductInfo />
      </div>
      <div>
        {/* <CustomSwiper data={["Related Item"]} Card={"symbol"}/> */}
      </div>
    </div>
  );
};

export default ProductPage;
