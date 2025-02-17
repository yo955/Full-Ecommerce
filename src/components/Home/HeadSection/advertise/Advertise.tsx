import ProductItem from "@/components/common/products/ProductCard";
import CustomSwiper from "@/components/common/Swiper/Swiper";
import useGetProducts from "@/hooks/useGetProducts";

const Advertise = () => {
  const { data: products } = useGetProducts();
  return (
    <div className="w-4/5">
      {products && (
        <CustomSwiper
          data={products}
          Card={ProductItem}
          ShowPagination={true}
        />
      )}
    </div>
  );
};

export default Advertise;
