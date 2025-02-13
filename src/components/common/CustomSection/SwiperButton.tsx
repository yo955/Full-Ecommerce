import CustomSwiper from "../Swiper/Swiper";
import CustomButton from "../ui/Button";
import useGetProducts from "@/hooks/useGetProducts";
import ProductItem from "@/components/common/products/Product";

// import Products from "./products/page";

const SwiperButton = () => {
  const { data: products } = useGetProducts();
  return (
    <div className="">
      {products && <CustomSwiper data={products} Card={ProductItem} />}
      <CustomButton className=" !text-base !my-12 !w-[234px]  !h-[56px]  !border !mx-auto !flex !justify-center !items-center">
        View All Products
      </CustomButton>
    </div>
  );
};

export default SwiperButton;
