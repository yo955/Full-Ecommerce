import ProductItem from "@/components/common/products/ProductCard";
import CustomSwiper from "@/components/common/Swiper/Swiper";
import useGetProducts from "@/hooks/useGetProducts";
import Loading from "@/loading/Loading";

const Advertise = () => {
  const { data: products, isLoading } = useGetProducts();
  return (
    <div className="w-4/5">
      {isLoading ? (
        <Loading />
      ) : (
        products && (
          <CustomSwiper
            data={products}
            Card={ProductItem}
            ShowPagination={true}
          />
        )
      )}
    </div>
  );
};

export default Advertise;
