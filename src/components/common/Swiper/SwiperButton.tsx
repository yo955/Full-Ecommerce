import CustomSwiper from "./Swiper";
import CustomButton from "../ui/Button";
import useGetProducts from "@/hooks/Product/useGetProducts";
import ProductItem from "@/components/common/products/ProductCard";
import Loading from "@/loading/Loading";
import {Link} from "@/i18n/routing";

// import Products from "./products/page";

const SwiperButton = () => {
  const {data: products, isLoading} = useGetProducts();
  if (isLoading) return <Loading/>;
  return (
    <div>
      {products && <CustomSwiper data={products} Card={ProductItem}/>}
      <Link href="/products">
        <CustomButton
          className=" !text-base !my-12 !w-[234px]  !h-[56px]  !border !mx-auto !flex !justify-center !items-center">
          View All Products
        </CustomButton>
      </Link>
    </div>
  );
};

export default SwiperButton;
