import CustomSwiper from "./Swiper";
import useGetProducts from "@/hooks/Product/useGetProducts";
import ProductItem from "@/components/common/products/ProductCard";
import Loading from "@/loading/Loading";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";

const SwiperButton = () => {
  const { data: products, isLoading } = useGetProducts();
  if (isLoading) return <Loading />;
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-8">
      <div className="max-w-screen-xl mx-auto">
        {products && <CustomSwiper data={products} Card={ProductItem} />}
        <Link href="/products">
          <Button className="!text-base !my-12 !w-[234px] !h-[56px] !border !mx-auto !flex !justify-center !items-center">
            View All Products
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SwiperButton;
